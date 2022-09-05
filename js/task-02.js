const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allIngredients = document.querySelector('#ingredients');

const elements = element => {
  const el = document.createElement('li');
  el.classList.add('item');
  el.textContent = element;
  return el;
};

const addList = ingredients.map(elements);
allIngredients.append(...addList);