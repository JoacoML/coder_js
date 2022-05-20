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

// Ingresar pass
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

//Clase de poryectos con funcion constructora
class Project {
  constructor(id, title, ticker, price, risk, anualReturn, img) {
    this.id = id;
    this.title = title.toUpperCase();
    this.ticker = ticker.toUpperCase();
    this.price = price;
    this.risk = risk.toUpperCase();
    this.anualReturn = anualReturn;
    this.img = img;
    this.cantidad = 1;
    this.inPortfolio = false;
  }
}


// array de stock de proyectos
const projectStock = [];

//Pusheo los proyectos al Stock
projectStock.push(new Project("0", "The ocean cleanup", "TOCU", 120, "AAA", "15%", "../img/project1.jpg"));
projectStock.push(new Project("1", "Seabin fundation", "SEAB", 100, "AAB", "20%", "../img/project2.jpg"));
projectStock.push(new Project("2", "Renovable verano", "REVE", 60, "ABB", "25%", "../img/project3.jpg"));
projectStock.push(new Project("3", "Sonic cleanup", "SONI", 50, "ABC", "30%", "../img/project4.jpg"));
projectStock.push(new Project("4", "Eco schools", "ESCH", 80, "AAB", "20%", "../img/project5.jpg"));
projectStock.push(new Project("5", "Trash into treasure", "TSUR", 50, "AAB", "15%", "../img/project6.jpg"));
projectStock.push(new Project("6", "Dronegenuity", "DROG", 200, "AAB", "20%", "../img/project7.jpg"));
projectStock.push(new Project("7", "Sustainable sewage", "ESEW", 300, "AAA", "18%", "../img/project8.jpg"));
projectStock.push(new Project("8", "Green building", "GREN", 250, "AAB", "20%", "../img/project9.jpg"));

// array de carrtio
let carrito = [];
let totalPrice;

// clase de proyectos en carrito
class AddProject {
  constructor(project) {
    this.id = project.id;
    this.title = project.title;
    this.ticker = project.ticker;
    this.price = project.price;
    this.risk = project.risk;
    this.anualReturn = project.anualReturn;
    this.img = project.img;
    this.cantidad = 1;
    this.inPortfolio = true;
  }
  addToPorfolio() {
    this.cantidad++;
  }
  quitarUnidad() {
    this.cantidad--;
  }
  actualizarPrecioTotal() {
    this.totalPrice = this.price * this.cantidad;
  }
}


// Menu de proyectos
function projectsMenu() {
  let stringProjects = "";

  for (const project of projectStock) {
    stringProjects += `${project.id} - ${project.ticker} - ${project.title}. \nPrice: U$$${project.price} APY:${project.anualReturn}\n\n`;
  }

  let idProject = prompt(`Escribe un numero del 0 al 8 para invertir, o escriba 'ESC' para finalizar. \n\n${stringProjects} \n`);

  while (idProject !== "ESC") { 
    let projectEnCarrito = carrito.find((elemento) => elemento.id == idProject);

    if (projectEnCarrito) {
        let index = carrito.findIndex((elemento) => elemento.id === projectEnCarrito.id);

        carrito[index].addToPorfolio();
        carrito[index].actualizarPrecioTotal();

        alert(`
        Otra accion de ${carrito[index].title} 🎉
        Unidades: ${carrito[index].cantidad}`);
        console.table(carrito);
    } else {
        carrito.push(new AddProject(projectStock[idProject]));

        alert(`Se ha añadido al carrito una accion de ${projectStock[idProject].title} 🎉`);
        console.table(carrito);
    }
    idProject = prompt(`Desea seguir invirtiendo? 🤔
    Escribe un numero del 0 al 8 para invertir, o escriba 'ESC' para finalizar. \n\n${stringProjects} \n`);
  }
}

function obtenerPrecioTotal() {
  let total = carrito.reduce((total, elemento) => {
      total + elemento.totalPrice, 0;
  });
  return total;
}

// Invocación de funciones
projectsMenu();

console.log(projectStock);
totalPrice = obtenerPrecioTotal();

alert(`El precio total de tu compra es de $${totalPrice}
Gracias! 😄`);
console.table(carrito);

console.log(totalPrice)
// // Método sort() aplicado a un array de objetos
// // Ordenamos el array alfajores por precio de manera ascendente
// alfajores.sort((a, b) => a.price - b.price);
// console.log("Array ordenado por precio ascendente");
// console.table(projectStock);

// // Array ordenado por precio de manera descendente
// alfajores.sort((a, b) => a.price - b.price);
// console.log("Array ordenado por precio descendente");
// console.table(projectStock);

// Método filter()
// Listamos los alfajores con precio menor a $100
// let nuevoArray = alfajores.filter((elemento) => elemento.precio < 100);
// console.log("Nuevo array con precio menor a 100");
// console.table(nuevoArray);


//Iteramos el array con for of
// for(const project of projectStock){
//   console.log(project.title);
// }

// // Agregamos a el segundo proyecto al portfolio
// projectStock[0].addToPortfolio();

