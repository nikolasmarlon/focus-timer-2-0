import estado from './estado.js'

import * as elementos from './elementos.js'

// importar tudo de timer
import * as timer from './timer.js'

export function playPause(){
    console.log('função de play e pause')

    estado.estaRodando =  document.documentElement.classList.toggle('rodando')

    //console.log(estado.estaRodando)

    timer.contador()
    
}
export function stop(){
    // console.log('stop')
    estado.estaRodando = false
    document.documentElement.classList.remove('rodando')
    timer.updateDisplay()
}

export function mais () {
    console.log('mais')

    console.log(estado.minutos)

    estado.minutos = estado.minutos + 5

    timer.updateDisplay(estado.minutos)
    console.log(estado.minutos, estado.segundos)
}
export function menos () {
    console.log('menos')

    console.log(estado.minutos)

    estado.minutos = estado.minutos - 5
    timer.updateDisplay(estado.minutos, estado.segundos)
    console.log(estado.minutos)
}

export function trocarTempo(){
    elementos.minutos.setAttribute('contenteditable', true)
    elementos.minutos.focus()
    
    console.log('trocar tempo')
}


export function tocarMusica(){

    let musica = document.getElementById
    console.log(musica)

}
