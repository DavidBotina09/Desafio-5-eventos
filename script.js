const reservaciones = []
const formulario = document.getElementById("formulario")

const restriccionPelicula = (pelis) => {
    switch(pelis){
        case "thor":
            carteleras.value = "Thor"
            break
        case "telefono negro":
            carteleras.value = "Telefono Negro"
            break
        case "minions":
            carteleras.value = "Los Minions"
            break
        default:
            alert("no ingreses peliculas que no estan en cartelera")
            carteleras.value = "0"
            break
    }
}

formulario.addEventListener("submit",(e) => {
    e.preventDefault()
    const carteleras = document.getElementById("carteleras").value
    restriccionPelicula(carteleras)
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





