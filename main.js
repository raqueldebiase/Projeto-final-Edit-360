/* Menu hamburguer onclick*/

$('#clicarParaAbrirMenu').on('click', function(){
  const menuHamburguer = $("#abaMenuHamburguer");
  if (menuHamburguer.hasClass('menuDisplayNone')){
    $('#abaMenuHamburguer').removeClass('menuDisplayNone');
  } else {
    $('#abaMenuHamburguer').addClass('menuDisplayNone');
  }
  event.preventDefault();
});




/* Mostrar DIV dia 10*/

$(".diaClicavel").each(function(){
  $(this).on('click', function(){
    const dia10 = $("#idDia10");
    if (dia10.hasClass('dia10')){
      $('#idDia10').removeClass('dia10');
    } else {
      $('#idDia10').addClass('dia10');
    }
    event.preventDefault();
  });
});


/* Aumentar, diminuir span*/
function aumenta(obj){
    obj.height=obj.height*1.1;
    obj.width=obj.width*1.1;
}

function diminui(obj){
    obj.height=obj.height/1.1;
    obj.width=obj.width/1.1;
}

/*slick banner valores*/

$('.cartazesSlick').slick({

  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 3,
});



