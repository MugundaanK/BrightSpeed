app.service('userservices', ['$http', function($http){
    var myurl = 'http://localhost:3000/user';
    this.getuserData = function(cb){
        $http(
            {
                method:'GET',
                url:myurl
            }
        ).then(function(response){
            cb(response.data);
        },function(e){
            console.log(e);
        });
    }

    this.postuserData = function(userobj,cb){
        $http(
            {
                method:'POST',
                url:myurl,
                data:userobj
            }
        ).then(function(response){
            cb(response.data);
        },function(e){
            console.log(e);
        })
    }

}]);
