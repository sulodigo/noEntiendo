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
    constructor(varTotal){
        this.total = Number(varTotal);
        this.restante = Number(varTotal);
        this.gastos = [];
    }
}

class UI{
    insertarPresupuesto(objPresupuesto){
        //extrayendo los valores
        const {total, restante} = objPresupuesto;

        //agregar al HTML
        document.querySelector("#total").textContent = total;
        document.querySelector("#restante").textContent = restante;
    }

    imprimirAlerta(mensaje, tipo){

    }

}

//instanciar
const ui = new UI();
let objPresupuesto;


//funciones

function preguntarPresupuesto(){
    const varTotal = prompt("¿Cuál es tu presupuesto total?");
    // console.log(parseFloat(total));
    if(varTotal === "" || varTotal === null || isNaN(varTotal) || varTotal <= 0){
        window.location.reload();//esto es para q vuelva a preguntar hasta q se ingrese un ppto válido, q sea un número, mayor o igual a 0.
    }
    //presupuesto válido
    objPresupuesto = new Presupuesto(varTotal);
    console.log(objPresupuesto);

    ui.insertarPresupuesto(objPresupuesto);
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