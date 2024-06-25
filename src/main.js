import { renderItems } from './view.js';
import { filterDataYear, filterDataRating, sortData } from './dataFunctions.js';
import data from './data/dataset.js';

// Seleccionar elementos usando querySelector
const rootSection = document.querySelector('#root');
const ulElement = renderItems(data);
rootSection.appendChild(ulElement);

document.addEventListener('DOMContentLoaded', () => {
  // Usar querySelector para agregar event listeners
  document.querySelector('#filter-year').addEventListener('change', applyFilters);
  document.querySelector('#filter-rating').addEventListener('change', applyFilters);
  document.querySelector('#sort').addEventListener('change', applyFilters);
  document.querySelector('#button-clear').addEventListener('click', clearFilters);
  // Establecer ordenamiento inicial
  document.querySelector('#sort').value = 'desc'; // 'desc' para latest
  applyFilters(); // Aplicar filtros y ordenamiento inicial
});

function applyFilters() {
  // Obtener valores usando querySelector
  const filterYear = document.querySelector('#filter-year').value;
  const filterRating = document.querySelector('#filter-rating').value;
  const sortValue = document.querySelector('#sort').value;

  // Aplicar filtros y ordenar los datos
  let filteredData = filterDataYear(data, filterYear);
  filteredData = filterDataRating(filteredData, filterRating);
  const sortedData = sortData(filteredData, sortValue);

  // Limpiar la sección raíz y renderizar los elementos ordenados
  rootSection.innerHTML = '';
  const ulElement = renderItems(sortedData);
  rootSection.appendChild(ulElement);
}

function clearFilters() {
  document.querySelector('#filter-year').value = 'all';
  document.querySelector('#filter-rating').value = 'all';
  document.querySelector('#sort').value = 'desc';
  
  applyFilters(); // Aplicar filtros después de limpiar
}