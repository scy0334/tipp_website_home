$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:0,
        stagePadding: -80,
        autoplay: true,
        slideTransition: 'linear',
        autoplaySpeed: 3000,
        autoplayHoverPause: false,
        nav:false,
        responsive:{
            450:{
                items:3,
            },
            768:{
                items:4,
            },
            1024:{
                items:7,
            }
        }
    }).trigger("play.owl.autoplay");

    $("#contact_bt").click(()=>{
        console.log("fdasf")
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
        console.log("fdasf")
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
        // var lines = data.split("\n");

        // $.each(lines, function (n, elem) {
        //     $('#terms-of-use-text').append('<div>' + elem + '</div>');
        // });
        $('#terms-of-use.txt').html(data)
     });

     jQuery.get('privacy_policy.txt', function(data) {
        $('#privacy-policy-text').html(data)
     });
    $('#terms-of-use').click(()=>{
        $('.page4').hide()
        $('.footer').hide()
        $('.page3').show()
        var offset = $("#terms").offset();
        $('html, body').animate({scrollTop : offset.top}, 400);
    })

    $('#privacy-policy').click(()=>{
        $('.page3').hide()
        $('.footer').hide()
        $('.page4').show()
        var offset = $("#privacy").offset();
        $('html, body').animate({scrollTop : offset.top}, 400);
    })

    $('#home').click(()=>{
        var offset = $(".page1").offset();
        $('html, body').animate({scrollTop : offset.top}, {duration:400, complete: ()=>{
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
        $('.page1-moblie,.footer-desc-mobile,.contact-mobile').hide()
        $('.page1,.footer-desc,.contact-mobile').show()
    }else if($(window).width() < 767){
        $('.page1,.footer-desc').hide()
        $('.page1-moblie,.footer-desc-mobile,.contact-mobile').show()
    }

})

setTimeout(() => {
    $(".load_modal").css('display','none');
}, 1000);
