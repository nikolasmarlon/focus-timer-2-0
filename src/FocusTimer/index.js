
import estado from './estado.js'

import * as timer from './timer.js'

// importar o registro de eventos
import * as eventos from './registroEventos.js'

export function start(minutos, segundos){
    estado.minutos = minutos
    estado.segundos = segundos


    timer.updateDisplay()

    // registro de eventos 
    eventos.trocarMinutos()
    eventos.registroDeEventosControles()
    eventos.registroControleMusica()

}