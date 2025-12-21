function validateForm(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let valid = true;
    // name validation
    if(name == ""){
        document.getElementById("nameError").innerText = "Name required";
        valid = false;
    }
    else{
        document.getElementById("nameError").innerText = "";
    }

     // email validation
    if(email == ""){
        document.getElementById("emailError").innerText = "email required";
        valid = false;
    }
    else{
        document.getElementById("emailError").innerText = "";
    }
     // password validation
    if(password.length < 6){
        document.getElementById("passwordError").innerText = "minimum 6 characters";
        valid = false;
    }
    else{
        document.getElementById("passwordError").innerText = "";
    }
    return valid;
}
