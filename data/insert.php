<?php  
 //insert.php
 // This file is in charge of sending data to the database
 $connect = mysqli_connect("localhost", "root", "root", "angularJSPHP");  
 $data = json_decode(file_get_contents("php://input"));  
 if(count($data) > 0)  
 {  
      $first_name = mysqli_real_escape_string($connect, $data->firstname);       
      $last_name = mysqli_real_escape_string($connect, $data->lastname);  
      $query = "INSERT INTO tbl_user(first_name, last_name) 
                VALUES ('$first_name', '$last_name')";  
      if(mysqli_query($connect, $query))  
      {  
           echo "Data Inserted...YAY";  
      }  
      else  
      {  
           echo 'Error';  
      }  
 }  
 ?>  