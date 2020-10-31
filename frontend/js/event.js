function inicio(){
    getUsers();
}
function getUsers(){
    fetch('http://localhost:5000/users',{method:'GET'})
    .then(response=>response.json())
    .then(msg=>verifyUser(msg))
}
function verifyUser(params){
    const form_index=document.getElementsByClassName("login-form")
    var form=document.form;
    var email=form.Correo;
    var password=form.Contraseña;
    var ver=false
    params.forEach(users=>{
        if ( email===users.email && password===users.password){
            ver=true;
            break;
        }
    })
    if (ver){
        form_index.submit()
        return true
    }else{
        return false
    }
}


