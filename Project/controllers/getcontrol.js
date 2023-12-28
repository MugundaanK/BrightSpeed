app.controller('getcontrol', ['$scope', 'userservices','$location','$window', function($scope, userservices, $location, $window){
    $scope.dataarr;

    $scope.loginCheck = function(){

        console.log($scope.password);
        $scope.data = userservices.getuserData(function(data){       
            $scope.dataarr = data;
            var state = true;
            
            
            for(let i of data){
                if($scope.email == i.email && $scope.password == i.password){   
                    alert('login Success');
                    state = false;
                    $location.path('/dashboard');
                    $window.localStorage.setItem("useremail",$scope.email); 
                }
            }

            if(state){
                alert('Login Unsuccess');
            }
        }); 
    }
    
    $scope.showPassword = false;
    $scope.passwordVisibility = function() {
        console.log('hi');
        $scope.showPassword = !$scope.showPassword;
    }

}]);


