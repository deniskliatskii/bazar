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
    


    // var expandBtn = document.querySelector('.expand-btn');

    // expandBtn.addEventListener('click', function () {
    //     var atrSrc = document.querySelector('.gallery-prewiew').firstElementChild.getAttribute('src');
    //     // console.log(atributImg);
    //     var modalImg = document.createElement('img');
    //     modalImg.src = atrSrc;
    //     document.body.appendChild(modalImg);
    //     modalImg.classList.add('modal-images');
        
    //     var overlay = document.createElement('div');
    //     document.body.appendChild(overlay);
    //     overlay.classList.add('modal-overlay');


        
    //     overlay.addEventListener('click', function () {
    //         overlay.remove();
    //         modalImg.remove();
    //     })
    // })

}());
