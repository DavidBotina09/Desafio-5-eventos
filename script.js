const valorBoleta = 5000
const reservaciones = []
const formulario = document.getElementById("formulario")
const tiquete = ""

//Clases
class tiquetes{
    constructor(id,pelicula = "",hora = "",clientes = 0,bebida = "",palomitas = "",comida = ""){
        this.id = id
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
            reservaciones.splice(tiquete)
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
            reservaciones.splice(i,1)
            break
    }
}
const verificarClientes = (c) =>{
    if((isNaN(c))||(c > 5)||(c < 1)){
        alert("ingresa caracteres validos")
        reservaciones.splice(i,1)
    }
    if(c > 5){
        alert("el maximo de clientes por grupo es de 5 personas")
        reservaciones.splice(i,1)
    }
    if(c < 1){
        alert("el minimo de clientes es de 1 personas")
        reservaciones.splice(i,1)
    }
}
let CamId = 1
let i = 0
const identificador = () =>{
    for(i ; i < CamId ; i++){
        console.log(`el id cambio a ${i}`)
    }
    CamId += 1
}

formulario.addEventListener("submit",(e) => {
    e.preventDefault()
    const carteleras = document.getElementById("carteleras").value
    const horarios = document.getElementById("horarios").value
    const cantidadClientes = document.getElementById("cantidadClientes").value
    const bebidaA = document.getElementById("bebidaA").value
    const comidaA = document.getElementById("comidaA").value
    const palomitasA = document.getElementById("palomitasA").value

    identificador()
    const tiquete = new tiquetes(i,carteleras,horarios,cantidadClientes,bebidaA,palomitasA,comidaA)
    reservaciones.push(tiquete)
   

    verificarPelicula(tiquete.pelicula)
    verificarHora(tiquete.hora)
    verificarClientes(tiquete.clientes)


    formulario.reset()
    console.log(tiquete)
    console.log(reservaciones)
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











