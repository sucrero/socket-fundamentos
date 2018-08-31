var socket = io();
// Escuchar
socket.on('connect', function() {
    console.log('conectado al servidor');
})

// Escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
})

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Oswaldo',
    mensaje: 'Hola Mundo'
}, function(resp) {
    //console.log('Se disparó el callback');
    console.log('respuesta server: ', resp);
})

//ecuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Mensaje del ', mensaje.usuario, ', ', mensaje.mensaje);
})