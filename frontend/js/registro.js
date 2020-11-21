function init(){
    registro();
}

function registro(){
    const button=document.getElementById('button')
    button.addEventListener("click",(event)=>{
        event.preventDefault();
        const name= document.getElementById('Nombre').value
        const email= document.getElementById('email').value
        const password= document.getElementById('password').value
        const password2= document.getElementById('password2').value
        if(password===password2){
            fetch('http://localhost:5000/users',{
                method:'POST',
                body:JSON.stringify({
                    "email":email,
                    "password":password,
                    "name":name
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(res=>res.json())
            .then(response=>{
                window.location.assign(`../html/landing.html?name=${response[0].name}`)
            })
            
        }else{
            window.alert("Las contraseñas no coinciden")
        }
    })
    
}
init();