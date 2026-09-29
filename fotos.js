console.log("Publicando");

fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(j => listado.innerHTML=j.map(foto=>`<img src="${foto.url}" width="50">`))