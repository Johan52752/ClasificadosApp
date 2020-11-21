function init(){
    event();
}
function event(){
    const button=document.getElementById('button');
    button.addEventListener("click",(event)=>{
        event.preventDefault();
        const email=document.getElementById('email').value;
        const password=document.getElementById('password').value;
        verUser(email,password)
    })
}
function verUser(email, password){
    const data={
        email:email,
        password:password
    }
    fetch('http://localhost:5000/user',{
        method:'POST',
        body:JSON.stringify({
            "email":email,
            "password":password
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(res=>res.json())
    .then(response=>{
        if (response.length!=0){
            window.location.assign(`../html/landing.html?name=${response[0].name}`)
        }else{
            console.log("usuario incorrecto")
            window.alert("Usuario o contraseña incorrecta")
            window.location.reload()
        }
    }
    )
    
}
init();

