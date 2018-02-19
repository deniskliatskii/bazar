$(function () {
    // $('.your').slick({
        
    // });

    /*
    *
    * Tabs
    *
    */
    $('.tabs-content__wrap > div:not(:first)').hide();
    $('.tabs__list a').click(function (event) {
        event.preventDefault();

        var tabShow = $(this).attr('href');
        
        $('.tabs__list a').removeClass('active-tab');
        $(this).addClass('active-tab');

        $('.tabs-content__wrap > div').hide();
        $(tabShow).show();

    })

    // var btnNext = $('.arrow-next__gallery');
    // var btnPrew = $('.arrow-prew__gallery');
    // // var widthImage = $('.gallery-min').width();
    // var widthImage = 0;
    // $(btnNext).click(function (event) {
    //     event.preventDefault();
    //     var widthImage = widthImage - 89; 
    //     $('.gallery-item').css('margin-left', widthImage);

    //     // console.log(widthImage);
    // })

       
    /*
    *
    * Header drop down
    *
    */

    // $(document).scroll(function () {
    //     if (($(document).scrollTop() > 400) & ($(document).width() > 800)) {
    //         $('.main-header').addClass('header_fixed');
    //     } else
    //         $('.main-header').removeClass('header_fixed');
    // });


    /*
    *
    * Scrol to section
    *
    */

    $('nav a').on('click', function (event) {
        event.preventDefault();
        var ellClick = $(this).attr('href');
        var distScroll = $(ellClick).offset().top;
        $('html, body').animate(
            { 'scrollTop': distScroll }, 1500);
    })
    

    /*
    *
    * Show more
    *
    */

    $('.all-services__btn').on('click', function (event) {
        event.preventDefault();
        $('.all-services').slideToggle();
    })

    /*
    *
    * Button Up
    *
    */

    $('body').append('<button class="btn-up"/>');

    $('.btn-up').click(function () {
        $('html, body').animate({ 'scrollTop': 0 }, 1000);
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 1000) {
            $('.btn-up').addClass('btn-up__active');
        } else {
            $('.btn-up').removeClass('btn-up__active');
        }
    })
 

});

/*
    *
    * Modal Window
    *
    */

    // $('.btn-login').click(function (event) {
    //     event.preventDefault();
    //     $('.modalwindow').show();
    //     $('.overlay-modal').show();
    //     $('body').css('overflow', 'hidden');
    // })

    // $('.material-icons').click(function (event) {
    //     event.preventDefault();
    //     $('.modalwindow').hide();
    //     $('.overlay-modal').hide();
    //     $('body').css('overflow', '');
    // })

    // $(document).bind('click keydown', function (event) {
    //     if (event.keyCode == 27) {
    //         $('.modalwindow').hide();
    //         $('.overlay-modal').hide();
    //         $('body').css('overflow', '');
    //     }
    // })


/*
*
* Price show
*
*/

// $('.price-show').not(':first').hide();
// $('.switch .switch-input').click(function () {
//     $('.price-show').fadeToggle(300);
// });
