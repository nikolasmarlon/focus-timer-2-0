import { controles, musicaControles } from "./elementos.js"

export function registroDeEventosControles(){

    // adicionar um obsevador de eventos
    controles.addEventListener('click', (evento) => {
        const botao = evento.target.dataset.botao
        
        if(botao === undefined){
            return
        }

        console.log(botao)
        
    })
}


export function registroControleMusica(){
    musicaControles.addEventListener('click', (evento) => {
        const musica = evento.target.dataset.musica

        if(musica === undefined){
            return
        }

        console.log(musica)

    })
}