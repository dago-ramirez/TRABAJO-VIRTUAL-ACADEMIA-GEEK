document.addEventListener("DOMContentLoaded", event => {
    let classAlert = document.querySelector('.alert');
    let alertHeading = document.querySelector('.alert-heading');
    let alertMessage = document.querySelector('.alert-message');
    /* Comenta desde la línea 7 hasta la línea 19 y descomenta
       desde la línea 22 a la 32. El resultado es el mismo. */
    if (classAlert.classList.contains('alert-success')) {
        alertHeading.innerHTML = 'CORRECTO';
        alertMessage.innerHTML = 'Los datos son correctos';
        classAlert.classList.add('border', 'border-success');
    } else if (classAlert.classList.contains('alert-warning')) {
        alertHeading.innerHTML = 'AVISO';
        alertMessage.innerHTML = 'Tenga cuidado';
        classAlert.classList.add('border', 'border-warning');
    } else if (classAlert.classList.contains('alert-danger')) {
        alertHeading.innerHTML = 'ERROR';
        alertMessage.innerHTML = 'Ha surgido un error';
        classAlert.classList.add('border', 'border-danger');
    }

    // Implementación con operador ternario:
    // classAlert.classList.contains('alert-success') ? 
    //   (alertHeading.innerHTML = 'CORRECTO',
    //   alertMessage.innerHTML = 'Los datos son correctos',
    //   classAlert.classList.add('border', 'border-success')) :
    //   classAlert.classList.contains('alert-warning') ?
    //     (alertHeading.innerHTML = 'AVISO',
    //     alertMessage.innerHTML = 'Tenga cuidado',
    //     classAlert.classList.add('border', 'border-warning')) :
    //     (alertHeading.innerHTML = 'ERROR',
    //     alertMessage.innerHTML = 'Ha surgido un error',
    //     classAlert.classList.add('border', 'border-danger'));
});