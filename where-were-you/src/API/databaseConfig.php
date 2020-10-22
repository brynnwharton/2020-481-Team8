<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

$db_host = 'localhost';
$db_username = 'root';
$db_password = 'Sj@9845500150';
$db_name = 'WhereWereYou';
$mysqli = new mysqli($db_host, $db_username, $db_password,$db_name);

if ($mysqli->connect_error) {
die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}

// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
// header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
//
// define('DB_HOST', 'localhost');
// define('DB_USER', 'root');
// define('DB_PASS', 'Sj@9845500150');
// define('DB_NAME', 'WhereWereYou');
//
// function connect()
// {
//   $connect = mysqli_connect(DB_HOST ,DB_USER ,DB_PASS ,DB_NAME);
//
//   if (mysqli_connect_errno($connect)) {
//     die("Failed to connect:" . mysqli_connect_error());
//   }
//
//   mysqli_set_charset($connect, "utf8");
//
//   return $connect;
// }
//
// $con = connect();

?>
