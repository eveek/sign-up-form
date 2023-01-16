const password_input = document.getElementById("password");
const confirm_password = document.getElementById("conf_password");
const password_error = document.getElementById("password_error");
const confirm_password_error = document.getElementById("conf_password_error");


function checkPassword() {
    const password_value = password_input.value;
    const confirm_password_value = confirm_password.value;
    if(password_value === confirm_password_value){
        return true;
    }else{
        return false;
    }
}

confirm_password.addEventListener("blur", ()=>{
    if(!checkPassword()){
        confirm_password_error.innerText = "*Passwords do not match";
        password_input.classList.add("unmatch");
        confirm_password.classList.add("unmatch");
    }else{
        confirm_password_error.innerText = "";
        password_input.classList.remove("unmatch");
        confirm_password.classList.remove("unmatch");
    }
})
password_input.addEventListener("blur", ()=>{
    if(confirm_password.value === "") return;
    if(!checkPassword()){
        confirm_password_error.innerText = "*Passwords do not match";
        password_input.classList.add("unmatch");
        confirm_password.classList.add("unmatch");
    }else{
        confirm_password_error.innerText = "";
        password_input.classList.remove("unmatch");
        confirm_password.classList.remove("unmatch");
    }
})