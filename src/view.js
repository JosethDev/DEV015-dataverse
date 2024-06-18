export const renderItems = (data) => {
  console.log(data)

  // Creación elemento <ul> utilizando createElement
  const ulElement = document.createElement('ul');

  ulElement.classList.add('cards');

  // Recorrer la data mediante un bucle forEach
  data.forEach(item => {
    // Crear elemento <li> para cada elemento de data
    const liElement = document.createElement('li');
    liElement.classList.add('item');
    liElement.setAttribute('itemscope', '');
    liElement.setAttribute('itemtype', 'marvelMovies');
    liElement.setAttribute('data-id', item.id);

    //Agregar contenido HTML interno dentro de <li>
    liElement.innerHTML = `
      <dl itemscope itemtype= "marvelMovies">
      <img src="${item.imageUrl}" alt="${item.imageDescription}"/>
      <section class="texto">
        <dt>Year:</dt><dd itemprop="year">${item.facts.year}</dd>
        <dt>Name</dt><dd itemprop="name">${item.name}</dd>
        <dt>Short Description:</dt><dd itemprop="shortDescription">${item.shortDescription}</dd>
          <dt>Rating:</dt><dd itemprop="rating"><img class="rating-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="IMDb Logo" />${item.facts.rating}</dd>
          <dt>Director:</dt><dd itemprop="director">Directed by ${item.facts.director}</dd>
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
