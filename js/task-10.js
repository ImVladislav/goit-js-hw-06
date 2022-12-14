function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
  amountEl: document.querySelector('#controls input'),
};
let box = '';

refs.createBtn.addEventListener('click', onCreateBoxes);
refs.destroyBtn.addEventListener('click', ondestroyBoxes);

function onCreateBoxes(amount) {
  box = '';
  if (!boxes.childElementCount) {
    for (let i = 1; i <= refs.amountEl.value; i += 1) {
      box += `<div style="background-color: ${getRandomHexColor()}; width: ${20 + i * 10
        }px; height: ${20 + i * 10}px"></div>`;
    }
    boxes.insertAdjacentHTML('beforeend', box);
  } else {

    let lastElementHeight = Number.parseInt(boxes.lastElementChild.style.height);
    let lastElementWidth = Number.parseInt(boxes.lastElementChild.style.width);

    for (let i = 1; i <= refs.amountEl.value; i += 1) {
      box += `<div style="background-color: ${getRandomHexColor()}; width: ${lastElementHeight + i * 10
        }px; height: ${lastElementWidth + i * 10}px"></div>`;
    }
    boxes.insertAdjacentHTML('beforeend', box);
  }
};
  function ondestroyBoxes() {

    refs.boxes.innerHTML = '';
    refs.amountEl.value = 0;
};