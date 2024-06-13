export const renderItems = (data) => {
  console.log(data)

  // Creación elemento <ul> utilizando createElement
  const ulElement = document.createElement('ul');

  ulElement.classList.add('cards');

  // Recorrer la data mediante un bucle forEach
  data.forEach(item => {
    // Crear elemento <li> para cada elemento de data
    const liElement = document.createElement('li');
    liElement.setAttribute('itemscope', '');
    liElement.setAttribute('itemtype', 'marvelMovies');
    liElement.setAttribute('data-id', item.id);
     
    //Agregar contenido HTML interno dentro de <li>
    liElement.innerHTML = `
      <dl itemscope itemtype= "marvelMovies">
        <img src="${item.imageUrl}" alt="${item.name}"/>
        <section class="texto">
          <dt>Title</dt><dd itemprop="title">${item.title}</dd>
          <dt>Short Description:</dt><dd itemprop="shortDescription">${item.shortDescription}</dd>
          <dt>Year:</dt><dd itemprop="year">${item.facts.year}</dd>
          <dt>Rating:</dt><dd itemprop="rating">${item.facts.rating}</dd>
          <dt>Director:</dt><dd itemprop="director">${item.facts.director}</dd>
          <dt>Duration:</dt><dd itemprop="duration">${item.facts.duration}</dd>
        </section>
      </dl>
  `;
    
    // Agregar cada <li> al <ul> utilizando appendChild 
    ulElement.appendChild(liElement); 

  });
  
  // Retornar el elemento <ul> completo
  return ulElement;
};