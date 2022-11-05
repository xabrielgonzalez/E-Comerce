var email = document.getElementById("email")
var pass = document.getElementById("pass")
const parrafo = document.getElementById("warnings")

document.addEventListener("submit", e=>{

    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    
   
        
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        window.location.href="home.html"
        parrafo.innerHTML = "Enviado"
    }
    
      let usuario = {
            mail: document.getElementById("email").value
        }
       
        localStorage.setItem("mai", JSON.stringify(usuario));
   })

