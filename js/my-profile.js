let datos = {}
let usuario =JSON.parse(localStorage.getItem("mai"))
let aviso= document.getElementById("formprofile")
document.getElementById("email").value=usuario.mail

function setDatos(){   
      if(document.getElementById("nombre").value==="" || document.getElementById("apellido").value===""||document.getElementById("email").value===""){
            aviso.innerHTML = `  
            <div class="alert alert-info alert-dismissible fade show alertaReset mt-2" id="danger" style="position: static;" role="info">
              Debe completar su perfil con Nombre y Apellido y un Email en caso de que quiera cambiarlo.
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>  
            </div>`
      }else{
            datos.nombre = document.getElementById("nombre").value;
            datos.apellido = document.getElementById("apellido").value;
            datos.segundonombre = document.getElementById("segundonombre").value;
            datos.segundoapellido=document.getElementById("segundoapellido").value;
            datos.contacto = document.getElementById("contacto").value;
            datos.foto = document.getElementById("profilePhoto").src
            usuario.mail=document.getElementById("email").value
            localStorage.setItem("datosUsuario", JSON.stringify(datos))
            localStorage.setItem("mai", JSON.stringify(usuario));
            location.reload()
      }
                 }

function getDatos() {
      datos = JSON.parse(localStorage.getItem("datosUsuario"))
      usuario=JSON.parse(localStorage.getItem("mai"))
             document.getElementById("nombre").value = datos.nombre;
             document.getElementById("apellido").value = datos.apellido;
             document.getElementById("segundonombre").value = datos.segundonombre;
             document.getElementById("segundoapellido").value=datos.segundoapellido
             document.getElementById("contacto").value = datos.contacto;
             document.getElementById("profilePhoto").src = datos.foto;
             document.getElementById("email").value = usuario.mail      

}


function newPhoto() {
      let preview = document.getElementById('profilePhoto');
      let file    = document.getElementById('inputPhoto').files[0];
      let reader  = new FileReader();
        
      reader.onloadend = function () {
        preview.src = reader.result;
      }
      if (file) {
        reader.readAsDataURL(file);
      } else {
        preview.src = "";
      }
    }
    
document.addEventListener("DOMContentLoaded", function (e) {
     
      if (localStorage.datosUsuario===undefined) {
            setDatos();
          
      }else {getDatos()};
      
});