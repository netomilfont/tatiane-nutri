$(document).ready(function(){
    $('#menu-btn').on('click', function() {
        $('#menu-mobile').toggleClass('active')
        $('#menu-btn').find('i').toggleClass('fa-xmark')
    })

    $('.nav-items').on('click', function() {
        $('#menu-mobile').removeClass('active')
        $('#menu-btn').find('i').removeClass('fa-xmark')
        $('#menu-btn').find('i').addClass('fa-solid fa-bars')
    })

    const scrollPositionInicial = $(window).scrollTop()
    
    
    const sections = $('section')
    const navItems = $('.nav-items')

    if (scrollPositionInicial == 0) {
        $(navItems[0]).addClass('active')
    }

    $(window).on('scroll', function() {
        const header = $('header')
        const scrollPosition = $(window).scrollTop()
        
        let activeSectionIndex = 0

        if(scrollPosition <= 0) {
            header.css('box-shadow', 'none')
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)')
        }

        sections.each(function(i) {
            const section = $(this)
            const sectionTop = section.offset().top - 150
            const sectionBottom = sectionTop + section.outerHeight()

            if(scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i
                return false
            }
        })

        navItems.removeClass('active')
        $(navItems[activeSectionIndex]).addClass('active')
    })
    

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
        reset: true
    })

    ScrollReveal().reveal('#banner', {
        origin: 'right',
        duration: 2000,
        distance: '20%',
        reset: true
    })

    ScrollReveal().reveal('.specialties-option-one', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
        reset: true
    })

    ScrollReveal().reveal('.specialties-option-two', {
        origin: 'right',
        duration: 2000,
        distance: '20%',
        reset: true
    })

    ScrollReveal().reveal('#testimonials-tatiane', {
        origin: 'left',
        duration: 1000,
        distance: '20%',
        reset: true
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%',
        reset: true
    })

    ScrollReveal().reveal('.contact-map-box', {
        origin: 'left',
        duration: 1000,
        distance: '20%',
        reset: true
    })

    ScrollReveal().reveal('.contact-box', {
        origin: 'right',
        duration: 1000,
        distance: '20%',
        reset: true
    })

    ScrollReveal().reveal('.counseling-info', {
        origin: 'left',
        duration: 1000,
        distance: '20%',
        reset: true
    })
    
    ScrollReveal().reveal('.counseling-img', {
        origin: 'right',
        duration: 1000,
        distance: '20%',
        reset: true
    })

    ScrollReveal().reveal('.about-content', {
        origin: 'bottom',
        duration: 1000,
        distance: '20%',
        reset: true
    })

    ScrollReveal().reveal('.about-buttons', {
        origin: 'right',
        duration: 2000,
        distance: '20%',
        reset: true
    })

    ScrollReveal().reveal('.about-text-one', {
        origin: 'bottom',
        duration: 2000,
        distance: '20%',
        reset: true
    })

})