console.log("Publicando");

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(j => listado.innerHTML=j.map(titulo=>`<li>${titulo.title}</li>`))//map programacion funcional
  //muestra el titulo en un ul en la pagina