<<<<<<< HEAD
var app = angular.module('demo',[])
app.controller('UserController',function($scope){
    // $scope.name = 'Mugunth';
    // $scope.age = 22;
    // $scope.city = 'Salem';
    function sum(a,b) {
        return a+b;
    }
    $scope.add=sum(10,20);

    var a = 60;
    var b = 20
    $scope.sub = function(){
        return a-b;
    }
    $scope.mul = function(){
        return a*b;
    }
    $scope.div = () =>{
        return a/b;
    }
=======
var app = angular.module('demo',[])
app.controller('UserController',function($scope){
    // $scope.name = 'Mugunth';
    // $scope.age = 22;
    // $scope.city = 'Salem';
    function sum(a,b) {
        return a+b;
    }
    $scope.add=sum(10,20);

    var a = 60;
    var b = 20
    $scope.sub = function(){
        return a-b;
    }
    $scope.mul = function(){
        return a*b;
    }
    $scope.div = () =>{
        return a/b;
    }
>>>>>>> 4ad8b5bf3a6ed871301cd5fe6a0368b7c04328f0
});