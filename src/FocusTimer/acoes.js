import estado from './estado.js'

export function playPause(){
    console.log('função de play e pause')

    estado.estaRodando =  document.documentElement.classList.toggle('rodando')

    console.log(estado.estaRodando)
}
export function stop(){
    console.log('musica tree')
    estado.estaRodando = false

    document.documentElement.classList.remove('rodando')
}

export function mais () {
    console.log('mais')

    console.log(estado.minutos)

    estado.minutos = estado.minutos + 5

    console.log(estado.minutos)
}
export function menos () {
    console.log('menos')

    console.log(estado.minutos)

    estado.minutos = estado.minutos - 5

    console.log(estado.minutos)
}


export function tocarMusica(){

    let musica = document.getElementById
    console.log(musica)

}
