<?php
require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    // Extract the data.
    $request = json_decode($postdata);

    // Validate.
    if (
        trim($request->data->username) === '' ||
        trim($request->data->firstName) === '' ||
        trim($request->data->password) === '' ||
        trim($request->data->lastName) === '' ||
        trim($request->data->streetName) === '' ||
        trim($request->data->houseNumber) === '' ||
        trim($request->data->postalCode) === '' ||
        trim($request->data->city) === ''
    ) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid input']);
        exit();
    }

    // Sanitize.
    $username = mysqli_real_escape_string($con, trim($request->data->username));
    $password = password_hash(mysqli_real_escape_string($con, trim($request->data->password)), PASSWORD_DEFAULT);
    $firstName = mysqli_real_escape_string($con, trim($request->data->firstName));
    $lastName = mysqli_real_escape_string($con, trim($request->data->lastName));
    $streetName = mysqli_real_escape_string($con, trim($request->data->streetName));
    $houseNumber = mysqli_real_escape_string($con, trim($request->data->houseNumber));
    $postalCode = mysqli_real_escape_string($con, trim($request->data->postalCode));
    $city = mysqli_real_escape_string($con, trim($request->data->city));

    // Store.
    $sql = "INSERT INTO `user`(`username`, `password`, `firstName`, `lastName`, `streetName`, `houseNumber`, `postalCode`, `city`) 
          VALUES ('{$username}', '{$password}', '{$firstName}', '{$lastName}', '{$streetName}', '{$houseNumber}', '{$postalCode}', '{$city}')";

    if (mysqli_query($con, $sql)) {
        http_response_code(201);
        $user = [
            'id' => mysqli_insert_id($con),
            'username' => $username,
            'firstName' => $firstName,
            'lastName' => $lastName,
            'streetName' => $streetName,
            'houseNumber' => $houseNumber,
            'postalCode' => $postalCode,
            'city' => $city
        ];
        echo json_encode(['data' => $user]);
    } else {
        http_response_code(422);
        echo json_encode(['error' => 'Database error']);
    }
}
?>