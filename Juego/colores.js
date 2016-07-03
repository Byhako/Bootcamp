$(document).ready(function(){

  var puntos = parseInt(0);
  game();
//*****************************************************************************
  function game(){

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
      $('#colores').append('<div class="correcto" id="color1">'+'</div>');
      $('#colores').append('<div class="incorrecto" id="color2">'+'</div>');
      $('#colores').append('<div class="incorrecto" id="color3">'+'</div>');

    }
    if (ban===2) {
      $('#color').append('<p>'+'RBG ('+c2[0]+','+c2[1]+','+c2[2]+')'+'</p>');
      $('#colores').append('<div class="incorrecto" id="color1">'+'</div>');
      $('#colores').append('<div class="correcto" id="color2">'+'</div>');
      $('#colores').append('<div class="incorrecto" id="color3">'+'</div>');
    }
    if (ban===3) {
      $('#color').append('<p>'+'RBG ('+c3[0]+','+c3[1]+','+c3[2]+')'+'</p>');
      $('#colores').append('<div class="incorrecto" id="color1">'+'</div>');
      $('#colores').append('<div class="incorrecto" id="color2">'+'</div>');
      $('#colores').append('<div class="correcto" id="color3">'+'</div>');
    }

    $('#color1').css('background','rgb('+c1[0]+','+c1[1]+','+c1[2]+')');
    $('#color2').css('background','rgb('+c2[0]+','+c2[1]+','+c2[2]+')');
    $('#color3').css('background','rgb('+c3[0]+','+c3[1]+','+c3[2]+')');

    botones();

  };

//*****************************************************************************
  function botones(){

    $('.incorrecto').click(function() {
      $('#dibujo').empty();
      $('#dibujo').css('background','#B40404');
      $('#dibujo').append('<img src="triste.png" id="im" />'+'<p>Mala suerte,  \
                          elegiste el color incorrecto.</p>'+'<div id="boton-malo"> \
                          <h2>Volver a intentarlo</h2></div>')

      $('#score').empty();
      $('#score').append('<p id="p1">'+0+'</p>');

      $('#boton-malo').click(function() {
        $('#color').empty();
        $('#colores').empty();
        $('#dibujo').empty();
        $('#dibujo').css('background','white');
        game();
      });
    });


    $('.correcto').click(function() {
      $('#dibujo').empty();
      $('#dibujo').css('background','#01DF01');
      $('#dibujo').append('<img src="feliz.png" id="im" />'+'<p>Excelente,  \
                          elegiste el color correcto.</p>'+'<div id="boton-bueno"> \
                          <h2>Seguir Jugando</h2></div>')

      var z = $('#p1').html();
      var puntos = parseInt(z)+1;
      $('#score').empty();
      $('#score').append('<p id="p1">'+puntos+'</p>');

      $('#boton-bueno').click(function() {
        $('#color').empty();
        $('#colores').empty();
        $('#dibujo').empty();
        $('#dibujo').css('background','white');
        game();
      });
    });

  };
//*****************************************************************************

});

