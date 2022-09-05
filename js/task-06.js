const refs = {
    inputArea: document.querySelector('#validation-input'),
    
}

refs.inputArea.addEventListener('input', oncCorrectNumberOfLetters);


function oncCorrectNumberOfLetters(event) {
    console.log(event.currentTarget.value.length)
    if (Number(event.currentTarget.value.length) === Number(refs.inputArea.dataset.length)) {
        refs.inputArea.classList.add('valid');
        refs.inputArea.classList.remove('invalid');        
        
    } else {
                refs.inputArea.classList.add('invalid');
    }
};


