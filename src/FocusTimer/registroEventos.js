import { controles, musicaControles, timer } from "./elementos.js"
import * as acoes from "./acoes.js"

import * as elementos from './elementos.js'
import estado from "./estado.js"
import { updateDisplay } from "./timer.js"

export function registroDeEventosControles(){

    // adicionar um obsevador de eventos
    controles.addEventListener('click', (evento) => {
        const botao = evento.target.dataset.botao
        
        if(typeof acoes[botao] != "function"){
            return
        }

        acoes[botao]()
        
    })
}

export function trocarMinutos(){
    timer.addEventListener('click', (evento) => {
        const timer = evento.target.dataset.timer

        if(typeof acoes[timer] != "function"){
            return
        }

        acoes[timer]()

        elementos.minutos.textContent = ""
        
        
    })

    elementos.minutos.onkeypress = (evento) =>  /\d/.test(evento.key)

    elementos.minutos.addEventListener('blur', (evento) => {
        let time = evento.currentTarget.textContent

        time = time > 60 || time <= 0 ? 60 : time // ternário 

        estado.minutos = time

        estado.segundos = 0
        updateDisplay()

        elementos.minutos.removeAttribute('contenteditable')
    })
}


export function registroControleMusica(){
    musicaControles.addEventListener('click', (evento) => {
        const musica = evento.target.dataset.musica

        if(typeof acoes.tocarMusica != "function"){
            return
        }

        estado.musicaEmExecucao.push(musica)        
        
        if(estado.musicaEmExecucao[0] === musica){            
            if(estado.musicaEmExecucao.length >= 2){
                estado.musicaEmExecucao = []
            }
            
            acoes.tocarMusica(musica)
            
        }
        

    })
}

