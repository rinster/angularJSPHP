var app = angular.module("myapp",[]);  

// User Controller
app.controller("usercontroller", function($scope, $http){ 
    
    //Create
     $scope.insertData = function(){  
          $http.post(  
               "data/insert.php",  
               {'firstname':$scope.firstname, 
               'lastname':$scope.lastname}  
          ).then(function(data){  
               alert(data);  
               $scope.firstname = null;  
               $scope.lastname = null;  
               $scope.displayData();
          });  
     }  

    // Read
    $scope.displayData = function(){    
        $http.get("data/select.php")  
        .then(function(data){ 
            console.log(data); 
             $scope.names = data.data;  
        });  
   }  
});  