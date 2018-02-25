$(function () {
  
/*
*
* GALLERY
*
*/

    //Gallery full images
    $('.gallery-min a').click(function (event) {
        event.preventDefault();
        var imgAtribut = $(this).attr('href');
        $('.gallery-prewiew img').attr( { src: imgAtribut } );
    })

    $('.expand-btn').click(function () {
        var modalWindowContent = $('.gallery-prewiew img').attr('src');
        $('body').append('<img class="modal-images">');
        $('.modal-images').attr({ src: modalWindowContent});

        $('body').append(' <div class="modal-overlay"> ');
            
        $('.modal-overlay').click(function () {
            $('.modal-overlay').remove();
            $('.modal-images').remove();
        })
    })

/*
*
* COUNT TO CART
*
*/  

    var numCount = 1;
    $('.quantity-count').text(numCount);

    $('.quantity-plus').click(function (event) {
        $('.quantity-count').text(++numCount);
    })

    $('.quantity-min').click(function (event) {
        if (numCount > 1) {
            $('.quantity-count').text(--numCount);
        }
    })


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
    })
 

});


;(function () {
    var next = document.querySelector('.arrow-next__gallery');
    var prew = document.querySelector('.arrow-prew__gallery');
    var galleryList = document.querySelector('.gallery-item');
    var widthItem = document.querySelector('.gallery-min').offsetWidth;
    var galleryLenght = document.querySelectorAll('.gallery-min').length;
    var widthWrapGallery = document.querySelector('.gallery-item__wrap').offsetWidth;
    moovPos = 0;
    
    next.addEventListener('click', function () {
        galleryList.style.position = 'relative';
        prew.classList.add('activ-arrow');
        moovPos -= widthItem;
        if (moovPos < '-' + (galleryLenght * widthItem - widthWrapGallery) ) {
            moovPos = 0;
            prew.classList.remove('activ-arrow');
        }
        galleryList.style.left = moovPos + 'px';
    }) 

    prew.addEventListener('click', function () {
        galleryList.style.position = 'relative';
        if (moovPos < 0) {
            moovPos += widthItem;
            galleryList.style.left = moovPos + 'px';
        }
        else {
            prew.classList.remove('activ-arrow');
        }
        
    }) 
    


    

}());
