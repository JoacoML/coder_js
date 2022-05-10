// Nombre del Usuario
let usuario = prompt("Escribe tu usuario");
// Saludo
let fecha = new Date(); 
let hora = fecha.getHours();
let saludo = ""
let intentos = 5
  
function saludar(){
  alert(saludo + " " + usuario);
}

if(hora >= 0 && hora < 12){
  saludo = "Buenos días";
}else if(hora >= 12 && hora < 19){
  saludo = "Buenas tardes";
}else if(hora >= 19 && hora < 24){
  saludo = "Buenas noches";
}

saludar();

// Ingresar
let pass;
let x = 0;
do {
  if (x === 5) {
    alert("Su cuenta ha sido bloqueada");
    break;
  } else {
    function resta (intentos, x){
      let intentosRestantes;
      intentosRestantes = intentos - x;
      return intentosRestantes
    } 
    let intentosRestantes = resta (intentos, x);

    if (x > 0) {
      alert("Intentos restantes: " + intentosRestantes +"." + " Luego se bloqueara la cuenta!")
    }
    x++;
  }
  pass = prompt("escribe tu contraseña");

} while (pass !== "12345");

if (pass === "12345") {
  alert("Hola " + usuario + ", " + "bienvenido a Javascript");
} else {
  alert("Chau " + usuario + ", vuelva pronto!");
}