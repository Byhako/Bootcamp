$(document).ready(function(){

  //FUNCION SUMA
  $('#sumar').click(function(){
    $('#resultado').empty();
    var a = $('input[name=a]').val();
    var b = $('input[name=b]').val();
    var a1 = Number(a);
    var b1 = Number(b);
    $('#resultado').append(a1+b1);
  });

  //FUNCION LONGITUD
  $('#contar').click(function(){
    $('#salida').empty();
    var cade = $('input[name=cadena]').val();
    $('#salida').append(cade.length);
  });

  //FUNCION FIZZBUZZ
  $('#calcula').click(function(){
    $('#fiz').empty();
    var xx = $('input[name=numero]').val();
    var x = Number(xx);
    if(x%3===0  &&  x%5===0){
      $('#fiz').append("fizzbuzz");}
    else if(x%5===0){
      $('#fiz').append("buzz");}
    else if(x%3===0){
      $('#fiz').append("fizz");}
    else{$('#fiz').append(x);}
  });

  //FUNCION FIBONACCI
  $('#calcu').click(function(){
    $('#fibo').empty();
    var n = $('input[name=serie]').val();
    var N = Number(n);
    var a = 0;
    var b = 1;
    var c = 0;
    if(N===0){
      $('#fibo').append(0);}
    else if(N===1){
      $('#fibo').append(1);}
    else{
      for(var i=2; i<N+1; i++){
        c = a+b;
        a = b;
        b = c;
      }
      $('#fibo').append(c);
    }
  });

  //FUNCION MULTIPLIER
  $('#boton').click(function(){
    $('#num').empty();
    $('#vector').empty();
    var co = $('input[name=cofi]').val();
    var Co = Number(co);
    var ve = [1,2,3,4,5];
    $('#num').append(co);
    for(var i=0; i<ve.length ; i++){
    ve[i] = ve[i]*Co
    $('#vector').append(ve[i]+',');
    };
  });

  //FUNCION PARIDAD
  $('#genera').click(function(){
    $('#aleatorio').empty();
    $('#paridad').empty();
    for (var i = 1; i <21; i++){
      $('#aleatorio').append(i+'</br>'+'</br>');

      if(i%2===0){
        $('#paridad').append('Numero_par'+'</br>'+'</br>');
        //alert('Numero par')
      };
      if (i%2===1){$('#paridad').append('Numero_impar'+'</br>'+'</br>');}

    };
  });

  //FUNCION TABLAS DE MULTIPLICAR
  for(var i=1; i<11; i++ ){
    for (var j=1; j<11; j++ ){
      var k = i * j;
      if(i===1){$('#T1').append(i+' x '+j+' = '+k+'</br>')};
      if(i===2){$('#T2').append(i+' x '+j+' = '+k+'</br>')};
      if(i===3){$('#T3').append(i+' x '+j+' = '+k+'</br>')};
      if(i===4){$('#T4').append(i+' x '+j+' = '+k+'</br>')};
      if(i===5){$('#T5').append(i+' x '+j+' = '+k+'</br>')};
      if(i===6){$('#T6').append(i+' x '+j+' = '+k+'</br>')};
      if(i===7){$('#T7').append(i+' x '+j+' = '+k+'</br>')};
      if(i===8){$('#T8').append(i+' x '+j+' = '+k+'</br>')};
      if(i===9){$('#T9').append(i+' x '+j+' = '+k+'</br>')};
      if(i===10){$('#T10').append(i+' x '+j+' = '+k+'</br>')};
    };
  };

//FUNCION SUMAME
  var ar = [2,4,6,8,10]
  $('#array').empty();
  $('#array').append('[2,4,6,8,10]');
  var L = ar.length;
  contar = 0;

  $('#suma').click(function(){
    $('#total').empty();
    for (var i = 0; i <L; i++) {
      contar = contar+ar[i];
    };
    $('#total').append(contar);
  });

  //FUNCION PROMEDIAME
  var ar = [2,4,6,8,10]
  $('#array1').empty();
  $('#array1').append('[2,4,6,8,10]');
  var L = ar.length;
  conor = 0;

  $('#promedio').click(function(){
    $('#total1').empty();
    for (var i = 0; i <L; i++) {
      conor = conor+ar[i];
    };
    $('#total1').append(conor/L);
  });

//FUNCION TYPE_EXTRACTOR
  var arreglo = [2,7,'a',true,'b',false];
  $('#mezcla').empty();
  $('#mezcla').append("[2,7,'a',true,'b',false]");
  var R = arreglo.length;

  $('#clasificar').click(function(){
    $('#total2').empty();

    for(var i = 0; i <R; i++){

      var ban = typeof arreglo[i];
      $('#total2').append(ban+'&nbsp&nbsp&nbsp'+arreglo[i]+'</br>');
    };
  });
});