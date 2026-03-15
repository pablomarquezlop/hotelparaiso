// Validación del formulario al hacer submit
document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenir el envío del formulario para realizar la validación

    // Obtener todos los campos del formulario
    const formElements = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    let isValid = true;

    // Obtener la fecha actual
    const today = new Date();
    const todayDate = today.toISOString().split('T')[0]; // Formato 'YYYY-MM-DD'

    // Recorrer los campos y verificar su validez
    formElements.forEach(function(element) {
        // Limpiar clases de error previas
        element.classList.remove('error');

        // Validación solo de campos obligatorios (con el atributo required)
        if (element.required && element.value.trim() === '') {
            isValid = false;
            element.classList.add('error');
        }

        // Validación del formato del correo electrónico
        if (element.id === 'email' && element.value.trim() !== '') {
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(element.value)) {
                isValid = false;
                element.classList.add('error');
            }
        }

        // Validación de fechas (check-out no puede ser antes de check-in)
        const checkin = document.getElementById('checkin').value;
        const checkout = document.getElementById('checkout').value;

        // Validación de la fecha de llegada (checkin debe ser en el futuro)
        if (element.id === 'checkin' && checkin && new Date(checkin) <= today) {
            isValid = false;
            element.classList.add('error');
        }

        // Validación de fechas (check-out no puede ser antes de check-in)
        if (checkin && checkout && new Date(checkout) < new Date(checkin)) {
            isValid = false;
            document.getElementById('checkout').classList.add('error');
        }
    });

    // Si todos los campos son válidos, envía el formulario
    if (isValid) {
        alert('Formulario enviado correctamente!');
        document.getElementById('reservation-form').submit();  // Si todo es válido, enviar el formulario
    } else {
        alert('Por favor, corrige los campos marcados en rojo.');
    }
});
