// Function Currying  Function currying is a technique in functional programming where a 
// function is transformed into a sequence of functions, 
// each taking a single argument.

// let fun1 = function(){
//     return function(){console.log("Inner Function");}
// }
// let fun2 = fun1()
// fun2()

// Closure

// function f1(){
//     let a = 10;
//     function f2(){
//         var a = 40
//         console.log(a);
//     }
//     f2()
// }
// f1()

// function main(msg){
//     console.log(msg)
// }
// function call1(){
//     main("Call Back 1")
// }
// function call2(){
//     main("Call Back 2")
// }
// call1()
// call2()


// function main(msg){
//     console.log("main");
//     console.log(msg)
// }
// function call1(n1,n2){
//     console.log("call1");
//     return n1+n2
// }

// console.log("Calling call1");
// let res = call1(20,30)
// console.log("Calling main");
// main(res)


f()
function f(){
    let a = "Geeks"

    if(true){
        let a = "Hello"
        console.log(a);
    }
    console.log(a);
}

