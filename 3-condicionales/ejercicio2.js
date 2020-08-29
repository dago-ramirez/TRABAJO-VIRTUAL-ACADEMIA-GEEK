document.addEventListener("DOMContentLoaded", event => {
    const validName = 'Dago';
    let inputName = document.querySelector('.input-name');
    document.querySelector('.send-button1').addEventListener('click', event => {
        if (validName === inputName.value) {
            inputName.value = '';
            alert(`Bienvenid@ ${inputName.value}`)
        } else {
            inputName.value = '';
            alert('Usuario no registrado')
        }
    });
});