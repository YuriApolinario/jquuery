
var $target = $('.anime'),
    animationClass = 'anime-start',
    offset = $(window).height();//pga o tamanho da janela oara a tela não ficar em branco

function animeScroll() {
    var documentTop = $(document).scrollTop();//calcula a distancia do scrool ao topo
    //console.log(documentTop);
    $target.each(function () {
        var itemTop = $(this).offset().top;//essa funçao pega distancia entre o item eo topo e 
        if (documentTop > itemTop - 300) {//essa condição add a classe animation a função 
            $(this).addClass(animationClass);
        } else {
            $(this).removeClass(animationClass);
        }
    })
}

animeScroll();

$(document).scroll(function (){//evento do jquery para autorefresh na animação da pagina
    animeScroll();
    console.log("teste")
})