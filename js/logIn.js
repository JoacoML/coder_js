//////// Log in ////////


// Nombre del Usuario y fecha del dia

// Ingresar pass y conteo de 3 intentos de Log

const botonLogIn = document.getElementById("logIn")
  
botonLogIn.addEventListener('click', () => {
  logIn()
})

let x = 0;

function logIn (){
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    while (x<3){
        if (pass === "12345") {
            alert("Hola " + user + ", " + "bienvenido a ACTIONS");
            window.location = "../views/projects.html";
        }
        if(pass !== "12345"){
            x++
            alert("Contrasña incorrecta. Intenta de nuevo");
        }
        if (x === 3) {
            alert("Su cuenta ha sido bloqueada");
        }
        break;
    }
}

// // Funcion saludar con condicional de hora

// let fecha = new Date(); 
// let hora = fecha.getHours();
// let saludo = ""

// saludar();


// function saludar(){
//   alert(saludo + " " + usuario);
// }

// if(hora >= 0 && hora < 12){
//   saludo = "Buenos días";
// }else if(hora >= 12 && hora < 19){
//   saludo = "Buenas tardes";
// }else if(hora >= 19 && hora < 24){
//   saludo = "Buenas noches";
// }