import { controles, musicaControles } from "./elementos.js"
import * as acoes from "./acoes.js"

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


export function registroControleMusica(){
    musicaControles.addEventListener('click', (evento) => {
        const musica = evento.target.dataset.musica

        if(typeof acoes[musica] != "function"){
            return
        }

        acoes[musica]()

    })
}