
import estado from './estado.js'

// importar o registro de eventos
import * as eventos from './registroEventos.js'

export function start(minutos, segundos){
    estado.minutos = minutos
    estado.segundos = segundos

    // registro de eventos 
    eventos.registroDeEventosControles()
    eventos.registroControleMusica()

}