const reservaciones = []
const formulario = document.getElementById("formulario")


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

    switch(tiquete.pelicula){
        case "thor":
            tiquete.pelicula = "Thor"
            break
        case "telefono negro":
            carteleras = "Telefono Negro"
            break
        case "minions":
            carteleras = "Los Minions"
            break
        default:
            alert("no ingreses peliculas que no estan en cartelera")
            formulario.reset()
            break
    }


    formulario.reset()
    console.log(tiquete)
})

//funciones para mostrar los tiquetes
botonTiquetera.addEventListener('click', () => {
    divReservaciones.innerHTML = ""
    reservaciones.forEach((tiquete, indice) => {
        divReservaciones.innerHTML += `
            <div class="card" id="user${indice}" style="width: 18rem;margin:3px;">
                <div class="card-body">
                    <h5 class="card-title">pelicula: ${tiquete.pelicula}</h5>
                    <p class="card-text">hora: ${tiquete.hora}</p>
                    <p class="card-text">clientes: ${tiquete.clientes}</p>
                    <p class="card-text">Bebida: $${tiquete.bebida}</p>
                    <p class="card-text">Palomitas: ${tiquete.palomitas}</p>
                    <p class="card-text">Comida: ${tiquete.comida}</p>
                </div>
            </div>
        
        `
    })
})











