const selectPrecios = document.getElementById("id-select-precios");
const btnCargarPrecios = document.getElementById("id-btn-cargar-precios");
const txtListadoPrecios = document.getElementById("id-listado-precios");
const btnCalcularTotal = document.getElementById("id-btn-calcular-total");
const txtTotal = document.getElementById("id-txt-total");

let precios = []

let total = 0;
btnCargarPrecios.addEventListener('click', function(e){
    const dimension = selectPrecios.value;
    cargarPrecios(dimension);
    txtListadoPrecios.value = precios.join(', ');
    console.log(precios);
});

btnCalcularTotal.addEventListener('click', function(e){
    txtTotal.value = calcularTotal();
});


function cargarPrecios(dimension){
    for(let i=0; i < dimension; i++){
        const numAleatorio = Math.ceil(Math.random()*1000);
        precios[i] = numAleatorio;
    }
}



function calcularTotal (){

    for(let i = 0; i < precios.length;i++){
        total += precios[i];

    }
    return total;
}
