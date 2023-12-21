var app = angular.module('demo',[])
app.controller('servicecontrol',['$scope', 'demoservices', function($scope, demoservices){

    $scope.arr;
    $scope.getData = function(){
        $scope.arr = demoservices.getData();
    }

    $scope.sendData = function(item){
        demoservices.sendData(item);
    }
}]);