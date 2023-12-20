var app = angular.module('demo',[])
app.controller('UserController',function($scope){
    $scope.name = 'Mugunth';
    $scope.age = 22;
    $scope.city = 'Salem';
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
});

app.controller('control',['$scope',function(s){
    s.name = 'Mugundaan K'
    s.city = 'Salem'
}])


var app = angular.module('demo',[])
app.controller('UserController',function($scope){
    $scope.name = 'Mugunth';
    $scope.age = 22;
    $scope.city = 'Salem';
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
});

app.controller('control',['$scope',function(s){
    s.name = 'Mugundaan K'
    s.city = 'Salem'
}])


