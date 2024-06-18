import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';
const rootSection = document.getElementById('root');

const ulElement = renderItems(data);

rootSection.appendChild(ulElement);
console.log(example, renderItems(data), data);
