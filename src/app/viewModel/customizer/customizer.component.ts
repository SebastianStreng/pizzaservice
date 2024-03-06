import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/interfaces/ingredient';
import { Order } from 'src/app/interfaces/order';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InvoiceOverviewComponent } from 'src/app/viewModel/customizer/invoiceOverview/invoiceOverview.component';
import { IngredientService } from 'src/app/services/ingredient-service/ingredient-service';
import { AuthenticationService } from 'src/app/services/authentification-service/authentification-service';
import { User } from 'src/app/interfaces/User';
import { Router } from '@angular/router';
import { Observable, toArray } from 'rxjs';
import { Base } from 'src/app/interfaces/base';
import { BaseService } from 'src/app/services/base-service/base-service';

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.css'],
  providers: [DialogService],
})
export class CustomizerComponent implements OnInit {
  ref: DynamicDialogRef | undefined;

  bases: Base[] = [];  
  selectedBase! : Base; 

  sauces: Base [] = [];
  selectedSauce!: Base; 

  cheeses: Base [] = [];
  selectedCheese!: Base; 

  selectedBases: Base[] = []; 

  ingredients: Ingredient[] = [];
  selectedIngredients: Ingredient[] = [];

  order!: Order;
  orders: Order[] = [];
  selectedOrder!: Order;

  specialWish!: string;
  count: number = 0;
  totalPrice!: number;

  error = '';
  success = '';

  currentlyLoggedInUser!: User;

  constructor(
    public dialogService: DialogService,
    private ingredientService: IngredientService,
    private baseService: BaseService,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getIngredients();
    
    this.getBases(); 

    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['Landing']);
    }
  }

  PlaceOrder() {
    this.show();
  }

  show() {
    this.ref = this.dialogService.open(InvoiceOverviewComponent, {
      data: {
        ordersProperty: this.orders,
        totalPriceProperty: this.totalPrice,
      },
      header: 'Overview',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
    });

    this.ref.onClose.subscribe();
  }


  //its an array of string, NOT of base, properties are lost , see in logs
  GetSelectedBases(){
    const selectedBases: Base[] = [];
  
    if (this.selectedBase) {
      selectedBases.push(this.selectedBase);
    }
  
    if (this.selectedSauce) {
      selectedBases.push(this.selectedSauce);
    }
  
    if (this.selectedCheese) {
      selectedBases.push(this.selectedCheese);
    }
  
    console.log('Selected Bases:', selectedBases);
    this.selectedBases = selectedBases; 
  }
  

  AddToOrder() {
    this.GetSelectedBases(); 
    const newOrder: Order = {
      base: this.selectedBases,
      id: this.generateRandomValue(),
      ingredients: [...this.selectedIngredients],
      price:
      Number(this.selectedBases.reduce(
        (total, base) => total + base.price,
        0
      )) +
        Number(this.selectedIngredients.reduce(
          (total, ingredient) => total + ingredient.price,
          0
        )),
      specialWish: this.specialWish,
    };
    console.log('order: ', newOrder)
    this.orders.push(newOrder);
    this.RestoreOrder();

    this.count = this.orders.length;
    this.updateTotalPrice();
  }

  RestoreOrder() {
    this.selectedIngredients.forEach((element) => {
      this.ingredients.unshift(element);
    });
    this.selectedIngredients = [];
    this.specialWish = '';
  }

  DeleteSelectedOrder(selectedOrder: Order) {
    const index = this.orders.findIndex(
      (order) => order.id === selectedOrder.id
    );
    if (index !== -1) {
      this.orders.splice(index, 1);
      this.count = this.orders.length;
      this.updateTotalPrice();
    }
  }

  DeteleAllOrders() {
    this.orders = [];
    this.count = this.orders.length;
    this.updateTotalPrice();
  }

  generateRandomValue(): number {
    const min = 100000;
    const max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  updateTotalPrice() {
    this.totalPrice = this.orders.reduce(
      (total, order) => total + order.price,
      0
    );
  }

  getBases(): void {
    this.baseService.getAll().subscribe({
      next: (data: Base[]) => {
        // Filter bases, sauces, and cheeses based on type
        this.bases = data.filter(item => item.type === 'dough');
        this.sauces = data.filter(item => item.type === 'sauce');
        this.cheeses = data.filter(item => item.type === 'cheese');
  
        this.selectedBase = this.bases[0]; 
        this.selectedSauce = this.sauces[0]; 
        this.selectedCheese = this.cheeses[0];

        this.success = 'Successful retrieval of the Bases';
      },
      error: (err) => {
        console.error(err);
        this.error = 'An error occurred while fetching data';
      },
      complete: () => console.log('Bases fetch complete'),
    });
  }


  getIngredients(): void {
    this.ingredientService.getAll().subscribe({
      next: (data: Ingredient[]) => {
        this.ingredients = data;
        this.success = 'Successful retrieval of the ingredients';
      },
      error: (err) => {
        console.error(err);
        this.error = 'An error occurred while fetching data';
      },
      complete: () => console.log('ingredients fetch complete'),
    });
  }
}
