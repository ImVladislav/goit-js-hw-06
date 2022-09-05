function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  changeColor: document.querySelector('.change-color'),
  color: document.querySelector('.widget span'),  

}

refs.changeColor.addEventListener('click', onChangeColorBtn);

function onChangeColorBtn(event) {
  refs.color.innerHTML = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
  
}