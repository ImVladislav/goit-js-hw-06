const refs = {
    mainText: document.querySelector("#text"),
    sizeControl: document.querySelector("#font-size-control"),
}

refs.sizeControl.addEventListener('input', onScrollSize);


function onScrollSize(scroll) {
    console.log(scroll.currentTarget.value)
    refs.mainText.style.fontSize = `${scroll.currentTarget.value}px`;

};
