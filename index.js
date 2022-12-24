function reloadpage(){
    var refreshToken = localStorage.getItem("refreshToken")
    if(refreshToken){
        window.location.href="profile.html"
    }
}
function submitForm(){debugger
    let fullName = document.getElementById("fullName").value
    let email = document.getElementById('email').value
    let password = document.getElementById("password").value
    let confirmPassword = document.getElementById('confirmPassword').value
    
    var refreshToken = "xyzqwerty65654kijggvhbhbhvg"
   var data = {
    "fullName":fullName,
    "email":email,
    "password":password,
    
   }
   localStorage.setItem("data",JSON.stringify(data))
   localStorage.setItem("refreshToken",refreshToken)
   window.location.href="profile.html"
   
}
 
function getProfileDta(){
    var values = JSON.parse(localStorage.getItem("data"))
    debugger;
    document.getElementById("loginName").textContent=values.fullName
    document.getElementById("loginEmail").textContent=values.email
    document.getElementById("loginPassword").textContent=values.password
}
 
function logout(){
    localStorage.clear()
    window.location.href="index.html"
}