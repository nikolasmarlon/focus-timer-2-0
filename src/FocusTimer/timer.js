import estado from "./estado.js";
import * as elementos  from './elementos.js'


export function updateDisplay(minutos, segundos){
    minutos = minutos ?? estado.minutos  // nullish coalesing operator
    segundos = segundos ?? estado.segundos  // nullish coalesing operator

    //atualizar o elemento html
    elementos.minutos.textContent =  String(minutos).padStart(2, "0")
    elementos.segundos.textContent =  String(segundos).padStart(2, "0")

}