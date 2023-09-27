// Espera a que se cargue completamente el contenido de la página.
document.addEventListener("DOMContentLoaded", function () {
    // Obtiene los elementos de correo electrónico y contraseña por su ID.
    const emailCampo = document.querySelector('#email');
    const contrasenaCampo = document.querySelector('#contrasena');

    // Agrega un evento que se dispara cuando el usuario escribe en el campo de correo electrónico.
    emailCampo.addEventListener('input', (e) => {
        // Obtiene el valor actual del campo de correo electrónico.
        const value = e.target.value;
        // Obtiene la longitud del valor (cuántos caracteres tiene).
        const length = value.length; 

        // Verifica si el correo electrónico es correcto (contiene "@" y tiene más de 6 caracteres).
        const isEmailCorrect = value.includes('@') && value.length > 12; 

        // Si el correo electrónico no es correcto o está vacío, muestra un mensaje de error.
        if (!isEmailCorrect || length < 1) { 
            // Cambia el contenido del siguiente elemento HTML (párrafo) para mostrar un mensaje de error.
            e.target.nextElementSibling.innerHTML = 'Email es inválido'; 
        } else {
            // Si el correo electrónico es válido, borra el mensaje de error.
            e.target.nextElementSibling.innerHTML = '';
        }
        
      
    });

    // Agrega un evento que se dispara cuando el usuario escribe en el campo de contraseña.
    contrasenaCampo.addEventListener('input', (e) => {
        // Obtiene el valor actual del campo de contraseña.
        const value = e.target.value;
        // Obtiene la longitud del valor (cuántos caracteres tiene).

        const length = value.length; 

        // Verifica si la contraseña tiene al menos 8 caracteres.
        if (length < 8) { 
            // Cambia el contenido del siguiente elemento HTML (párrafo) para mostrar un mensaje de error.
            e.target.nextElementSibling.innerHTML = 'La contraseña debe contener al menos 8 caracteres';
        } else {
            // Si la contraseña es válida, borra el mensaje de error.
            e.target.nextElementSibling.innerHTML = '';
        }
        
    
    });
});




