let empleados=Array(
    {
        id:1,
        nombre:"Zharick Salgado", 
        cargo:"Jefe",
        Telefono:"3044479197",
        Correo:"zsalgado1015@gmail.com",
        Salario: 6000000,
        ContactoEmergencia:"3006578674",
        Foto:"./img/empleado1.jpg"

    },

    {
        id:2,
        nombre:"Ana Salcedo", 
        cargo:"Gerente",
        Telefono:"3054479127",
        Correo:"anasalcedo@gmail.com",
        Salario: 3000000,
        ContactoEmergencia:"3006578674",
        Foto:"./img/emplead2.jpg"

    },

    {
        id:3,
        nombre:"Laura Cano", 
        cargo:"Servicio al cliente",
        Telefono:"3045449127",
        Correo:"lauracano10@gmail.com",
        Salario: 1300000,
        ContactoEmergencia:"3006578674",
        Foto:"./img/producto3.jpg"

    },

    {
        id:4,
        nombre:"Brenda Ortiz", 
        cargo:"Progrmadora",
        Telefono:"3044329197",
        Correo:"brendaortiz15@gmail.com",
        Salario: 3000000,
        ContactoEmergencia:"3006578674",
        Foto:"./img/empleado4.jpg"

    },

    {
        id:5,
        nombre:"Maria perez", 
        cargo:"Programadora",
        Telefono:"3054275197",
        Correo:"maria1524@gmail.com",
        Salario: 3000000,
        ContactoEmergencia:"3006578674",
        Foto:"./img/empleado5.jpg"

    },

    {
        id:6,
        nombre:"Carlos Restrepo", 
        cargo:"Director de bodega",
        Telefono:"3034472497",
        Correo:"calosrestrepo@gmail.com",
        Salario: 3000000,
        ContactoEmergencia:"3006578674",
        Foto:"./img/empleado6.jpg"

    },

    {
        id:7,
        nombre:"Andres Gonzales", 
        cargo:"Auxiliar de bodega",
        Telefono:"3243479157",
        Correo:"gonzalesandres15@gmail.com",
        Salario: 1300000,
        ContactoEmergencia:"3006578674",
        Foto:"./img/empleado7.jpg"

    },

    {
        id:8,
        nombre:"Paula Andrea Serpa", 
        cargo:"Contadora",
        Telefono:"321479197",
        Correo:"pauserpa5@gmail.com",
        Salario: 5000000,
        ContactoEmergencia:"3006578674",
        Foto:"./img/empleado8.jpg"

    },

    {
        id:9,
        nombre:"Manuel Acevedo", 
        cargo:"Contador",
        Telefono:"3243472197",
        Correo:"acemanuel@gmail.com",
        Salario:5000000,
        ContactoEmergencia:"3006578674",
        Foto:"./img/empleado9.jpg"

    },

    {
        id:10,
        nombre:"Andrea Salgado", 
        cargo:"vendedora",
        Telefono:"3043470198",
        Correo:"dsalcedove015@gmail.com",
        Salario: 1300000,
        ContactoEmergencia:"3006578674",
        Foto:"./img/empleado10.jpg"

    },

    {
        id:11,
        nombre:"Juan Ruiz", 
        cargo:"Vendedor",
        Telefono:"3044239157",
        Correo:"ruisverjua015@gmail.com",
        Salario: 1300000,
        ContactoEmergencia:"3006578674",
        Foto:"./img/empleado11.jpg"

    },
    {
        id:12,
        nombre:"Gabriela Ortiz", 
        cargo:"Vendedora",
        Telefono:"3254479597",
        Correo:"gabiortiz5@gmail.com",
        Salario: 1300000,
        ContactoEmergencia:"3006578674",
        Foto:"./img/empleado12.jpg"

    },

    {
        id:13,
        nombre:"Luis Fernando Jaramillo", 
        cargo:"Marketing",
        Telefono:"303215467",
        Correo:"fernandojara1015@gmail.com",
        Salario: 3000000,
        ContactoEmergencia:"3006578674",
        Foto:"./img/empleado13.jpg"

    },

    {
        id:14,
        nombre:"Adriana Contreras", 
        cargo:"Organizadora",
        Telefono:"3034429177",
        Correo:"adriwbr@gmail.com",
        Salario: 1400000,
        ContactoEmergencia:"3006578674",
        Foto:"./img/empleado14.jpg"

    },

    {
        id:15,
        nombre:"Rosa Mena", 
        cargo:"Organizadora",
        Telefono:"3024579197",
        Correo:"menarosa12@gmail.com",
        Salario: 1400000,
        ContactoEmergencia:"3006578674",
        Foto:"./img/empleado15.jpg"

    },

    {
        id:16,
        nombre:"Aura Hernadez", 
        cargo:"Organizadora",
        Telefono:"30454879197",
        Correo:"hernandezaura232@gmail.com",
        Salario: 1400000,
        ContactoEmergencia:"3006578674",
        Foto:"./img/empleado16.jpg"

    },

    {
        id:17,
        nombre:"Claudia Lopez", 
        cargo:"Servicios generales",
        Telefono:"3044479197",
        Correo:"zsalgado1015@gmail.com",
        Salario: 6000000,
        ContactoEmergencia:"3006578674",
        Foto:"./img/empleado1.jpg"

    },

    {
        id:18,
        nombre:"Camilo Chica", 
        cargo:"Domiciliario",
        Telefono:"3044479197",
        Correo:"zsalgado1015@gmail.com",
        Salario: 6000000,
        ContactoEmergencia:"3006578674",
        Foto:"./img/empleado1.jpg"

    },

    {
        id:19,
        nombre:"Guillermo Flores", 
        cargo:"Celador",
        Telefono:"3044479197",
        Correo:"zsalgado1015@gmail.com",
        Salario: 6000000,
        ContactoEmergencia:"3006578674",
        Foto:"./img/empleado1.jpg"

    },

    {
        id:20,
        nombre:"Fernanda Castañeda", 
        cargo:"Celadora",
        Telefono:"3044479197",
        Correo:"zsalgado1015@gmail.com",
        Salario: 6000000,
        ContactoEmergencia:"3006578674",
        Foto:"./img/empleado1.jpg"

    }
)

//creando una referenciaal contenedor de empleados

let contenedor=document.getElementById("contenedor")

// pasos para crear una lista dinamica de elmentos

//1: debo recorrer la base de datos del problema

empleados.forEach(function(empleado){

    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card" , "shadow")

    let foto=document.createElement("img")
    foto.classList.add("img-fluid","mx-auto","d-block")
    foto.src=empleado.foto

    let nombre=document.createElement("h3")
    nombre.textContent=empleado.nombre

    let cargo=document.createElement("h4")
    cargo.textContent=empleado.cargo

    let telefono=document.createElement("h5")
    telefono.textContent=empleado.telefono

    let correo=document.createElement("h4")
    correo.textContent=empleado.Correo

    let contactoEmergencia=document.createElement("h4")
    contactoEmergencia.textContent=empleado.ContactoEmergencia



    columna.appendChild(tarjeta)
    tarjeta.appendChild(foto)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(cargo)
    tarjeta.appendChild(telefono)
    tarjeta.appendChild(correo)
    tarjeta.appendChild(contactoEmergencia)
    contenedor.appendChild(columna)

    })