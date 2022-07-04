//////// Log in ////////

//////// Usuarios ////////

//Clase de poryectos con funcion constructora
class User {
    constructor(id, name, role, email, password) {
        this.id = id;        
        this.name = name;
        this.role = role.toUpperCase();
        this.email = email
        this.password = password;
    }
}
  
// array de stock de proyectos
const userDB = [];

//Pusheo los proyectos al Stock
userDB.push(new User("JoacoML", "Joaquin", "Investor", "joaco.martin.lanfranchi@gmail.com", "12345"));
userDB.push(new User("Emi", "Emiliano", "Investor", "emi@coder.com", "123"));
userDB.push(new User("Lau", "Laura", "Entrepreneur", "lau@coder.com", "123"));

// Ingresar pass y conteo de 3 intentos de Log

let x = 0;

const botonLogIn = document.getElementById("logIn")
  
botonLogIn.addEventListener('click', logIn)


function logIn() {
    let userId = document.getElementById("user").value;
    const userLog = userDB.find((user) => user.id === userId);
    
    userLog || alert("Usuario no existe");

    if (userLog && x < 3) {
        const { id, name, password } = userLog

        let pass = document.getElementById("pass").value;

        let passCrorrect = (pass == password) ? true : false;

        if (passCrorrect) {
            alert("Hola " + name + ", " + "bienvenido a ACTIONS");
            window.location = "../views/projects.html";
        } else {
            x++;
            alert(id + " tu contrasña es incorrecta. Intenta de nuevo");
        }
        x === 3 && alert("Su cuenta ha sido bloqueada");
        // if (x === 3) {
        //     alert("Su cuenta ha sido bloqueada");
        // }
    }
}

// function logIn (){
//     let userId = document.getElementById("user").value;

//     const userLog = userDB.find((user) => user.id === userId);

//     userCrorrect = (userLog) ? true : alert("Usuario no existe");

//     // Desestructuracion del Objeto User
//     const {id, name, password} = userLog

//     let pass = document.getElementById("pass").value;
//     while (x<3){
        
//         passCrorrect = (pass == password) ? true : false 

//         if (passCrorrect) {
//             alert("Hola " + name + ", " + "bienvenido a ACTIONS");
//             window.location = "../views/projects.html";
//         }else x++; alert(id + " tu contrasña es incorrecta. Intenta de nuevo");

//         if (x === 3) {
//             alert("Su cuenta ha sido bloqueada");
//         }
//         break;
//     }
// }

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