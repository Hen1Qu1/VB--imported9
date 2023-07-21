
function control(){ 

    var valor = window.document.getElementById('vb-quantid');
    var value = Number(valor.value);

    if(value < 1  || value > 100){
        window.alert('[ERRO] - INFORME UM NÚMERO DE 1 A 100.');
    }
}

