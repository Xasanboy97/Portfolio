$(document).ready(function () {
    $(function () {
        $('#carousel').elastislide();
    })


    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#top').fadeIn(500);
        }
        else {
            $('#top').fadeOut(500);
        }
    })
    $('#top').click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 1000)
    })

    let $links = $('nav ul li a');

    $links.click(function (e) {
        e.preventDefault();
        $links.removeClass('active')
        let $id = $(this).addClass('active').attr('href');
        let $target = $($id).offset().top - 90;

        $('html, body').animate({
            scrollTop: $target,
        }, 2000)
    })

    $(window).scroll(function () {
        let $scroll = $(this).scrollTop();

        $links.each(function () {
            let $id = $(this).attr('href');
            let $target = $($id).offset().top - 150;

            if ($scroll >= $target) {
                $links.removeClass('active');
                $(this).addClass('active')
            }
        })
    })
    
});



