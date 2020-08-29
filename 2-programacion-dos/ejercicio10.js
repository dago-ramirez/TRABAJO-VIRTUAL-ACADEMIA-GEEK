let inputEdad = document.querySelector('.input-edad');
document.querySelector('.boton-enviar').addEventListener('click', event => {
    if (isNaN(inputEdad.value) || inputEdad.value === '') {
        inputEdad.value = '';
        alert('Debe ingresar un número')
    } else {
        horasVividas = parseInt(inputEdad.value) * convertMiliSegEnHoras;
        inputEdad.value = '';
        alert(`Usted ha vidido ${horasVividas} horas`);
    }
});