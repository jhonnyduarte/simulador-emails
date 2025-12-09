document.addEventListener('DOMContentLoaded', function() {

    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');

    //Asignar Eventos

    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur',validar);
    inputMensaje.addEventListener('blur',validar);


    function validar(e) {
        if (e.target.value.trim() === ''){
            console.log('Esta vacio');
        } else {
            console.log('No esta vacio');
        }
    }

});