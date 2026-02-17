"use strict";
// polimorfismo
Object.defineProperty(exports, "__esModule", { value: true });
class Notificiacion {
    enviar(mensaje) {
        console.log(`Enviando notificación ${mensaje}`);
    }
}
class NotificacionEmail extends Notificiacion {
    enviar(mensaje) {
        console.log(`Enviando email: ${mensaje}`);
    }
}
class NotificacionSMS extends Notificiacion {
    enviar(mensaje) {
        console.log(`Enviando SMS: ${mensaje}`);
    }
}
class NotificacionPush extends Notificiacion {
    enviar(mensaje) {
        console.log(`Enviando notificación push: ${mensaje}`);
    }
}
function enviarNotificacion(notificacion, mensaje) {
    notificacion.enviar(mensaje);
}
enviarNotificacion(new NotificacionEmail(), "Bienvenido");
enviarNotificacion(new NotificacionSMS(), "Hello,World!");
enviarNotificacion(new NotificacionPush(), "WTFFF");
