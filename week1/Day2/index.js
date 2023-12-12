
// // class:

// class person{
//     constructor(name,age,grade){
//         this.name = name;
//         this.age=age;
//         this.grade=grade;
//     }
// }
// let p2 = new person("Mugunth",22,"A");
// console.log(p2);

// // Abstraction:
// class person{
//     constructor(name,age,grade){
//         this.name = name;
//         this.age=age;
//         this.grade=grade;
//     }
//     getName(){ // abstraction 
//         return this.name;
//     }
//     getAge(){
//         return this.age;
//     }
//     getgrade(){
//         return this.grade;
//     }
// }
// let p1 = new person("Mugunth",22,"A");
// console.log(p1.getName());
// console.log(p1.getAge());
// console.log(p1.getgrade());

// Inheritance:

// class Animals{
//     speak(){
//         console.log("Animals make different sounds");
//     }
// }
// class Dog extends Animals{
//     constructor(name){
//         super(); // must be used in child class
//         this.name=name;
//     }
    
// }
// let d1 = new Dog("Doggy");
// console.log(d1.speak());

// // polymorphism: Method overridding


// class Animals{
//     speak(){
//         console.log("Animals make different sounds");
//     }
// }
// class Dog extends Animals{
//     constructor(name){
//         super(); // must be used in child class
//         this.name=name;
//         console.log(this.name);
//     }
//     speak(){
//         console.log("dog barks");
//     }
    
// }
// let d2 = new Dog("Doggy");
// d2.speak();


// Loops 
// for(let i=0 ; i<5 ; i++){
//     console.log(i+1);
// }

// arr = ["apple","orange","mango","grapes"]
//  for(let key in arr){ 
//     console.log(arr[key])
//  }

//  for(let val of arr){
//     console.log(arr[val]);
//  }

//  arr.forEach((item) =>{
//     console.log(item);
//  })

//  let i=0;

// while(i<10){
//     console.log(i)
//     i++
// }

// do{
//     console.log(i)
//     i++;
// }while(i<10)


// Scopes 

// // const a = 10;
// function f(){
//     b  = 20
//     console.log(b);
// }
// f()
// console.log(b)