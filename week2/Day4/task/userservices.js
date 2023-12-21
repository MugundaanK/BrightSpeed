
app.service('userservices',['$http', function($http){
    this.userarr=[];
    this.getData = function(){
        return this.userarr;
    }

    this.sendData = function(data){
        this.userarr.push(data);
        console.log(this.userarr);
    }
}])