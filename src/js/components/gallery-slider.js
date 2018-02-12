$(document).ready(function () {
    // $('.gallery-slider').slick({
        
    // });

    

     $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
         tLoading: 'image upload #%curr%...',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });
});