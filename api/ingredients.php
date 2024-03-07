<?php
/**
 * Returns the list of ingredients.
 */
require 'connect.php';

$ingredients = [];
$sql = "SELECT name, vegan, price FROM ingredients";

if ($result = mysqli_query($con, $sql)) {
    $cr = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $ingredients[$cr]['name'] = $row['name'];
        $ingredients[$cr]['vegan'] = $row['vegan'];
        $ingredients[$cr]['price'] = $row['price'];
        $cr++;
    }
    echo json_encode(['data' => $ingredients]);
} else {
    http_response_code(404);
}