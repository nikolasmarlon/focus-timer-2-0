import estado from "./estado.js";
import * as elementos  from './elementos.js'
import { stop } from "./acoes.js";

export function contador(){
    
    // se o estado rodando é falso eu vou retornar
    if(!estado.estaRodando){
        return
    }
   
    let minutos = Number(elementos.minutos.textContent)
    let segundos = Number(elementos.segundos.textContent)

    segundos--

    if(segundos < 0){
        segundos = 59
        minutos --
    }

    if(minutos < 0 ){
        stop()
        return
    }

    updateDisplay(minutos, segundos)

    setTimeout(() => {
        contador()
    }, 1000);
}

export function updateDisplay(minutos, segundos){
    minutos = minutos ?? estado.minutos  // nullish coalesing operator
    segundos = segundos ?? estado.segundos  // nullish coalesing operator

    //atualizar o elemento html
    elementos.minutos.textContent =  String(minutos).padStart(2, "0")
    elementos.segundos.textContent =  String(segundos).padStart(2, "0")

}