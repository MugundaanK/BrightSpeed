
app.controller('postcontroller', ['$scope', 'userservices', function($scope, userservices){
    $scope.sendData = function(){
        $scope.userdet ={
            name: $scope.fullname,
            email: $scope.emailid,
            password: $scope.password
        }
        // console.log($scope.userdet);
        userservices.sendData($scope.userdet);
    }
}])