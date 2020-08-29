document.addEventListener("DOMContentLoaded", event => {
    let inputNumber = document.querySelector('.input-number');
    document.querySelector('.send-button2').addEventListener('click', event => {
        let modalTlttle = document.querySelector('.modal-title');
        let modalMessage = document.querySelector('.modal-message')
        if (isNaN(inputNumber.value) || inputNumber.value === '') {
            modalTlttle.innerHTML = 'Error';
            modalMessage.innerHTML = 'Debe ingresar un valor numérico';
            inputNumber.value = '';
        } else if (inputNumber.value == 0) {
            modalTlttle.innerHTML = 'Message';
            modalMessage.innerHTML = 'El número es 0';
            inputNumber.value = '';
        } else if (inputNumber.value < 0) {
            modalTlttle.innerHTML = 'Message';
            modalMessage.innerHTML = 'El número es negativo';
            inputNumber.value = '';
        } else if (inputNumber.value == 12) {
            modalTlttle.innerHTML = 'Message';
            modalMessage.innerHTML = 'El número más 2 es mayor 13';
            inputNumber.value = '';
        } else if (inputNumber.value > 20 && inputNumber.value < 50) {
            modalTlttle.innerHTML = 'Message';
            modalMessage.innerHTML = 'El número es mayor que 20 pero menor que 50';
            inputNumber.value = '';
        } else {
            modalTlttle.innerHTML = 'Message';
            modalMessage.innerHTML = 'el número no es 123123125';
            inputNumber.value = '';
        }
    });
});