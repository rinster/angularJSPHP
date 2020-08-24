var app = angular.module("myapp",[]);  

// User Controller
app.controller("usercontroller", function($scope, $http){ 
    
    //Button names
    $scope.btnName = "Add";

    //Create
     $scope.insertData = function(){
         if($scope.firstname == null)
         {
             alert("First name is required");
         }  
         else if ($scope.lastname == null)
         {
             alert("Last name is required");
         }
         else 
         {
            $http.post(  
                "data/insert.php",  
                {'firstname':$scope.firstname, 
                'lastname':$scope.lastname, 
                'btnName':$scope.btnName, 
                'id':$scope.id}   
            ).then(function(data){  
                alert(data.data);  
                $scope.firstname = null;  
                $scope.lastname = null;  
                $scope.displayData();
            }); 
         } 
     }  

    // Read
    $scope.displayData = function(){    
        $http.get("data/select.php")  
        .then(function(data){ 
            //console.log(data.data); 
             $scope.names = data.data;  
        });  
    } 
    
    // Update
    $scope.updateData = function(id, first_name, last_name){
        $scope.id = id;
        $scope.firstname = first_name;
        $scope.lastname = last_name;
        $scope.btnName = "Update";
    }
});  