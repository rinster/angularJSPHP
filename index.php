<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AngularJS | PHP Tutorial</title>

    <link href="content/styles.css" rel="stylesheet" type="text/css" />
    <!-- Boostrap CDN -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />  
    <!-- Angular Import -->
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>  
    

</head>
<body>

    <br/><br/>  
    <div class="container" style="width:500px;">  
        <h3 align="center">AngularJS Tutorial with PHP - Full CRUD</h3>  
        <div ng-app="myapp" ng-controller="usercontroller" ng-init="displayData()">  

                <!-- Form Insert -->
                <label>First Name</label>  
                <input type="text" name="first_name" ng-model="firstname" class="form-control" />  
                <br />  
                <label>Last Name</label>  
                <input type="text" name="last_name" ng-model="lastname" class="form-control" />  
                <br />  
                <input type="submit" name="btnInsert" class="btn btn-info" ng-click="insertData()" value="ADD"/>  
        
                <!-- User Display Table-->
                <br /><br />  
                <table class="table table-bordered">  
                    <tr>  
                        <th>First Name</th>  
                        <th>Last Name</th>  
                    </tr>  
                    <tr ng-repeat="x in names">  
                        <td>{{x.first_name}}</td>  
                        <td>{{x.last_name}}</td>  
                    </tr>  
                </table>

        </div>  
    </div>

    <!--Link to app.js-->
    <script src="app/app.js"></script>
</body>
</html>