var app = angular.module("myapp",[]);  

// User Controller
app.controller("usercontroller", function($scope, $http){  
     $scope.insertData = function(){  
          $http.post(  
               "data/insert.php",  
               {'firstname':$scope.firstname, 
               'lastname':$scope.lastname}  
          ).success(function(data){  
               alert(data);  
               $scope.firstname = null;  
               $scope.lastname = null;  
          });  
     }  
});  