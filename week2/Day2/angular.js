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

app.controller('directive',function($scope){
    var arr = [10,30,20,60,40,70,50];
      console.log(arr.sort(function(a,b){return a-b}));

      var array = [
          {"number":3,"value":"test"},
          {"number":1,"value":"test"},
          {"number":2,"value":"test"}
      ];

      var b = JSON.parse('{"number" : 5,"value" : "Mugunth"},{"number":3,"value":"test"},{"number":1,"value":"test"},{"number":2,"value":"test"}')
      console.log(b);
      var array = [
          {id:3, name:'Muugnth'},
          {id:2, name:'Karthik'},
          {id:1, name:'Gowsick'}
      ];

      console.log(array.sort((a, b)=>{if(a.number<b.number){return -1;}}));
      console.log(array.sort((a,b)=>{return a.number-b.number}));
})


