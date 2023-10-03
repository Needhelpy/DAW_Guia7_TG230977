document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let nombre = document.getElementById('userName').value;
    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        alert('El nombre solo puede contener letras');
        return;
    }

    let correo = document.getElementById('userEmail').value;
    let arrobaCount = (correo.match(/@/g) || []).length;
    if (!/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(correo) || arrobaCount !== 1) {
        alert('Ingrese un correo electrónico valido');
        return;
    }

    let mensaje = document.getElementById('userMessage').value;
    if (mensaje.trim() === '') {
        alert('El mensaje no puede estar vacio');
        return;
    }

    alert('Formulario enviado con exito');
});
