

let darkMode = true

const buttonDarkMode = document.getElementById('trocar-modo')

buttonDarkMode.addEventListener('click', (evento) => {

    //verifica se a classe dark está na tag html, toggle adiciona, caso nao tenha
    document.documentElement.classList.toggle('dark')

    const modo = darkMode ? 'dark' : 'light'

    evento.currentTarget.querySelector('span').textContent = `${modo} mode ativado`

    darkMode = !darkMode // recebe o contrário do valor atual
})