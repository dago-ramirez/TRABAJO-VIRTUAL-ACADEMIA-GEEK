const longitudNombre = document.querySelector('.longitud-nombre');
const nombreCompleto = 'Bernadette Marian Rostenkowski Wolowitz';
longitudNombre.innerHTML = `El nombre de mi compañera es ${nombreCompleto} y está compuesto por 
                            ${nombreCompleto.replace(/\s+/g, '').length} letras`;