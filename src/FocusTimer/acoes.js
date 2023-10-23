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


export function tocarMusica(musica){
    
    let qualMusica = document.getElementById(musica)    
     
    console.log(" primeiro " + estado.estaMudo)

    estado.estaMudo =  qualMusica.classList.toggle('music-active')  

    console.log(" segundo  " + estado.estaMudo)
    
    if(estado.estaMudo){
        estado.estaMudo  = false       
        console.log(estado.estaMudo)   
        sons[musica].play()
        !estado.estaMudo
        return
    } else {
        sons[musica].pause()
    }

   
    
}
