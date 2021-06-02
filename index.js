
function carregar() {
    var xhoras = document.querySelector('h4#txtsec')
    var img = document.querySelector('img#foto')
    var hora = new Date()
    var turno = hora.getHours()
    xhoras.innerHTML = `Agora são ${turno} horas`

    if (turno >= 5 && turno < 12) {
        img.src = 'images/manha.jpg'
        document.body.style.background = 'yellow'

    } else if (turno >= 12 && turno <= 18) {
        img.src = 'images/tarde.jpg'
        document.body.style.background = 'orange'

    } else if (turno > 18 && turno < 24) {
        img.src = 'images/night.jpg'
        document.body.style.background = '#111829'

    } else {
        img.src = 'images/madrugada.jpg'
        document.body.style.background = 'black'
    }
}