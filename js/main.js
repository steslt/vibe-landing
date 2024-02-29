(function () {

    // // burger

    const navigationAnimation = document.getElementById('top-navigation-animation')
    const navigationTel = document.getElementById('top-navigation-tel')
    const navigationList = document.getElementById('top-navigation-list')
    const navigationIcon = document.getElementById('burger-icon')
    
    
    navigationIcon.onclick = openBurger

    function openBurger() {
        navigationIcon.classList.toggle('burger--opened')
        navigationAnimation.classList.toggle('burger--opened')
        navigationTel.classList.toggle('burger--opened')
        navigationList.classList.toggle('burger--opened')
    }
    
    document.getElementById('navigation-link1').onclick = closeBurger
    document.getElementById('navigation-link2').onclick = closeBurger
    document.getElementById('navigation-link3').onclick = closeBurger
    document.getElementById('navigation-link4').onclick = closeBurger

    function closeBurger(){
        navigationIcon.classList.toggle('burger--opened')
        navigationAnimation.classList.toggle('burger--opened')
        navigationTel.classList.toggle('burger--opened')
        navigationList.classList.toggle('burger--opened')
    }


    new Swiper('.video__titles-slider', {

        navigation: {
            nextEl: '.titles__slider-next',
            prevEl: '.titles__slider-prev',
        },

    });


    new Swiper('.video__main-slider', {

        pagination: {
            el: '.main__slider-pagination',
            type: 'fraction'
        },

        navigation: {
            nextEl: '.main__slider-next',
            prevEl: '.main__slider-prev',
        },

    });
    new Swiper('.video__inner-slider', {
        direction: 'vertical',
        loop: true,
        autoplay: {
            delay: 3000,
        },

        pagination: {
            el: '.inner__slider-pagination',
            clickable: true,
        },

    });


    //change proffession in slider

    const sliderProfessionOne = document.getElementById('slider-profession-1')
    const sliderProfessionTwo = document.getElementById('slider-profession-2')
    const sliderProfessionThree = document.getElementById('slider-profession-3')
    const sliderProfessionFour = document.getElementById('slider-profession-4')

    const sliderHtmlCollection = document.getElementsByClassName('main__slider-slide')

    const mainSlider = document.getElementById('main-slider-control')
    const mainSliderPrev = document.getElementById('main-slider-prev')
    const mainSliderNext = document.getElementById('main-slider-next')
    mainSlider.addEventListener("mousemove", showProfession, false)
    mainSliderPrev.addEventListener("click", showProfession)
    mainSliderNext.addEventListener("click", showProfession, false)

    function showProfession() {
        if (sliderHtmlCollection[0].classList.contains('swiper-slide-active')) {
            sliderProfessionOne.classList.add('slider__inner-profession-active')
        } else {
            sliderProfessionOne.classList.remove('slider__inner-profession-active')
        }
        if (sliderHtmlCollection[1].classList.contains('swiper-slide-active')) {
            sliderProfessionTwo.classList.add('slider__inner-profession-active')
        } else {
            sliderProfessionTwo.classList.remove('slider__inner-profession-active')
        }
        if (sliderHtmlCollection[2].classList.contains('swiper-slide-active')) {
            sliderProfessionThree.classList.add('slider__inner-profession-active')
        } else {
            sliderProfessionThree.classList.remove('slider__inner-profession-active')
        }
        if (sliderHtmlCollection[3].classList.contains('swiper-slide-active')) {
            sliderProfessionFour.classList.add('slider__inner-profession-active')
        } else {
            sliderProfessionFour.classList.remove('slider__inner-profession-active')
        }
    }


    new Swiper('.section-testimonials__comparison-slider', {

        navigation: {
            nextEl: '.section-testimonials__comparison-next',
            prevEl: '.section-testimonials__comparison-prev',
        },

    });





    new Swiper('.section-testimonials__slider-phone', {
        loop: true,
        centered: true,

        navigation: {
            nextEl: '.section-testimonials__slider-phone-next',
            prevEl: '.section-testimonials__slider-phone-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 200
            },
            // when window width is >= 480px
            500: {
                spaceBetween: -200
            },
        }
    });


    // hover effects for testimonials title

    const hoverTestimonialSliderLeft = document.getElementById('slide-video')
    const hoverTestimonialTitleLeft = document.getElementById('left-title')
    const hoverTestimonialBorderLeft = document.getElementById('left-border')

    hoverTestimonialSliderLeft.addEventListener('mouseover', function () {

        hoverTestimonialTitleLeft.classList.add('accent-title')
        hoverTestimonialBorderLeft.classList.add('accent-border')
    })

    hoverTestimonialSliderLeft.addEventListener('mouseout', function () {

        hoverTestimonialTitleLeft.classList.remove('accent-title')
        hoverTestimonialBorderLeft.classList.remove('accent-border')
    })


    const hoverTestimonialSliderRight = document.getElementById('slide-phone')
    const hoverTestimonialTitleRight = document.getElementById('right-title')
    const hoverTestimonialBorderRight = document.getElementById('right-border')

    hoverTestimonialSliderRight.addEventListener('mouseover', function () {
        hoverTestimonialTitleRight.classList.add('accent-title')
        hoverTestimonialBorderRight.classList.add('accent-border')

    })

    hoverTestimonialSliderRight.addEventListener('mouseout', function () {

        hoverTestimonialTitleRight.classList.remove('accent-title')
        hoverTestimonialBorderRight.classList.remove('accent-border')
    })




    // accordion 

    const accordionBtns = document.querySelectorAll(".section-testimonials__accordion-button");

    accordionBtns.forEach((accordion) => {
        accordion.onclick = function () {
            this.classList.toggle("is-open");

            let content = this.nextElementSibling;

            if (content.style.maxHeight) {
                //this is if the accordion is open
                content.style.maxHeight = null;
            } else {
                //if the accordion is currently closed
                content.style.maxHeight = content.scrollHeight + "px";

            }
        };
    });





    // custom audio

    var audio = document.getElementById("audio-left"),
        audioRight = document.getElementById("audio-right"),
        playButtonLeft = document.querySelector("#audio-play-left"),
        playButtonRight = document.querySelector("#audio-play-right"),
        progress = document.querySelector("#audio-playbar");
    progressRight = document.querySelector("#audio-playbar-right");

    const playLeft = () => {
        if (audio.paused) {
            playButtonLeft.classList.add("paused");
            audio.play();
        } else {
            playButtonLeft.classList.remove("paused");
            audio.pause();
        }
    };
    const playRight = () => {
        if (audioRight.paused) {
            playButtonRight.classList.add("paused");
            audioRight.play();
        } else {
            playButtonRight.classList.remove("paused");
            audioRight.pause();
        }
    };



    audio.addEventListener("timeupdate", (e) => {
        progress.value = (e.target.currentTime / e.target.duration) * 100;
        if (e.target.currentTime / e.target.duration === 1) {
            play();
            audio.currentTime = 0;
        }
    });

    audioRight.addEventListener("timeupdate", (e) => {
        progressRight.value = (e.target.currentTime / e.target.duration) * 100;
        if (e.target.currentTime / e.target.duration === 1) {
            play();
            audioRight.currentTime = 0;
        }
    });


    playButtonLeft.addEventListener("click", playLeft);
    playButtonRight.addEventListener("click", playRight);




    // modal 
    const modalWindow = document.getElementById('modal')

    document.getElementById('modal-1').onclick = openModal
    document.getElementById('modal-2').onclick = openModal
    document.getElementById('modal-3').onclick = openModal
    document.getElementById('modal-4').onclick = openModal
    document.getElementById('modal-5').onclick = openModal
    document.getElementById('modal-6').onclick = openModal
    document.getElementById('modal-7').onclick = openModal
    document.getElementById('modal-8').onclick = openModal
    document.getElementById('modal-9').onclick = openModal
    document.getElementById('modal-10').onclick = openModal
    document.getElementById('modal-11').onclick = openModal
    document.getElementById('modal-12').onclick = openModal
    document.getElementById('modal-13').onclick = openModal
    document.getElementById('modal-14').onclick = openModal
    document.getElementById('modal-15').onclick = openModal

    function openModal() {
        modalWindow.classList.toggle('modal--opened')
    }


    modalWindow.addEventListener('click', closeModal)

    function closeModal(e) {

        const target = e.target
        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            modalWindow.classList.remove('modal--opened')
        }
    }




    // Telephone input mask

    const telInputs = document.querySelectorAll('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInputs)
})();



