
$(document).ready(function () {
    window.addEventListener('scroll', function () {
        var Fixed = document.querySelector('.menu');
        Fixed.classList.toggle('fixed', window.scrollY > 0);
    })

});
$(document).ready(function () {
     $('.round').tilt({
        maxTilt: 10,
        perspective: 500
    }) 
})
window.addEventListener('load', function (e) {
    var text = document.querySelector('.print');
    var str = text.innerHTML;
    text.innerHTML = '';

    var i = 0;
    function print() {
        text.innerHTML += str.charAt(i);
        i++;
    }

    print()
    setInterval(print, 25);

});
// navigation menu
$('.menu-btn').click(function () {
    $(this).toggleClass("fal fa-times");
    $(".navigation-menuu").toggleClass("active");

});


$(window).scroll(function () {
    if ($(this).scrollTop() > 1200) {
        $('#top').fadeIn(500);
    }
    else {
        $('#top').fadeOut(500);
    }
})
$('#top').click(function () {
    $('html, body').animate({
        scrollTop: 0,
    }, 1800)
})

$(document).ready(function () {
    //  Skill Present

    $('.skill-value').each(function () {
        thisVal = $(this).text();
        $(this).parent('.skill-percent').animate({ width: thisVal }, 2000)
    });

    let $links = $('.navigation-menuu a');

    $links.click(function (e) {
        e.preventDefault();
        $links.removeClass('active')
        let $id = $(this).addClass('active').attr('href');
        let $target = $($id).offset().top - 60;

        $('html, body').animate({
            scrollTop: $target,
        }, 1000)
    })

    $(window).scroll(function () {
        let $scroll = $(this).scrollTop();

        $links.each(function () {
            let $id = $(this).attr('href');
            let $target = $($id).offset().top - 120;

            if ($scroll >= $target) {
                $links.removeClass('active');
                $(this).addClass('active')
            }
        })

    })
})
// Smart switcher Starting
 const dayNight = document.querySelector(".day-night");

 dayNight.addEventListener('click', () => {
    dayNight.querySelector("i").classList.toggle("fa-toggle-on");
    
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-toggle-on");
    }
    else {
        dayNight.querySelector("i").classList.add("fa-toggle-off");
    } 
}) 

let darkMode = localStorage.getItem('darkMode');
const darkmodetoggle = document.querySelector('.day-night');

const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode" , "enabled");
}
const disabledDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode" , null);
}

if(darkMode === "enabled"){
    enableDarkMode();
}

darkmodetoggle.addEventListener('click', () =>{
    darkMode = localStorage.getItem("darkMode");
    if(darkMode !== "enabled"){
        enableDarkMode();
    }
    else{
        disabledDarkMode();
    }
    
})
