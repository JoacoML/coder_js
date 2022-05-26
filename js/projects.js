//////// Proyectos ////////

//Clase de poryectos con funcion constructora
class Project {
  constructor(id, title, ticker, price, risk, anualReturn, img) {
    this.id = id;
    this.title = title.toUpperCase();
    this.ticker = ticker.toUpperCase();
    this.price = price;
    this.risk = risk;
    this.anualReturn = anualReturn;
    this.img = img;
    this.cantidad = 1;
    this.inPortfolio = false;
  }
  addToPorfolio() {
    this.cantidad++;
    this.inPortfolio = true;
  }
  actualizarPrecioTotal() {
    this.totalPrice = this.price * this.cantidad;
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

//Carrtio de compras. Variables

const conteinerProject = document.getElementById('conteinerProject')
const conteinerCarrito = document.getElementById('conteinerCarrito')
const vaciarCarrito = document.getElementById('vaciarCarrito')
const pagarCarrito = document.getElementById('pagarCarrito')
const totalPriceCarrito = document.getElementById('totalPriceCarrito')
let carrito = [];

// Get local storage

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('carrito')){
    carrito = JSON.parse(localStorage.getItem('carrito'))
    printCart()
  }
})

// Impresion del Stock

projectStock.forEach((project) => {
  let card = document.createElement('div')
  card.innerHTML = `
  <figure class="card m-3">
    <img src="${project.img}" class="card-img-top" alt="${project.title}">
    <h2 class="card__title">${project.title}</h2>
    <p class="card__text">Risk: ${project.risk}</p>
    <p class="card__text">APY: ${project.anualReturn}</p>
    <p class="card__text"><strong>USD ${project.price}</strong></p>
    <div class="btn-group" role="group">
      <button id="buy${project.id}" type="button" class="btn buttonCard"> Buy </button>
    </div>
  </figure>`
  conteinerProject.appendChild(card);

  const botonBuy = document.getElementById(`buy${project.id}`)
  
  botonBuy.addEventListener('click', () => {
    addToCart(project.id)
  })

})

// Funcion argegar al carrito

const addToCart = (projectId) => {
  const inCart = carrito.find((project) => project.id === projectId);

  if (inCart) {
    let index = carrito.findIndex((project) => project.id === inCart.id);
    carrito[index].addToPorfolio();
    carrito[index].actualizarPrecioTotal();
    
    alert(`
    Otra accion de ${inCart.title} 🎉
    Total: ${inCart.cantidad} acciones
    Precio total: U$$${inCart.totalPrice}
    APY: ${inCart.anualReturn}`);

  } else {
  let newProject = projectStock.find((project) => project.id === projectId);
  carrito.push(newProject);
  carrito[carrito.length - 1].actualizarPrecioTotal();
  
  alert(`
    Una accion de ${newProject.title} enviada al carrito 🎉
    Precio total: U$$${newProject.price}
    APY: ${newProject.anualReturn}`
  );
}
printCart()
}

// Funcion eliminar del carrito
const deleteCart = (projectId) => {
  const item = carrito.find((project) => project.id === projectId);
  const index = carrito.indexOf(item); 
  carrito.splice(index,1);
  printCart()
} 

// Funcion borrar carrito
vaciarCarrito.addEventListener('click', () => {
  carrito.length = 0
  printCart()
})

// Funcion pagar carrito
pagarCarrito.addEventListener('click', () => {
  alert(`Tu inversion total es de U$$${totalCarrito}. Gracias! 😄`);
})

// Impresion del carrito

const printCart = () => {
  conteinerCarrito.innerHTML = ""

  carrito.forEach((project) => {
    let card = document.createElement('div')
    card.innerHTML = `
    <figure class="card m-3">
      <h3 class="card__title">${project.title}</h3>
      
      <div class="card__info">
        <p class="card__text">Stocks n: ${project.cantidad}</p>
        <p class="card__text">APY: ${project.anualReturn}</p>
        <p class="card__text">Total: <strong>USD${project.totalPrice}</strong></p>
      </div>
      
      <div class="btn-group buttonCard-eliminar" role="group" aria-label="Invesments kart">
        <button id="delete${project.id}" type="button" class="btn btn-danger"> Delete </button>
      </div>
    </figure>`
    conteinerCarrito.appendChild(card);

    const botonDelete = document.getElementById(`delete${project.id}`)
  
    botonDelete.addEventListener('click', () => {
      deleteCart(project.id)
    })

    // Set local storage
    localStorage.setItem('carrito', JSON.stringify(carrito))
  
  })
  
  totalPriceCarrito.innerText = carrito.reduce((total, elemento) => total + elemento.totalPrice, 0);
  totalCarrito = carrito.reduce((total, elemento) => total + elemento.totalPrice, 0);
}