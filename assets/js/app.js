const baseEndpoint = `https://api.github.com`;
const usersEndpoint = `${baseEndpoint}/users`;
const nameElement = document.querySelector(`.name`);   //No es recomendable iniciar con un signo una constante ni una sola letra ya
const blogElement = document.querySelector(`.blog`);  // ya que puede ser dificil la legibilidad y comprension del código  Sobre todo cuando se busca que otros puedan trabajar en mi mismo proyecto
const locationElement = document.querySelector(`.location`); // Agregue puntos en la linea 3 y 4 por que son clases

async function displayUser(username) {  //Agregue un async para que no marcara un error por el await
  try{
   nameElement.textContent = `cargando...`;
   const response = await fetch(`${usersEndpoint}/${username}`);
   const data = await response.json(); // converti la respuesta a json y agregue un await
   console.log(data);
   nameElement.textContent = data.name; // quite la interpolación enn la linea 13,14 y 15
  blogElement.textContent = data.blog;
  locationElement.textContent = data.location;
} catch (error){
  handleError(error); // Llame a la funcion de manejo de error 
}
}
function handleError(err) {
  console.log('OH NO!');
  console.log(err); 
  nameElement.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);