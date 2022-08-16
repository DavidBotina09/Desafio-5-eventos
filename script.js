const reservaciones = []
const formulario = document.getElementById("formulario")


formulario.addEventListener("submit",(e) => {
    e.preventDefault()
    const carteleras = document.getElementById("carteleras").value
    const horarios = document.getElementById("horarios").value
    const cantidadClientes = document.getElementById("cantidadClientes").value
    const bebidaA = document.getElementById("bebidaA").value
    const comidaA = document.getElementById("comidaA").value
    const palomitasA = document.getElementById("palomitasA").value


    const tiquete = new tiquetes(carteleras,horarios,cantidadClientes,bebidaA,comidaA,palomitasA)
    reservaciones.push(tiquete)

    formulario.reset()
    console.log(tiquete)
})



//Clases
class tiquetes{
    constructor(pelicula = "",hora = "",clientes = "",bebida = "",palomitas = "",comida = ""){
        this.pelicula = pelicula
        this.hora = hora
        this.clientes = clientes
        this.bebida = bebida
        this.palomitas = palomitas
        this.comida = comida
    }
}





