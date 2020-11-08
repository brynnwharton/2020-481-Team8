<?php

	include_once ('databaseConfig.php');
	$post = file_get_contents('php://input');

	var_dump($post);
  function sanitize($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
 }

 if(isset($postdata) && !empty($postdata))
 {
	 $post = json_decode($post);
   $firstname = sanitize($post->FirstName);
   $lastname = sanitize($post->LastName);
   $address = sanitize($post->Address);
   $city = sanitize($post->City);
   $state = sanitize($post->State);
   $zipcode = sanitize($post->ZipCode);
   $email = sanitize($post->Email);
   $password = sanitize($post->Password);

  $sql = "INSERT INTO `Account`(`FirstName`,`LastName`,`Address`, 'City', 'State', 'ZipCode', 'Email', 'Password')
  VALUES ('{$firstname}','{$lastname}','{$address}','{$city}','{$state}','{$zipcode}','{$email}','{$password}')";

	if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $user = [
      'firstName' => $number,
      'lastName' => $amount,
      'address'  => $address,
			'city' => $city,
      'state' => $state,
      'zip'  => $zipcode,
			'email' => $email,
      'password'  => $password,
			'id'=> mysql_insert_id($con)
    ];
    echo json_encode($user);
  }
  else
  {
    http_response_code(422);
  }
	// $result = $mysqli->query($sql);
	//
	// $sql = "SELECT * FROM Account Order by Id desc LIMIT 1";
	// $result = $mysqli->query($sql);
	// $data = $result->fetch_assoc();

	//echo json_encode($data);
}
?>
