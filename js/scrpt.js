// Nombre del Usuario
let nombre=prompt("escribe tu usuario");
if(nombre){
  // Saludo
  let fecha = new Date(); 
  let hora = fecha.getHours();
  let buenas = ""
  
    if(hora >= 0 && hora < 12){
      buenas = "Buenos Días";
    }else if(hora >= 12 && hora < 19){
      buenas = "Buenas Tardes";
    }else if(hora >= 19 && hora < 24){
      buenas = "Buenas Noches";
    } 

  alert(buenas + " " + nombre);
  let pass=0
  let x=1
  do {
      pass = prompt("ingresa tu contraseña");
      if(x===3){
          alert("Tercer intento, su cuenta ha sido bloqueada");
          break;
      }else{
          x++
      }
  } while (pass !== "12345");
  if (pass==="12345"){
  alert("Bienvenido a Javascript")
  }
}else{
  alert("Vuelva prontoss")
}