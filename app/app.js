var app = angular.module("myapp",['ngRoute']);  

//Config routes
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'views/userList.html',
        controller: 'usercontroller'
    })
    .when('/addImage', {
        templateUrl: 'views/fileUpload.html',
        controller: 'fileUploader'
    });
});


// User Controller
app.controller("usercontroller", function($scope, $http){ 
    
    //Button names - on page load, set btn name to ADD
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
            ).finally(function(){  
                //alert(data.data); 
                //console.log(data); 
                $scope.firstname = null;  //set input to blank
                $scope.lastname = null;  // set input to blank
                $scope.btnName = "Add"; // reset btnName to Add
                $scope.displayData();
            }).catch(function(error){
                return error;
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
        $scope.btnName = "Update"; //On click updateData, change btnName to "Update"
    }

    // Delete
    $scope.deleteData = function(id){
        if(confirm("Are you sure you want to delete this data?"))
        {
            $http.post("data/delete.php", {'id':id})
            .then(function(data){
                alert(data.data);
                $scope.displayData();
            });
        }
        else
        {
            return false;
        }
    }
});  

// File upload Controller
app.directive("fileInput", function($parse){  
    return{  
         link: function($scope, element, attrs){  
              element.on("change", function(event){  
                   var files = event.target.files;  
                   //console.log(files[0].name);  
                   $parse(attrs.fileInput).assign($scope, element[0].files);  
                   $scope.$apply();  
              });  
         }  
    }  
});  
app.controller("fileUploader", function($scope, $http){  
    $scope.uploadFile = function(){  
         var form_data = new FormData();  
         angular.forEach($scope.files, function(file){  
              form_data.append('file', file);  
         });  
         $http.post('upload.php', form_data,  
         {  
              transformRequest: angular.identity,  
              headers: {'Content-Type': undefined,'Process-Data': false}  
         }).success(function(response){  
              alert(response);  
              $scope.select();  
         });  
    }  
    $scope.select = function(){  
         $http.get("select.php")  
         .success(function(data){  
              $scope.images = data;  
         });  
    }  
}); 