function submitForm(){
    let fullName = document.getElementById("fullName").value
    let email = document.getElementById('email').value
    let password = document.getElementById("password").value
    let confirmPassword = document.getElementById('confirmPassword').value
    
    document.getElementById('loginName').textContent=fullName
    document.getElementById('loginEmail').textContent=email
    document.getElementById('loginPassword').textContent=password
 
    console.log(fullName,email,password,confirmPassword)
 
    resetSubmitField()
    
}
 
const resetSubmitField =()=> {
    
    document.getElementById('fullName').value = ""
    document.getElementById('email').value = ""
    document.getElementById('password').value = ""
    document.getElementById('confirmPassword').value = ""
   
}