jQuery(document).ready(function($) { 
    /*ROLAR PÁGINA SUAVEMENTE*/
    $('.scroll').click(function(e){
        e.preventDefault();
        var id = $(this).attr('href'),
            menuHeight = $('nav').innerHeight(),
            targetOffset = $(id).offset().top;
        $('html,body').animate({
            scrollTop: targetOffset - menuHeight
        }, 500);
    });

    /*INFORMA EM QUAL SEÇÃO DO SITE O USUÁRIO ESTÁ*/
    $(document).on("scroll", onScroll);
      function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos+50 && refElement.position().top + refElement.height() > scrollPos-210) {
                $('a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
            });
        }

    /*DIMINUI/AUMENTA O MENU*/
    $(document).on("scroll", function() {
        if($(document).scrollTop()>10) {
            $("ul").removeClass("menu").addClass("menuPequeno");
            $("img").removeClass("imagemGrande").addClass("imagemPequena");
        } else {
            $("ul").removeClass("menuPequeno").addClass("menu");
            $("img").removeClass("imagemPequena").addClass("imagemGrande");
        }
    });
}); 



