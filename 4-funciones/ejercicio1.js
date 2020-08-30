function multiplicar(a, b) {
    if (isNaN(a) || isNaN(b) || a === '' || b === '') {
        alert('Datos inválidos');
    } else {
        let result = a * b;
        alert(`El resultado es: ${result}`);        
    }
}
document.querySelector('.btn-multiply').addEventListener('click', event => {
    let a = parseFloat(document.querySelector('.number-a').value);
    let b = parseFloat(document.querySelector('.number-b').value);
    multiplicar(a, b)
    document.querySelector('.number-a').value = '';
    document.querySelector('.number-b').value = '';
});