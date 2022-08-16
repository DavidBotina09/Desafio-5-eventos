const valorBoleta = 5000
const reservaciones = []
const formulario = document.getElementById("formulario")
const tiquete = ""

//Clases
class tiquetes{
    constructor(pelicula = "",hora = "",clientes = 0,bebida = "",palomitas = "",comida = ""){
        this.pelicula = pelicula
        this.hora = hora
        this.clientes = clientes
        this.bebida = bebida
        this.palomitas = palomitas
        this.comida = comida
    }
}

//funcion controladora de la pelicula a escoger
const verificarPelicula = (x) =>{
    switch(x){
        case "thor":
            tiquete.pelicula = "Thor"
            break
        case "telefono negro":
            tiquete.pelicula = "Telefono Negro"
            break
        case "los minions":
            tiquete.pelicula = "Los Minions"
            break
        default:
            alert("no ingreses peliculas que no estan en cartelera")
            reservaciones.pop(tiquete)
            break
    }
}
//esta funcion valida que en el input de hora se escriban horarios validos
const verificarHora = (h) =>{
    switch(h){
        case "6:30":
            tiquete.hora = "6:30"
            break
        case "7:30":
            tiquete.hora = "7:30"
            break
        case "9:30":
            tiquete.hora = "9:30"
            break
        default:
            alert("ingresa horarios validos")
            reservaciones.pop(tiquete)
    }
}
const verificarClientes = (c) =>{
    if(isNaN(c)){
        alert("ingresa caracteres validos")
        reservaciones.pop(tiquete)
    }
    if(c > 5){
        alert("el maximo de clientes por grupo es de 5 personas")
        reservaciones.pop(tiquete)
    }
    if(c < 1){
        alert("el minimo de clientes es de 1 personas")
        reservaciones.pop(tiquete)
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

    const tiquete = new tiquetes(carteleras,horarios,cantidadClientes,bebidaA,palomitasA,comidaA)
    reservaciones.push(tiquete)

    verificarPelicula(tiquete.pelicula)
    verificarHora(tiquete.hora)
    verificarClientes(tiquete.clientes)


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
                    <h5 class="card-title">PELICULA: ${tiquete.pelicula}</h5>
                    <p class="card-text">Hora: ${tiquete.hora}</p>
                    <p class="card-text">Clientes: ${tiquete.clientes}</p>
                    <p class="card-text">Bebida: ${tiquete.bebida}</p>
                    <p class="card-text">Palomitas: ${tiquete.palomitas}</p>
                    <p class="card-text">Comida: ${tiquete.comida}</p>
                    <p class="card-text">total a pagar es $${valorBoleta * tiquete.clientes}</p>
                </div>
            </div>
        
        `
    })
})











