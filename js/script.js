//////// Log in ////////

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
  alert("Hola " + usuario + ", " + "bienvenido a ACTIONS");
} else {
  alert("Chau " + usuario + ", vuelva pronto!");
}

//////// Proyectos ////////

// array de stock de proyectos
const projectStock = [
  {
    id:"1",
    title:"THE OCEAN CLEANUP",
    type:"Water pollution",
    risk: "AAA",
    anualReturn: "15%",
    inPortfolio: false,
  }
];

//Clase de poryectos con funcion constructora
class project {
  constructor(id, title, type, risk, anualReturn) {
    this.id = id;
    this.title = title.toUpperCase();
    this.type = type;
    this.risk = risk;
    this.anualReturn = anualReturn;
    this.inPortfolio = false;
  }
  addToPortfolio(){
    this.inPortfolio=true;
  }
}

//Pusheo un proyecto al Stock
projectStock.push(new project("2", "Seabin fundation", "Water pollution", "AAB", "20%"));

//Iteramos el array con for...of para modificarlos a todos
for(const project of projectStock){
  console.log(project.title);
}

// Agregamos a el segundo proyecto al portfolio
projectStock[1].addToPortfolio();

console.log(projectStock);