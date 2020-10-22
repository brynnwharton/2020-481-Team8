<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', 'YOUR_PASSWORD');
define('DB_NAME', 'mydb');


// connect to database
function connect()
{
  $connect = mysqli_connect(DB_HOST ,DB_USER ,DB_PASS ,DB_NAME);

  if (mysqli_connect_errno($connect)) {
    die("Failed to connect:" . mysqli_connect_error());
  }

  mysqli_set_charset($connect, "utf8");

  return $connect;
}

$con = connect();


// Read from database

$policies = [];
$sql = "SELECT id, number, amount FROM policies";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $policies[$i]['id']    = $row['id'];
    $policies[$i]['number'] = $row['number'];
    $policies[$i]['amount'] = $row['amount'];
    $i++;
  }

  echo json_encode($policies);
}
else
{
  http_response_code(404);
}


// inset into database
// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);


  // Validate.
  if(trim($request->number) === '' || (float)$request->amount < 0)
  {
    return http_response_code(400);
  }

  // Sanitize.

  function sanitize($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

  $number = sanitize($request->number);
  $amount = sanitize($request->amount);


  // Create.
  $sql = "INSERT INTO `Account`(`FirstName`,`LastName`,`Address`, 'City', 'State', 'ZipCode', 'Email', 'Password') VALUES (null,'{$number}','{$amount}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $policy = [
      'number' => $number,
      'amount' => $amount,
      'id'    => mysqli_insert_id($con)
    ];
    echo json_encode($policy);
  }
  else
  {
    http_response_code(422);
  }
}
