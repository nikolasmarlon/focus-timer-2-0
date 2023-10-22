import estado from './estado.js'

import * as elementos from './elementos.js'

// importar tudo de timer
import * as timer from './timer.js'

// importação das músicas
import * as sons from './sons.js'

export function playPause(){
    console.log('função de play e pause')

    estado.estaRodando =  document.documentElement.classList.toggle('rodando')

    //console.log(estado.estaRodando)

    timer.contador()
    sons.botaoAudio.play()
    
}
export function stop(){
    // console.log('stop')
    estado.estaRodando = false
    document.documentElement.classList.remove('rodando')
    
    timer.updateDisplay()
    sons.botaoAudio.play()
}

export function mais () {
    console.log('mais')

    console.log(estado.minutos)

    estado.minutos = estado.minutos + 5
    sons.botaoAudio.play()
    timer.updateDisplay(estado.minutos, estado.segundos)
    
}
export function menos () {
    console.log('menos')

    console.log(estado.minutos)

    estado.minutos = estado.minutos - 5
    sons.botaoAudio.play()
    timer.updateDisplay(estado.minutos, estado.segundos)
    
}

export function trocarTempo(){
    elementos.minutos.setAttribute('contenteditable', true)
    elementos.minutos.focus()

    console.log('trocar tempo')
}


export function cafeteriaAudio(){
    let qualMusica = document.getElementById('cafeteriaAudio')
    estado.estaMudo =  qualMusica.classList.toggle('music-active')    

    if(estado.estaMudo){
        sons.cafeteriaAudio.play()
        return
    }
    sons.cafeteriaAudio.pause()
}

export function chuvaAudio(){
    let qualMusica = document.getElementById('chuvaAudio')
    estado.estaMudo =  qualMusica.classList.toggle('music-active')    

    if(estado.estaMudo){
        sons.chuvaAudio.play()
        return
    }
    sons.chuvaAudio.pause()
}

export function florestaAudio(){
    let qualMusica = document.getElementById('florestaAudio')
    estado.estaMudo =  qualMusica.classList.toggle('music-active')    

    if(estado.estaMudo){
        sons.florestaAudio.play()
        return
    }
    sons.florestaAudio.pause()
}

export function lareiraAudio(){
    let qualMusica = document.getElementById('lareiraAudio')
    estado.estaMudo =  qualMusica.classList.toggle('music-active')    

    if(estado.estaMudo){
        sons.lareiraAudio.play()
        return
    }
    sons.lareiraAudio.pause()
}
