var app = angular.module('myapp', ['ngRoute']);

app.config(function($routeProvider){

    $routeProvider
    .when('/home',{
        templateUrl:'../pages/navigation.html',

    }).when('/register',{
        templateUrl:'../pages/registerpage.html',
        controller:'postcontrol'
        
    }).when('/login',{
        templateUrl:'../pages/loginpage.html',
        controller:'getcontrol'

    }).when('/dashboard',{
        templateUrl:'../pages/dashboardpage.html',
        controller:'getdashdata'

    }).when('/about',{
        templateUrl:'../pages/aboutpage.html',

    }).otherwise({
        redirectTo:"/home"
     })

});
