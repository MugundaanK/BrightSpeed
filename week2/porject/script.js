function logout() {
    localStorage.removeItem("name");
    localStorage.removeItem("password");
    window.location.href = "./loginPage.html"
}


function postData() {
    event.preventDefault();
    const formEl = document.querySelector(".signupForm");
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);
    console.log(data);
    fetch("http://localhost:3000/user", {
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    }).then(resp => resp.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

function loginCheck() {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;

    console.log(email,password);
    let state = true;
    fetch("http://localhost:3000/user")
    .then(resp => resp.json())
    .then(data => {
        for(let i of data){
            if(email == i.email && password == i.password){
                localStorage.setItem("name",i.firstname)
                window.location.href = "http://127.0.0.1:5500/week2/porject/dashboardPage.html"
                console.log("Sucess");
                state = false
            }
        }
        if(state){
            console.log("Unsuccess");
        }
    })
}