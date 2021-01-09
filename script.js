/*!
    * Start Bootstrap - Grayscale v6.0.3 (https://startbootstrap.com/theme/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
    */
   (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

$(document).ready(function() {
    $("#convertcurrency").submit(function(e){
        e.preventDefault();

        let convertFrom = $('#cfrom').val();
        let convertTo = $('#cto').val();
        let amount = $('#amount').val();

        let sendUrl = "https://api.currencyscoop.com/v1/convert?api_key=c0cacb4ed9e4dbb1c7a52f7a5883ba85&base="
         + convertFrom + "&to=" + convertTo + "&amount=" + amount;
        
        var settings = {
            "url": sendUrl,
            "method": "GET"
        };

        $.ajax(settings).done(function (data){
            console.log(data);
            console.log("Value: " + data.response.value);

            $('#val').text(data.response.value.toFixed(2) + " " + data.response.to);
        })
    })

    $("#comparison").submit(function(e){
        e.preventDefault();

        let base = $('#base-currency').val();
        let compare = $('#comparison-currency').val();
        
        let sendUrl = "https://api.currencyscoop.com/v1/latest?api_key=c0cacb4ed9e4dbb1c7a52f7a5883ba85&base="+ base + "&symbols=" + compare;
        
        var settings = {
            "url": sendUrl,
            "method": "GET"
        }

        $.ajax(settings).done(function (data){
            console.log(data);

            if (data.response.rates[Object.keys(data.response.rates)[0]] == 0){
                console.log("fail!!!!!!");
            }else{
                console.log("comparison: " + data.response.rates[Object.keys(data.response.rates)[0]]);
            }
        })
    })
})