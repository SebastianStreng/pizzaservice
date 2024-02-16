import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/interfaces/ingredient';
import { Order } from 'src/app/interfaces/order';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InvoiceOverviewComponent } from 'src/app/dialogs/invoiceOverview/invoiceOverview.component';

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.css'],
  providers: [DialogService]
})
export class CustomizerComponent implements OnInit {

  constructor(public dialogService: DialogService){}

  ref: DynamicDialogRef | undefined;

  ingredients: Ingredient[] = [];
  selectedIngredients: Ingredient[] = [];
  order!: Order;
  orders: Order[] = [];
  specialWish!: string;
  selectedOrder!: Order;
  count: number = 0;
  totalPrice!: number; 


  PlaceOrder() {
      this.show(); 
  }

  show() {
    this.ref = this.dialogService.open(InvoiceOverviewComponent, {
      data: {
        ordersProperty: this.orders,
        totalPriceProperty: this.totalPrice
      },
        header: 'Overview',
        width: '70%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: true
    });

    this.ref.onClose.subscribe();
}

  AddToOrder() {
    const newOrder: Order = {
      id: this.generateRandomValue(),
      ingredients: [...this.selectedIngredients], 
      price:
        8 +
        this.selectedIngredients.reduce(
          (total, ingredient) => total + ingredient.price,
          0
        ),
      specialWish: this.specialWish,
    };
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
    const index = this.orders.findIndex(order => order.id === selectedOrder.id);
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

  updateTotalPrice(){
    this.totalPrice = 
    this
    .orders
    .reduce((total, order) => total + order.price, 0);
  }

  ngOnInit(): void {
    this.ingredients = [
      { name: 'Garlic', vegan: false, price: 2 },
      { name: 'Ham', vegan: false, price: 2 },
      { name: 'Tomato', vegan: false, price: 2 },
      { name: 'Pepper', vegan: false, price: 2 },
      { name: 'Mozarella', vegan: false, price: 2 },
      { name: 'Cheese', vegan: false, price: 2 },
      { name: 'Basil', vegan: false, price: 2 },
      { name: 'Chilli', vegan: false, price: 2 },
      { name: 'Sausages', vegan: false, price: 2 },
      { name: 'Corn', vegan: false, price: 2 },
      { name: 'Mushroom', vegan: false, price: 2 },
    ];
  }
}
