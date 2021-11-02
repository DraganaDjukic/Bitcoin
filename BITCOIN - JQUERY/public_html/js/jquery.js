
$(document).ready(function () {

//owlCarousel

    $(".owl-carousel").owlCarousel({

        items: 1,
        loop: true,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true
    });
    

//fancyBox

    $('[data-fancybox="photo-gallery"]').fancybox({

    });


//easy scroll

    $('.navbar-nav a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html,body').animate(
                {
                    scrollTop: $($(this).attr('href')).offset().top
                },
                1000,
                'linear'
                );
    });
    
    
    
});
