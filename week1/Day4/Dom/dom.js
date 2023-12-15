
// // let h = document.getElementsByClassName("head")[0]
// // console.log(h);

// // let p = document.getElementById("h1")

// // h.style.color = "red"


// // function chgclr(){
// //     h2.style.color = "pink"
// // }

// // h2.addEventListener("click",chgclr)


// // Queryselector

// // let h = document.querySelector(".head")
// // h.style.color = "red"
// // console.log(h)


// // let disp = document.querySelector("#hi")

// // function display(){
// //     disp.innerHTML = document.getElementById("a").value
// // }

// // let p1={
// //     name : "Mugunth",
// //     age : 22,
// //     city : "Salem"
// // }
// // let p2={
// //     name : "Gowsick",
// //     age : 22,
// //     city : "Bangalore"
// // }
// // let p3={
// //     name : "Karthik",
// //     age : 24,
// //     city : "Chennai"
// // }

// // let arr = []
// // arr.push(p1,p2,p3)

// // console.log(arr);

// // let div = document.querySelector("#div")

// // function display() {
// //     for(let i=0; i<arr.length ; i++){
// //         let h = document.createElement("h2")
// //         h.innerHTML = arr[i].name
// //         div.appendChild(h)
// //     }
// // }


// // let name = document.getElementById("name")
// // let pass = document.getElementById("pass")
// // let disp = document.getElementById("disp")

// // function display() {
// //     event.preventDefault()
// //     console.log(name.value)
// //     console.log(pass.value)
// //     disp.innerHTML = `Welcome ${name.value}`
// // }


// let arr = ["Mugunth","Gowsick","Karthik","Gokul"]

// let disp = document.getElementById("disp")
// let li
// disp.innerHTML =`<h3> Display Names</h3>`
// function remfromarr(){
    
//     for (let i = 0; i < arr.length; i++) {
//         li = document.createElement("li")
//         li.innerHTML = arr[i]
//         // li.setAttribute("id",i+1)
//         // // console.log(li.id)
//         disp.appendChild(li)
//         var iden = i
//         console.log(iden)
//         click(iden)
//     }
    
// }

        
// function click(iden){

//     li.onclick = function (){
//         // let li = document.createElement("li")
//         // let index = arr.indexOf(iden)
//         arr.splice(iden,1)
//         // console.log(arr);
//         disp.innerHTML=""


//         remfromarr()
//     }

// }

//     // for(let i=0 ; i<arr.length ; i++){
//     // let li = document.createElement("li")
//     // li.innerHTML = arr[i]
//     // // li.setAttribute("id",i+1)
//     // // console.log(li.id)
//     // disp.appendChild(li)
//     // }            
//     // }

// remfromarr()

let display = document.getElementById("display");
let name = ['bob','alice','john','mathew'];
let p;

function s(){
    for(let i=0;i<name.length;i++){
         p = document.createElement('li');
        p.innerHTML = name[i];
        display.appendChild(p);
         c(i);
    }
}

function c(val){
    p.onclick = function f(){
            name.splice(val,1);
            display.innerText="";
            
        s();
   }
 
}
s();