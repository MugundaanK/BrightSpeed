
app.controller('getcontroller', ['$scope', 'userservices', function($scope, userservices){
    $scope.detailarr;
    $scope.getData = function(){
        $scope.detailarr = userservices.getData();
    }
}]);