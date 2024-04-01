let cajaUsuario=document.getElementById("Usuario")
let cajaCorreo=document.getElementById("Correo")
let cajaContraseña=document.getElementById("Contraseña")

// validando el formulario
let boton=document.getElementById("boton")

boton.addEventListener("click",function( evento
    ){evento.preventDefault()

    if(cajaUsuario.value=="" && cajaContraseña.value=="" && cajaCorreo.value==""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Revisa , tienes campos sin llenar!",
          
          });
    }else{
        Swal.fire({
            title: "Good job!",
            text: "Bienvenido. Espera un momento!",
            icon: "success"
          });
        setTimeout(function(){
            window.location.href="./home.html"
    
        },5000)
    }
})