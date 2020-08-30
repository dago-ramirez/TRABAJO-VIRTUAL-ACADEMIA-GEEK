function facturar(a) {
    if (isNaN(a) || a === '') {
        alert('Datos inválidos');
    } else {
        let iva = Number(a * 0.21).toFixed(2);
        alert(`El precio sin IVA es: $${a}, IVA: $${iva}, Total: $${a + iva}`);        
    }
}
document.querySelector('.btn-invoice').addEventListener('click', event => {
    let a = parseFloat(document.querySelector('.price').value);
    facturar(a)
    document.querySelector('.price').value = '';
});