var app = angular.module('demo',[])
app.controller('dellistitem',['$scope',(s)=>{
    s.namearr = ['Mugundaan','Karthik','Gowsick','Gokul'];
    console.log(s.namearr);
    s.removelistitem = (name) => {
        var index = s.namearr.indexOf(name);
        console.log(index);
        if(index != -1){
            s.namearr.splice(index,1);
        }
    };
}])