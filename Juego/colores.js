$(document).ready(function(){

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      var a = Math.floor((Math.random() * 255) + 1);
      var b = Math.floor((Math.random() * 255) + 1);
      var c = Math.floor((Math.random() * 255) + 1);
    }
    if (i===0) {var c1 = [a,b,c]}
    if (i===1) {var c2 = [a,b,c]}
    if (i===2) {var c3 = [a,b,c]}
  }

  var ban = Math.floor((Math.random() * 3) + 1);

  if (ban===1) {
    $('#color').append('<p>'+'RBG ('+c1[0]+','+c1[1]+','+c1[2]+')'+'</p>');
    $('#colores').append('<a href="correcto.html" id="color1">'+'</a>');
    $('#colores').append('<a href="incorrecto.html" id="color2">'+'</a>');
    $('#colores').append('<a href="incorrecto.html" id="color3">'+'</a>');

  }
  if (ban===2) {
    $('#color').append('<p>'+'RBG ('+c2[0]+','+c2[1]+','+c2[2]+')'+'</p>');
    $('#colores').append('<a href="incorrecto.html" id="color1">'+'</a>');
    $('#colores').append('<a href="correcto.html" id="color2">'+'</a>');
    $('#colores').append('<a href="incorrecto.html" id="color3">'+'</a>');
  }
  if (ban===3) {
    $('#color').append('<p>'+'RBG ('+c3[0]+','+c3[1]+','+c3[2]+')'+'</p>');
    $('#colores').append('<a href="incorrecto.html" id="color1">'+'</a>');
    $('#colores').append('<a href="incorrecto.html" id="color2">'+'</a>');
    $('#colores').append('<a href="correcto.html" id="color3">'+'</a>');
  }

  $('#color1').css('background','rgb('+c1[0]+','+c1[1]+','+c1[2]+')');
  $('#color2').css('background','rgb('+c2[0]+','+c2[1]+','+c2[2]+')');
  $('#color3').css('background','rgb('+c3[0]+','+c3[1]+','+c3[2]+')');

});