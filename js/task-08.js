const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;

    const email = formElements.email.value; 
    const password = formElements.password.value;

    const formData = {
        email,
        password,
    }
    if (!email || !password) {
        window.alert('Че не видишь? поля не заполнены! Попробуй еще раз, только не тупи')
    }
   event.currentTarget.reset;
}