//validar el formulario
const inputs = document.querySelectorAll('form .campo input');

//listener a los inputs 
inputs.forEach(input => {
    input.addEventListener('blur', validarInput);
});
inputs.forEach(input => {
    input.addEventListener('input', validarInput);
});
function validarInput(e) {
    const estado = ['valido', 'no-valido'];

    let clase;
    if(e.target.value.length === 0){
        clase = estado[1];
    } else {
        clase = estado[0];
    }
    e.target.classList.remove(...estado);
    e.target.nextElementSibling.classList.remove(...estado);

    e.target.classList.add(clase);
    e.target.nextElementSibling.classList.add(clase);

   //inyectar dinamicamente el div con el error
   if (clase === 'no-valido') {
       if(e.target.parentElement.nextElementSibling.classList[0] !== 'alerta') {
         //construiremos el mensaje de error
        const errorDiv = document.createElement('div');
        errorDiv.appendChild( document.createTextNode('Este campo es obligatorio') );
        errorDiv.classList.add('alerta');
        //insertar error
        e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextElementSibling);
       }
      
   } else {
       //limpiaremos el mensaje de errror
       if(e.target.parentElement.nextElementSibling.classList[0] === 'alerta') {
           e.target.parentElement.nextElementSibling.remove();
       }
   }
}

//mostrar y ocultar password
const showPasswordBtn = document.querySelector('form .campo span');
showPasswordBtn.addEventListener('click', e => {

    const passwordInput = document.querySelector('#password');

    if(e.target.classList.contains('mostrar')) {
        //mostrar el texto
        e.target.classList.remove('mostrar');
         //cambiar el texto
         e.target.textContent = 'Ocultar';

         //cambiar a password
         passwordInput.type = 'text';

    } else {
        //mostrar el pass
        e.target.classList.add('mostrar');

        //cambiar el texto
        e.target.textContent = 'Mostrar';

        //cambiar a password
        passwordInput.type = 'password';
    }
})