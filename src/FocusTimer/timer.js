import estado from "./estado.js";
import * as elementos  from './elementos.js'
import { stop } from "./acoes.js";

// import som final tempo
import { somTempoEsgotado } from "./sons.js";

export function contador(){

    clearTimeout(estado.contadorId)
    
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
        estado.minutos --        
    }

    if(minutos < 0 ){
        stop()
        somTempoEsgotado.play()
        return
    }

    updateDisplay(minutos, segundos)
    
   

    

    // settimeout returna um id toda vez que é criado
    estado.contadorId = setTimeout(() => {
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