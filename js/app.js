//variables y selectores
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");




//eventos

eventListeners();
function eventListeners(){
    document.addEventListener("DOMContentLoaded", preguntarPresupuesto);

    formulario.addEventListener("submit", agregarGasto);
}




//clases(se reservan para los objetos)
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
}

class UI{
    insertarPresupuesto(cantidad){
        //extrayendo los valores
        const {presupuesto, restante} = cantidad;

        //agregar al HTML
        document.querySelector("#total").textContent = presupuesto;
        document.querySelector("#restante").textContent = restante;
    }

    imprimirAlerta(mensaje, tipo){

    }

}

//instanciar
const ui = new UI();
let presupuesto;


//funciones

function preguntarPresupuesto(){
    const presupuestoUsuario = prompt("¿Cuál es tu presupuesto?");
    // console.log(parseFloat(presupuestoUsuario));
    if(presupuestoUsuario === "" || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload();//esto es para q vuelva a preguntar hasta q se ingrese un ppto válido, q sea un número, mayor o igual a 0.
    }
    //presupuesto válido
    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto);
}

//añade gastos
function agregarGasto(e){
    e.preventDefault();

    //leer los datos del formulario
    const nombre = document.querySelector("#gasto").value;
    const cantidad = document.querySelector("#cantidad").value;
}

    //validar
    if(nombre === "" || cantidad === ""){
        ui.imprimirAlerta("ambos campos son obligatorios", "error");
    }