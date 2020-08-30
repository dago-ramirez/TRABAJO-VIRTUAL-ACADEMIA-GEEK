function calcularMedia(a, b, c, d) {
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || a === '' || b === '' || c === '' || d === '') {
        alert('Datos inválidos');
    } else {
        let promedio = (a + b + c + d) / 4;
        alert(`El promedio es: ${promedio}`);        
    }
}
document.querySelector('.btn-calc').addEventListener('click', event => {
    let a = parseFloat(document.querySelector('.num-a').value);
    let b = parseFloat(document.querySelector('.num-b').value);
    let c = parseFloat(document.querySelector('.num-c').value);
    let d = parseFloat(document.querySelector('.num-d').value);
    calcularMedia(a, b, c, d)
    document.querySelector('.num-a').value = '';
    document.querySelector('.num-b').value = '';
    document.querySelector('.num-c').value = '';
    document.querySelector('.num-d').value = '';
});