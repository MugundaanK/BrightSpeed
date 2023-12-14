

// class a{
//     output(){
//         console.log("class A Parent Class");
//     }
// }

// class b extends a{
//     constructor(){
//         super()

//     }
//     output(){
//         console.log("class B overrides class A");
//     }
// }
// const n = new b()
// const m = new a()

// // console.log(n.output())
// m.output()
// n.output()

// // xp and f :

// function addition(a,b){
//     console.log(a+b)
// }
// addition(10,20)

// let add = function(a,b){
//     console.log(a+b)
// }
// add(10,10)

// calc:


// let n1 = parseInt(prompt("Enter First Number"))
// let n2 = parseInt(prompt("Enter Second Number"))
// let op = prompt("Enter the Operation to be performed such + - * /")

// var sum = (a,b)=> alert("Output  "+(a+b))
// var sub = (a,b)=> alert("Output  "+(a-b))
// var mul = (a,b)=> alert("Output  "+(a*b))
// var div = (a,b)=> alert("Output  "+(a/b))

// switch (op) {
//     case "+":
//         sum(n1,n2)
//         break;
//     case "-":
//         sub(n1,n2)
//         break;
//     case "*":
//         mul(n1,n2)
//         break;
//     case "/":
//         div(n1,n2)
//         break;
//     default:
//         alert("Enter A Valid input")
//         break;
// }

// function rest(...num) {
//     for(let n of num)
//         console.log(n);
//     // console.log(num);
// }
// rest(1,2,3,4,5)
// rest(1,2,3,4)
// rest(1,2,3)
// rest(1,2)


// let arr = [1,2,3,4,5]

// function spread(a,b,c,d){
//     console.log(a+", "+b+", "+c+", "+d);
// }
// spread(...arr)



// console.log(c)
// var c=10
// console.log(c)
// let x
// console.log(x)

// let array = [1,2,3,4,5,6]

// array.pop()
// array.push(7)
// array.push(8)

// console.log(array.sort(function (b, a){ return a-b}))

// let arr = [1,2,3,4,5,6,7,8]
// console.log(arr.length);

// str = arr.toString()
// console.log(str);

// console.log(arr.shift());

// console.log(arr.unshift(1));

// console.log(arr);

// delete arr[3]
// console.log(arr);

// let arr1=[9,8,7,6]
// let arr2 = [7,8,9,10]
// console.log(arr.concat(arr1))
// console.log(arr.concat(arr1,arr2))
// arr.splice(5,9,9,8,7)
// console.log(arr);

// console.log(arr.slice(6))

// const a = ["Mango","orange","lime","Apple"]//Const keyword in array only gives the constant reference to the array not as normal const keyword
// console.log(a);
// a[0] = "Grapes"
// a.push("Kiwi")
// console.log(a);


// const b = 10
// console.log(b);

// b = 20
// console.log(b);


// Filter
// let arr =[
// {
//     name:"personA",
//     age:10
// },
// {
//     name:"personB",
//     age:15
// },
// {
//     name:"personC",
//     age:20
// }
// ]

// console.log(arr);

// let eligible = arr.filter((ele)=>{
//     return ele.age%2 == 0
// })
// console.log(eligible)

// MAP
// let productionlist = [
//     {
//         name:"Puma-Shoe",
//         price:1500
//     },
//     {
//         name:"nike-Shoe",
//         price:2000
//     },
//     {
//         name:"Fasttrack-Watch",
//         price:2500
//     }
// ]
// console.log(productionlist);


// Reduce

// let productionlist = []
// let p1={
//     name:"Apple I-phone",
//     price:55000
// }
// let p2={
//     name:"Samsung Galaxy S23",
//     price:70000
// }
// let p3={
//     name:"Google Pixel 8",
//     price:75000
// }

// productionlist.push(p1,p2,p3)

// console.log(productionlist);

// let discount = productionlist.map((ele)=>{
//     return ele.price - (ele.price * 10/100)
// })
// console.log(discount)

// let totalprice = productionlist.reduce((acc,ele)=>{
//     return acc+ele.price
// },0)
// console.log("The Total Price Of The Products are : "+totalprice);


// String Methods:

// Capitalizing The String:

// let string = "hi every one i'm mugundaan from salem"
// console.log(string)
// // let str = string.charAt(0).toUpperCase()+string.slice(1)
// // console.log(str);
// let str1 = string.split(" ")
// // console.log(str1)

// for(let i=0 ; i < str1.length ; i++){
//     str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1)
// }

// let str2 = str1.join(" ")
// console.log(str2)

// f()
// function f() {
//     var a = 10;
//     if(true){
//        let  a = 20;
//        console.log(a);
//     }
// }
