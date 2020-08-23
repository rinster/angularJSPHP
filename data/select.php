<?php  
 //select.php  
 $connect = mysqli_connect("localhost", "root", "root", "angularJSPHP");  
 $output = array();  
 $query = "SELECT * FROM tbl_user";  
 $result = mysqli_query($connect, $query);  

// Check if connection works
// Check connection
if (!$connect) {
    die("Connection failed: " . mysqli_connect_error());
}

 if(mysqli_num_rows($result) > 0)  
 {  
     //echo "fetching data";
      while($row = mysqli_fetch_array($result))  
      {  
           $output[] = $row;  
      }  
      echo json_encode($output);  
 }  
 ?>  