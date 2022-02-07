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

/*SCROLL LINE UP*/

var $target = $('.artistas'),
    animationClass = 'artistaStart';

function animeScroll(){
  var documentTop = $(document).scrollTop();
  
  $$target.each(function() {
    var itemTop = $(this).offset().top;
    if(documentTop > itemTop){
      $(this).addClass(animationClass);
    } else {
      $(this).removeClass(animationClass);
    }
  })
}












/*

let desporto = document.getElementById("desporto");
let musica = document.getElementById("musica");
let musica2 = document.getElementById("musica2");
let humor = document.getElementById("humor");

window.addEventListener('scroll', function(){
  var value=this.window.scrollY;

  desporto.style.top = value * 5.0 + 'px';
  musica.style.top = value * 0.5 + 'px';
  musica2.style.top = value * 0.5 + 'px';
  humor.style.top = value * 0.5 + 'px';
})
*/




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



