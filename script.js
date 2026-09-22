console.log("Conexion correcta...");

document.addEventListener('DOMContentLoaded', () => {

    // 1. AUMENTAR CONTADOR DEL CARRITO (+1)
    // Cambiamos '.Mas' por '.derecho-boton' y '.carrito_cero' por '.carrito'
    const botonesMas = document.querySelectorAll('.derecho-boton');
    const contadorCarrito = document.querySelector('.carrito span');
    let cantidad = 0;

    botonesMas.forEach(boton => {
        boton.addEventListener('click', () => {
            cantidad++;
            contadorCarrito.textContent = cantidad;
        });
    });

    // 2. ALERTA DE LOGIN
    // Cambiamos 'usuario' por 'email' y '.boton_naranja' por '.barra-boton'
    const inputEmail = document.getElementById('email');
    const botonLogin = document.querySelector('.barra-boton');

    botonLogin.addEventListener('click', () => {
        const correo = inputEmail.value.trim();

        if (correo === '') {
            alert('Por favor, ingresa un correo electrónico.');
        } else {
            alert(`Bienvenid@: ${correo}`);
            inputEmail.value = '';
        }
    });

    // 3. CAMBIAR IMAGEN AL PASAR EL CURSOR (HOVER)
    // Cambiamos '.section_izquerda img' por '.descripcion-izquierdo img'
    const imagenBanner = document.querySelector('.descripcion-izquierdo img');
    const imagenOriginal = imagenBanner.src;

    // Cambia a 'comida-mexicana2.jpg' al pasar el cursor por la imagen del banner
    const imagenSecundaria = 'static/images/comida-mexicana2.jpg'; // Ajusté la ruta a /images/ para coincidir con tu HTML

    imagenBanner.addEventListener('mouseenter', () => {
        imagenBanner.src = imagenSecundaria;
    });

    imagenBanner.addEventListener('mouseleave', () => {
        imagenBanner.src = imagenOriginal;
    });

});