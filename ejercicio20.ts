// polimorfismo

class Notificiacion {
    enviar(mensaje: string): void {
        console.log(`Enviando notificación ${mensaje}`);
    }
}

class NotificacionEmail extends Notificiacion {
    enviar(mensaje: string): void {
        console.log(`Enviando email: ${mensaje}`);
    }
}

class NotificacionSMS extends Notificiacion {
    enviar(mensaje: string): void {
        console.log(`Enviando SMS: ${mensaje}`);
    }
}

class NotificacionPush extends Notificiacion {
    enviar(mensaje:string):void {
        console.log(`Enviando notificación push: ${mensaje}`);
    }
}

function enviarNotificacion(notificacion: Notificiacion, mensaje: string): void {
    notificacion.enviar(mensaje);
}

enviarNotificacion(new NotificacionEmail(), "Bienvenido");
enviarNotificacion(new NotificacionSMS(), "Hello,World!");
enviarNotificacion(new NotificacionPush(), "WTFFF");
