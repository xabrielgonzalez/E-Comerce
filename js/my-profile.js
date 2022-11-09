let datos = {}
let usuario =JSON.parse(localStorage.getItem("mai"))
let aviso= document.getElementById("formprofile")
function setDatos(){   
            datos.nombre = document.getElementById("nombre").value;
            datos.apellido = document.getElementById("apellido").value;
            datos.segundonombre = document.getElementById("segundonombre").value;
            datos.segundoapellido=document.getElementById("segundoapellido").value;
            datos.contacto = document.getElementById("contacto").value;
            datos.foto = document.getElementById("profilePhoto").src;
            localStorage.setItem("datosUsuario", JSON.stringify(datos))
            localStorage.setItem("mai", JSON.stringify(usuario));
            location.reload()

            
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