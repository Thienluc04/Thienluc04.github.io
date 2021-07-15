
// Main
function  mouseoverMain() {
    document.querySelector('.header-main__dropdown-Main').classList.add('header-main__dropdown-show')
}

function mouseoutMain() {
    document.querySelector('.header-main__dropdown-Main').classList.remove('header-main__dropdown-show')
}

// Shop
function  mouseoverShop() {
    document.querySelector('.header-main__dropdown-Shop').classList.add('header-main__dropdown-show')
}

function mouseoutShop() {
    document.querySelector('.header-main__dropdown-Shop').classList.remove('header-main__dropdown-show')
}

// Product
function  mouseoverProduct() {
    document.querySelector('.header-main__dropdown-Product').classList.add('header-main__dropdown-show')
}

function mouseoutProduct() {
    document.querySelector('.header-main__dropdown-Product').classList.remove('header-main__dropdown-show')
}

// Pages
function  mouseoverPages() {
    document.querySelector('.header-main__dropdown-Pages').classList.add('header-main__dropdown-show')
}

function mouseoutPages() {
    document.querySelector('.header-main__dropdown-Pages').classList.remove('header-main__dropdown-show')
}

// Joumal
function  mouseoverJoumal() {
    document.querySelector('.header-main__dropdown-Joumal').classList.add('header-main__dropdown-show')
}

function mouseoutJoumal() {
    document.querySelector('.header-main__dropdown-Joumal').classList.remove('header-main__dropdown-show')
}

$('.slider-1').owlCarousel({
    loop:true,
    margin: 0,
    nav:true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 800,
    navText: ['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
    autoWidth: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.slider-2').owlCarousel({
    loop:true,
    margin: 0,
    nav:true,
    dots:false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 800,
    navText: ['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
    autoWidth: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// Scroll
window.onscroll = function() {showProduct()};

function showProduct() {
    var headerMain = document.querySelector('.header-main')
    var backTop = document.querySelector(".back-to-top")
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        var Product = document.querySelector(".container__product")

        Product.style.animation = 'toSlide linear 0.5s'
        headerMain.style.position = 'fixed'
        headerMain.style.top = 0
        headerMain.style.backgroundColor = '#fff'
        headerMain.style.boxShadow = '-2px 2px 45px -20px rgb(0 0 0 / 30%)'
        backTop.style.opacity = 1
    }else {
        headerMain.style.position = 'absolute'
        headerMain.style.top = 40 + 'px'
        headerMain.style.backgroundColor = 'transparent'
        headerMain.style.boxShadow = 'none'
        backTop.style.opacity = 0
    }

    if (document.body.scrollTop > 590 || document.documentElement.scrollTop > 590) {
        var Selling = document.querySelector(".container__selling")
        Selling.style.animation = 'toSlide linear 0.5s'
    } 

    if (document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700) {
        var Trending = document.querySelector(".container__trending")
        Trending.style.animation = 'toSlide linear 0.5s'
    } 

    if (document.body.scrollTop > 2350 || document.documentElement.scrollTop > 2350) {
        var Visit = document.querySelector(".container__visit")
        Visit.style.animation = 'toSlide linear 0.5s'
    } 
}