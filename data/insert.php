<?php  
 //insert.php
 // This file is in charge of sending data to the database
 $connect = mysqli_connect("localhost", "root", "root", "angularJSPHP");  
 $data = json_decode(file_get_contents("php://input"));  
 if(count($data) > 0)  
 {  
      $first_name = mysqli_real_escape_string($connect, $data->firstname);       
      $last_name = mysqli_real_escape_string($connect, $data->lastname);  
      $btn_name = $data->btnName;
      if($btn_name == 'Add')
    {
        $query = "INSERT INTO tbl_user(first_name, last_name) 
        VALUES ('$first_name', '$last_name')";  
        if(mysqli_query($connect, $query))  
        {  
        echo "Data Inserted...YAY";  
        }  
        else  
        {  
        echo 'Error in inserting record';  
        }  
    }
    if($btn_name == 'Update')
    {
        $id = $data->id;
        $query = "UPDATE tbl_user SET first_name = '$first_name', last_name = '$last_name' WHERE id = '$id'";
        if(mysqli_query($connect, $query))
        {
            echo 'Data Updated successfully';
        }
        else
        {
            echo 'Error in Updating Data';
        }
    }            
}  
 ?>  