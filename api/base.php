<?php
/**
 * Returns the list of bases.
 */
require 'connect.php';

$bases = [];
$sql = "SELECT id, name, price, type FROM bases";

if ($result = mysqli_query($con, $sql)) {
    $cr = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $bases[$cr]['id'] = $row['id'];
        $bases[$cr]['name'] = $row['name'];
        $bases[$cr]['price'] = $row['price'];
        $bases[$cr]['type'] = $row['type'];
        $cr++;
    }
    echo json_encode(['data' => $bases]);
} else {
    http_response_code(404);
}
