app.service('demoservices',['$http', function($http){
    var arr = [10,20,30,40,50];
    this.getData = () =>{ return arr }

    this.sendData = (item) => {arr.push(item)}
}])