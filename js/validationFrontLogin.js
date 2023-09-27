const emailCampo = document.getElementById('email');
const contrasenaCampo = document.getElementById('contrasena');

// Declara un objeto llamado "errors" para almacenar errores de validación.
let errors = {};

// Agrega un escuchador de eventos que se activa cuando el usuario ingresa algo en el campo de correo electrónico.
emailCampo.addEventListener('input', () => {
    // Obtiene el valor del campo de correo electrónico y lo almacena en la variable "email", eliminando espacios en blanco innecesarios.
    const email = emailCampo.value.trim();

    // Verifica si el campo de correo electrónico está vacío.
    if (!email) {
        // Si está vacío, agrega un mensaje de error al objeto "errors".
        errors.email = { msg: 'El campo de email/usuario es requerido.' };

        // Remueve la clase "is-valid" del campo de correo electrónico y agrega la clase "not-valid" para indicar que no es válido.
        emailCampo.classList.remove('is-valid');
        emailCampo.classList.add('not-valid');
    } else {
        // Si el campo de correo electrónico no está vacío, marca que es válido.
        emailCampo.classList.add('is-valid');
        emailCampo.classList.remove('not-valid');

        // Elimina cualquier error previamente asociado con el correo electrónico en "errors".
        delete errors.email;

        // Llama a una función llamada "verifyEmail" pasando el valor del correo electrónico como argumento.
        verifyEmail(email);
    }

    // Llama a una función llamada "validateForm" para validar todo el formulario.
    validateForm();
});



// contrasenaCampo.addEventListener('input', () => {
//     const password = passwordInput.value.trim();
//     if (!password) {

//         errors.password = { msg: 'El campo de contraseña es requerido.' };
    
          
//         passwordInput.classList.remove('is-valid');
//         passwordInput.classList.add('not-valid');

//     } else {

//         passwordInput.classList.add('is-valid');
//         passwordInput.classList.remove('not-valid');

//         delete errors.password;

//         errorSpanPass.textContent ='';
//     }
//     validateForm();
// });

// let validateForm = () => {
//     if (Object.keys(errors).length === 0) {
//         loginButton.removeAttribute('disabled');
//     } else {
//         loginButton.setAttribute('disabled', 'disabled');
//     }
// };

