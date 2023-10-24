<!-- Author: Filip Segota
Class: CSC261, Fall 2023
Assignment: PHP Assignment
File: feedback.php -->
<?php
//set values for connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "users";

//set up the connection
$conn = new mysqli($servername, $username, $password, $dbname);

//check if it connected without problems
if ($conn === false) {
    die("ERROR: Could not connect." . mysqli_connect_error());
}

//set variables as form values
$name = $_REQUEST['name'];
$gender = $_REQUEST['gender'];
$email = $_REQUEST['email'];

$work = $_REQUEST['work'];
//save work values as JSON string so it can be stored in single mySQL database column
$workJson = json_encode($work);

$inquiry = $_REQUEST['inquiry'];
$feedback = $_REQUEST['feedback'];

//insert values into database
$sql = "INSERT INTO feedback VALUES ('$name', '$gender', '$email', '$workJson', '$inquiry', '$feedback')";

//check if data was stored successfully
if (mysqli_query($conn, $sql)) {
    echo "Data stored in a database successfully!";
    echo nl2br("\n$name\n $gender\n $email\n $workJson\n $inquiry\n $feedback");
} else {
    echo "ERROR: $sql. " . mysqli_error($conn);
}

//close the connection
mysqli_close($conn);
?>