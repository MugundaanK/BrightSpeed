// let d1 = document.getElementById("div1");
// let d2 = document.getElementById("div2");
// let d3 = document.getElementById("div3");

// function d1click() {
//     // event.stopPropagation()
//     console.log("div1 got Clicked");
// }
// function d2click() {
//     // event.stopPropagation()
//     console.log("div2 got Clicked");
// }
// function d3click(){
//     console.log("div3 got Clicked");
// }

// d1.addEventListener("click",d1click,true)
// d2.addEventListener("click",d2click,true)
// d3.addEventListener("click",d3click,tru)


// fetch('https://jsonplaceholder.typicode.com/photos/1')
// .then((res) => res.json())
// .then((data) => console.log(data))


let disp = document.getElementById("Display")



// var xhr = new XMLHttpRequest();
// xhr.open('GET','https://jsonplaceholder.typicode.com/albums/1/photos',true);
// xhr.send()
// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         // Response is ready and status is OK
//         var responseData = xhr.responseText;
//         var jstext = JSON.parse(responseData)
//         // Process the response data
//         console.log(jstext);
//         for(let i in jstext){
//             let h = document.createElement("h2")
//             let p = document.createElement("p")
//             h.innerHTML = jstext[i].id
//             p.innerHTML = jstext[i].title
//             disp.appendChild(h)
//             disp.appendChild(p)
//             let hr = document.createElement("hr")
//             disp.appendChild(hr)
//         }
//     }
// }

   
// function localdoc() {
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4 && xhr.status === 200){
//             document.getElementById("Disp").innerHTML = xhr.responseText;
//         }
//    }
//    xhr.open('GET','ajax.txt',true);
//    xhr.send()
// }


// function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById("Disp").innerHTML = this.responseText;
//         }
//     };
//     xhttp.open("GET", "ajax.txt", true);
//     xhttp.send();
// }


function Postdata() {
    let titlename = document.getElementById("title").value
    let authorname = document.getElementById("author").value

    fetch(' http://localhost:3000/user',{
        method: "POST",
        headers:{
            'content-type' : 'application/json'
        },
        body:JSON.stringify({
            title : titlename,
            author : authorname
        })
    })
    .then()
    .then()
    .catch()
}


function fetchdata() {
    fetch('http://localhost:3000/user')
    .then(resp => resp.json())
    .then(data =>{
        let titlename = document.getElementById("title").value
        let authorname = document.getElementById("author").value
        let state = true
        for (const i of data) {
            if(titlename == i.title && authorname == i.author){
                console.log("Successful Login");
                state = false
                break;
            }
        }
        if(state){
            console.log("Unsuccessful Login");
        }
            // disp.appendChild(h)
            // disp.appendChild(p)
            // disp.innerHTML = `<hr>`
    })
    .catch(error =>console.log(error));
}