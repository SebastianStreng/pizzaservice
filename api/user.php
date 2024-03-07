<?php
/**
 * Returns the list of user.
 */
require 'connect.php';

$user = [];
$sql = "SELECT id, username, password, firstName, lastName, streetName, housenumber, postalcode, city FROM user";

if ($result = mysqli_query($con, $sql)) {
    $cr = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $user[$cr]['id'] = $row['id'];
        $user[$cr]['username'] = $row['username'];
        $user[$cr]['password'] = $row['password'];
        $user[$cr]['firstName'] = $row['firstName'];
        $user[$cr]['lastName'] = $row['lastName'];
        $user[$cr]['streetName'] = $row['streetName'];
        $user[$cr]['housenumber'] = $row['housenumber'];
        $user[$cr]['postalcode'] = $row['postalcode'];
        $user[$cr]['city'] = $row['city'];
        $cr++;
    }

    echo json_encode(['data' => $user]);
} else {
    http_response_code(404);
}