//////// Proyectos ////////

// Get local storage
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('carrito')){
    carrito = JSON.parse(localStorage.getItem('carrito'));
    printCart()
  }
})

// Saludo a usuario logeado (ver como conectar los dos js entre ellos)

Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Welcome to Actions',
  showConfirmButton: false,
  timer: 3000
});

//Clase de poryectos con funcion constructora
class Project {
  constructor(project) {
    this.id = project.id;
    this.title = project.title;
    this.ticker = project.ticker;
    this.price = project.price;
    this.risk = project.risk;
    this.anualReturn = project.anualReturn;
    this.img = project.img;
    this.cantidad = 1;
  }
  addToPorfolio() {
    this.cantidad++;
  }
  actualizarPrecioTotal() {
    this.totalPrice = this.price * this.cantidad;
  }
}

//Carrtio de compras. Variables

const conteinerProject = document.getElementById('conteinerProject')
const conteinerCarrito = document.getElementById('conteinerCarrito')
const vaciarCarrito = document.getElementById('vaciarCarrito')
const pagarCarrito = document.getElementById('pagarCarrito')


let carrito = [];

let totalCarrito = document.getElementById('totalCarrito').innerHTML = carrito.length;

// Impresion del Stock

function printStock(){
  const stock="../api/stock.json";
  fetch(stock)
    .then(resultado => resultado.json())
    .then(data =>{
      projectStock = data;
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
    })
}

printStock();

// Funcion eliminar del carrito
const deleteCart = (projectId) => {
  const item = carrito.find((project) => project.id === projectId);
  
  Toastify({
    text:`${item.title} Deleted from cart ❌`,
    duration:3000,
    gravity:'bottom',
    className: "notiCarrito",
    position:'center'
  }).showToast();

  const index = carrito.indexOf(item); 
  carrito.splice(index,1);
  printCart()

}

// Funcion borrar carrito
vaciarCarrito.addEventListener('click', () => {
  
  Swal.fire({
    icon: 'error',
    title: 'No investment done',
    text: 'No Actions taken!',
  })
  carrito.length = 0
  printCart();
})

// Funcion pagar carrito
pagarCarrito.addEventListener('click', () => {
  Swal.fire({
    icon: 'success',
    title: 'Investment done', 
    text: 'You are taking Actions',
  })
  carrito.length = 0;
  printCart();

})

// Funcion argegar al carrito

const addToCart = (projectId) => {

  const inCart = carrito.find((project) => project.id === projectId);

  if (inCart) {

    function addToPorfolio(){
      inCart.cantidad++;
    }
    addToPorfolio();

    function actualizarPrecioTotal(){
      inCart.totalPrice = inCart.price * inCart.cantidad;
    }
    actualizarPrecioTotal()

    Toastify({
      text:`Otra accion de ${inCart.title} 🎉`,
      duration:3000,
      gravity:'top',
      className: "notiCarrito",
      position:'center'
    }).showToast();

  } else {
    let newProject = projectStock.find((project) => project.id === projectId);
    carrito.push(new Project(newProject));
    carrito[carrito.length - 1].actualizarPrecioTotal();

    Toastify({
      text:`Una accion de ${newProject.title} enviada al carrito 🎉`,
      duration:3000,
      gravity:'top',
      className: "notiCarrito",
      position:'center'
    }).showToast();
  }
  printCart()
}

// Impresion del carrito

function printCart() {
  conteinerCarrito.innerHTML = "";

  carrito.forEach((project) => {
    let card = document.createElement('div');
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
    </figure>`;
    conteinerCarrito.appendChild(card);

    const botonDelete = document.getElementById(`delete${project.id}`);

    botonDelete.addEventListener('click', () => {
      deleteCart(project.id);
    });

  });

  // total price carrito
  totalBuy = document.getElementById('totalBuy').innerHTML = carrito.reduce((total, elemento) => total + elemento.totalPrice, 0);

  // Set local storage
  localStorage.setItem('carrito', JSON.stringify(carrito))

  // totalCart 
  let totalCarrito = document.getElementById('totalCarrito').innerHTML = carrito.length;
  totalCarrito;

}