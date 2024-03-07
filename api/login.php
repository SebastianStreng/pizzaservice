<?php
require 'connect.php'; // Stelle sicher, dass dies zu deiner Datenbankverbindung führt
require __DIR__ . '/vendor/autoload.php';
use Firebase\JWT\JWT;

// Hole die übermittelten Daten
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    // Daten dekodieren
    $request = json_decode($postdata);

    // Überprüfe, ob Benutzername und Passwort gesetzt sind
    if (empty($request->username) || empty($request->password)) {
        http_response_code(400);
        echo json_encode(['error' => 'Username and password are required']);
        exit();
    }

    // Sanitize
    $username = mysqli_real_escape_string($con, $request->username);
    $password = mysqli_real_escape_string($con, $request->password);

    // Überprüfe die Anmeldeinformationen in der Datenbank
    $sql = "SELECT * FROM user WHERE username = '{$username}'";
    $result = mysqli_query($con, $sql);

    if (mysqli_num_rows($result) === 1) {
        $user = mysqli_fetch_assoc($result);

        // Überprüfe das Passwort
        if (password_verify($password, $user['password'])) {
            // Passwort ist korrekt, generiere das Token
            $token = generateToken($user);
            echo json_encode(['token' => $token, 'user' => $user]);
        } else {
            // Passwort ist falsch, sende einen Fehlerstatus zurück
            http_response_code(401);
            echo json_encode(['error' => 'Invalid password']);
        }
    } else {
        // Benutzer nicht gefunden, sende einen Fehlerstatus zurück
        http_response_code(401);
        echo json_encode(['error' => 'Invalid username']);
    }
}

function generateToken($user)
{
    $secretKey = 'your_secret_key'; 
    $issuedAt = time();
    $expirationTime = $issuedAt + 20; // Token läuft nach 1 Stunde ab
    $payload = [
        'user_id' => $user['id'],
        'username' => $user['username'],
        'firstName' => $user['firstName'],
        'lastName' => $user['lastName'],
        'streetName' => $user['streetName'],
        'houseNumber' => $user['houseNumber'],
        'postalCode' => $user['postalCode'],
        'city' => $user['city'],
        'iat' => $issuedAt,
        'exp' => $expirationTime
    ];

    $token = JWT::encode($payload, $secretKey, 'HS256');

    return $token;
}
?>