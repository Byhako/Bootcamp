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
    }
  });
});