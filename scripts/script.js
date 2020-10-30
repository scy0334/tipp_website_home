let played = 0;
function videoloaded(m){
    if(played >= m-1){
        console.log('load!')
        $(".load_modal").css('animation','start_modal 0.5s linear both 0.6s');
        $(".load_modal").find('.logo').css('animation','start_modal_logo 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both')
        setTimeout(() => {
            $(".load_modal").css('display','none');
        }, 2000);
    }else{
        played++
    }
}

$(document).ready(function () {
    for(i=0; i<$('video').length; i++){
        $($('video')[i]).on('loadeddata',(e)=>{
            videoloaded($('video').length)
        })
        $('video')[i].play()
    }
    // $(".owl-carousel").owlCarousel({
    //     loop:true,
    //     margin:220,
    //     autoHeight:true,
    //     //stagePadding: -80,
    //     autoplay: true,
    //     slideTransition: 'linear',
    //     autoplaySpeed: 9000,
    //     smartSpeed: 9000,
    //     autoplayHoverPause: false,
    //     nav:false,
    //     responsiveClass:true,
    //     responsiveBaseElement:'.page2',
    //     responsive:{
    //         0:{
    //             items:7
    //         },
    //         450:{
    //             items:7,
    //         },
    //         700:{
    //             margin:-100,
    //             itmes:7,
    //         },
    //         900:{
    //             margin:230,
    //             items:7,
    //         },
    //         1100:{
    //             margin:240,
    //             items:7,
    //         },
    //         1200:{
    //             margin:220,
    //             items:7,
    //         },
    //         1300:{
    //             margin:200,
    //             items:7,
    //         },
    //         1400:{
    //             margin:200,
    //             items:7
    //         }
    //     }
    // }).trigger("play.owl.autoplay");

    $("#contact_bt").click(()=>{
            var text = "contact@tippcorp.com"
            var elem = document.createElement("textarea");
            document.body.appendChild(elem);
            elem.value = text;
            elem.select();
            document.execCommand("copy");
            document.body.removeChild(elem);
            alert('복사되었습니다')
    })

    $("#contact_bt2").click(()=>{
            var text = "contact@tippcorp.com"
            var elem = document.createElement("textarea");
            document.body.appendChild(elem);
            elem.value = text;
            elem.select();
            document.execCommand("copy");
            document.body.removeChild(elem);
            alert('복사되었습니다')
    })

    jQuery.get('terms_of_use.txt', function(data) {
        $('#terms-of-use-text').html(data)
     });

    jQuery.get('privacy_policy.txt', function(data) {
        $('#privacy-policy-text').html(data)
    });

    $('#terms-of-use').click(()=>{
        $('.page4').hide()
        $('.footer').hide()
        $('.page1-moblie').hide()
        $('.page1').hide()
        $('.page3').show()
        var offset = $("#terms").offset();
        $('html, body').animate({scrollTop : offset.top}, 400);
    })

    $('#privacy-policy').click(()=>{
        $('.page3').hide()
        $('.footer').hide()
        $('.page1-moblie').hide()
        $('.page1').hide()
        $('.page4').show()
        var offset = $("#privacy").offset();
        $('html, body').animate({scrollTop : offset.top}, 400);
    })

    $('#home').click(()=>{
        var offset
        if($(window).width() > 767) {
            $('.page1-moblie').hide()
            $('.page1').show()
            offset = $(".page1").offset();
        }else if($(window).width() < 767){
            $('.page1-moblie').show()
            $('.page1').hide()
            offset = $(".page1-moblie").offset();
        }
        $('html, body').animate({scrollTop : 0}, {duration:400, complete: ()=>{
            $('.page3').hide()
            $('.page4').hide()
            $('.footer').show()
        }});
    })

    $('.close').click(()=>{
        var offset
        if($(window).width() > 767) {
            $('.page1-moblie').hide()
            $('.page1').show()
            offset = $(".page1").offset();
        }else if($(window).width() < 767){
            $('.page1-moblie').show()
            $('.page1').hide()
            offset = $(".page1-moblie").offset();
        }
        $('html, body').animate({scrollTop : 0}, {duration:400, complete: ()=>{
            $('.page3').hide()
            $('.page4').hide()
            $('.footer').show()
        }});
    })

    $('.page3').hide()
    $('.page4').hide()
    $(window).resize(()=>{
        if($(window).width() > 767) {
            $('.page1-moblie,.footer-desc-mobile,.contact-mobile').hide()
            $('.page1,.footer-desc').show()
        }else if($(window).width() < 767){
            $('.page1,.footer-desc').hide()
            $('.page1-moblie,.footer-desc-mobile,.contact-mobile').show()
        }
    });

    if($(window).width() > 767) {
        $('.page1,.footer-desc').show()
        $('.page1-moblie,.footer-desc-mobile,.contact-mobile').hide()
    }else if($(window).width() < 767){
        $('.page1-moblie,.footer-desc-mobile,.contact-mobile').show()
        $('.page1,.footer-desc').hide()
    }
})

