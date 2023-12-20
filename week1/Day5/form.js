
function Postdata() {
    let fname = document.getElementById("title").value
    let lname = document.getElementById("author").value
    let email = 

    fetch(' http://localhost:3000/user',{
        method: "POST",
        headers:{
            'content-type' : 'application/json'
        },
        body:JSON.stringify({
            fname : fname,
            lname : lname
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
        for (const i in data) {
            let titlename = document.getElementById("title").value
            let authorname = document.getElementById("author").value
        
            if(titlename == data[i].title && authorname == data[i].author){
                console.log("Successful Login");
            }
            else{
                console.log("Unsuccessful Login");
            }

            // disp.appendChild(h)
            // disp.appendChild(p)
            // disp.innerHTML = `<hr>`
        }
    })
    .catch(error =>console.log(error));
}