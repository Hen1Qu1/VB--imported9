
function carro(){

    var box = window.document.getElementById('vb-quantid');
    var caixa = Number(box.value);

    var type_color = window.document.getElementById('vb-color');
    var color = type_color.options[type_color.selectedIndex].text;

    var size = window.document.getElementById('vb-size');
    var size_value = String(size.value);

    var genero = "M";

    if(caixa == " " || caixa < 1 ||  caixa > 100 ){
         
      window.alert('[ERRO] - INFORME UM NÚMERO DE 1 A 100')

    }else {  

      const box1 = caixa;
      var tot = 25;
      let value_array = [];
      var array_tot = 0;

      window.alert('ADICIONADO AO CARRINHO !!');

      for(var i = 0; i < box1; i++){

         value_array[i] = tot;
         array_tot += value_array[i];
      }

      var tot_array = array_tot.toFixed(2);

      divcarrinho.innerHTML = `<codd><h2>PREÇO TOTAL: R$ ${tot_array}</h2></codd>`;
      carrinhodiv.innerHTML = `<h3><span>&#128722;  ${box1}x POLO TOMMY HILFIGER</br> // COR: ${color}</br> // TAMANHO: ${size_value}</br> // GENERO: ${genero}</br> // TIPO: CAMISA</span></h3>`;        

    }
}