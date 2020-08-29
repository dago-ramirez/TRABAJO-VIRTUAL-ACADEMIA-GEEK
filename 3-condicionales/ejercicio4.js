document.addEventListener("DOMContentLoaded", event => {
    let inputDogAge = document.querySelector('.input-dog-age');
    document.querySelector('.send-button3').addEventListener('click', event => {
        let modalDogTlttle = document.querySelector('.modal-dog-title');
        let modalDogMessage = document.querySelector('.modal-dog-message')
        let realDogAge;
        if (isNaN(inputDogAge.value) || inputDogAge.value === '') {
            modalDogTlttle.innerHTML = 'Error';
            modalDogMessage.innerHTML = 'Debe ingresar un valor numérico';
            inputDogAge.value = '';
        } else if (inputDogAge.value <= 1) {
            realDogAge = parseFloat(inputDogAge.value) * 15;
            modalDogTlttle.innerHTML = 'Message';
            modalDogMessage.innerHTML = `Su perro tiene ${realDogAge} años`;
            inputDogAge.value = '';
        } else if (inputDogAge.value <= 2) {
            realDogAge = ((parseFloat(inputDogAge.value) - 1) * 9) + 15;
            modalDogTlttle.innerHTML = 'Message';
            modalDogMessage.innerHTML = `Su perro tiene ${realDogAge} años`;
            inputDogAge.value = '';
        } else {
            realDogAge = ((parseFloat(inputDogAge.value) - 2) * 5) + 24;
            modalDogTlttle.innerHTML = 'Message';
            modalDogMessage.innerHTML = `Su perro tiene ${realDogAge} años`;
            inputDogAge.value = '';
        }
    });
});