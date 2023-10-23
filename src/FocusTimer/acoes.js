import estado from './estado.js'

import * as elementos from './elementos.js'

// importar tudo de timer
import * as timer from './timer.js'

// importação das músicas
import * as sons from './sons.js'

export function playPause(){
    

    estado.estaRodando =  document.documentElement.classList.toggle('rodando')

    //console.log(estado.estaRodando)

    timer.contador()
    sons.botaoAudio.play()
    
}
export function stop(){
    // console.log('stop')
    estado.estaRodando = false
    document.documentElement.classList.remove('rodando')
    
    timer.updateDisplay(25)
    sons.botaoAudio.play()
}

export function mais () {      

    estado.minutos = estado.minutos + 5
    sons.botaoAudio.play()
    timer.updateDisplay(estado.minutos, estado.segundos)
    
}
export function menos () {
      
    
    estado.minutos = estado.minutos - 5
    
    sons.botaoAudio.play()
    timer.updateDisplay(estado.minutos, estado.segundos)
    
}

export function trocarTempo(){
    elementos.minutos.setAttribute('contenteditable', true)    
    elementos.minutos.focus()   

}


export function tocarMusica(musica){
    
    let qualMusica = document.getElementById(musica) 
    estado.estaMudo =  qualMusica.classList.toggle('music-active')    
    
    if(estado.estaMudo){         
        sons[musica].play()        
        return
    } else {
        sons[musica].pause()
    } 
    
}
