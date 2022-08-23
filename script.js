$(document).ready(function() {
    $(window).scroll(function() {
        //verifica se a janela é rolada mais de 500px, adiciona/remove a classe solid
        if ($(this).scrollTop() > 550) {
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible');
        } else {
            $('.navbar').removeClass('solid');
            $('.back-to-top').removeClass('visible');
        }
    });
});

$(document).ready(function() {
    //adicionar rolagem suave a todos os links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            //evitar o comportamento de clique de âncora padrão
            event.preventDefault();

            //armazenar hash
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;    });
        } //fim do if
    });
});