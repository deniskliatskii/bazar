$(function () {
  
/*
*
* GALLERY
*
*/

var imagePos = 0; 
var widthImages = $('.gallery-min').outerWidth();
var galleryImagesLenght = $('.gallery-min').length;
var galleryWrap = $('.gallery-tumbs').width();
var movPos = widthImages * galleryImagesLenght - galleryWrap;

        // Right move PREW

        $('.arrow-prew__gallery').click(function () {
            $('.arrow-next__gallery').addClass('activ-arrow');
            imagePos -= widthImages;
            $('.gallery-item').css('position', 'relative');

            if (imagePos < - movPos) {
                imagePos = 0;
            }
            $('.gallery-item').css( 'left', imagePos );
        });


        // Left move NEXT

        $('.arrow-next__gallery').click(function () {
            if (imagePos < 0) {
                imagePos += widthImages;
                $('.gallery-item').css('left', imagePos);
            }
            else {
                $('.arrow-next__gallery').removeClass('activ-arrow');
            }
        });



    //Gallery full images

    $('.gallery-min a').click(function (event) {
        event.preventDefault();
        var imgAtribut = $(this).attr('href');
        $('.gallery-prewiew img').attr( { src: imgAtribut } );
    });


    // Modal window end overlay for gallery images

    $('.expand-btn').click(function () {
        var modalWindowContent = $('.gallery-prewiew img').attr('src');
        $('body').append('<img class="modal-images">');
        $('.modal-images').attr({ src: modalWindowContent}).fadeIn(900);

        $('.overlay-menu').fadeIn(400);
                    
        $('.overlay-menu').click(function () {
            $('.overlay-menu').fadeOut(400);
            $('.modal-images').fadeOut(400);
        });
    });


/*
*
* COUNT TO CART
*
*/  

    var numCount = 1;
    $('.quantity-count').text(numCount);

    $('.quantity-plus').click(function (event) {
        $('.quantity-count').text(++numCount);
    });

    $('.quantity-min').click(function (event) {
        if (numCount > 1) {
            $('.quantity-count').text(--numCount);
        }
    });


/*
*
* TABS
*
*/

    $('.tabs-content__wrap > div:not(:nth-child(2))').hide();

    $('.tabs__list a').click(function (event) {
        event.preventDefault();

        var tabShow = $(this).attr('href');
        
        $('.tabs__list a').removeClass('active-tab');
        $(this).addClass('active-tab');

        $('.tabs-content__wrap > div').hide();
        $(tabShow).show();

    });

    /*
    *
    * RESPONSIVE MENU
    * 
    */

    // Open menu

    $('.label__menu').click(function () {
        $('.overlay-menu').fadeIn(400);
        $('.nav-header').css('transform', 'rotateY(0)');
    });


    // Close menu

    $('.overlay-menu').click(function () {
        $('.overlay-menu').fadeOut(400);
        $('.nav-header').css('Transform', 'rotateY(90deg)');
    });
    
/*
*
* Button Up
*
*/

    $('body').append('<button class="btn-up"</button>');

    $('.btn-up').click(function () {
        $('html, body').animate({
            'scrollTop': 0 
        }, 1000);
    });

    $(window).scroll(function () {
        if ( $(window).scrollTop() > 1000 ) {
            $('.btn-up').addClass('btn-up__active');
        } else {
            $('.btn-up').removeClass('btn-up__active');
        }
    });
 
/*
*
* STAR RATING
*
*/

    $('.rating-box i').click(function (event) {
        $('.rating-box i').removeClass('active-star');
        $(this).addClass('active-star');
        var index = parseInt($(this).attr('data-index'));
        $('.count-rating').text('(' + index + ' reviews'+')');
        $('.rating-box').addClass('block-rating');
    })

    $('.rating-tabs i').click(function (event) {
        $('.rating-tabs i').removeClass('active-star');
        $(this).addClass('active-star');
        var index = parseInt($(this).attr('data-index'));
        $('a[href*="#reviews"]').text('Reviews ' + '(' + index + ')');
        $('.rating-tabs').addClass('block-rating');
    })
});

