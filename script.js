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
        offset: 140,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 35) {
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

    displayExchange();
    
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
        
        let base = $('#base-currency').val().toUpperCase();
        let compare = $('#comparison-currency').val().toUpperCase();

        if (base && compare){
            let sendUrl = "https://api.currencyscoop.com/v1/latest?api_key=c0cacb4ed9e4dbb1c7a52f7a5883ba85&base="+ base + "&symbols=" + compare;
        
            var settings = {
            "url": sendUrl,
            "method": "GET"
            }
        }else{
            $("#containerForChart").replaceWith('<div id="containerForChart" class="m-5" style="color:darkred">Something went wrong. Did you input the correct ISO 4217 currency codes? Refer to <a href="https://currencyscoop.com/supported-currencies">this</a> for all ISO 4217 currency codes that this website supports.</div>');
        }
        
        

        $.ajax(settings).done(function (data){
            

            if ((data.response.rates[Object.keys(data.response.rates)[0]] == 0) ||
             (data.response.rates[Object.keys(data.response.rates)[0]] == null)) {
                $("#containerForChart").replaceWith('<div id="containerForChart" class="m-5" style="color:darkred">Something went wrong. Did you input the correct ISO 4217 currency codes? Refer to <a href="https://currencyscoop.com/supported-currencies">this</a> for all ISO 4217 currency codes that this website supports.</div>');

            }else{
                let cValue = data.response.rates[Object.keys(data.response.rates)[0]];
                
                console.log("comparison: " + cValue);
                let cList = [];
                if (localStorage.getItem('cList')) {
                    cList = JSON.parse(localStorage.getItem('cList'));
                }
                let cNumber = cList.length + 1;
                let compareItem = new Compare(cNumber, base, compare, cValue);

                cList.push(compareItem);

                localStorage.setItem('cList', JSON.stringify(cList));

                displayExchange();


                chart = new Highcharts.chart('containerForChart',{
                    chart: {
                        type: 'column'
                    },
                    title : {
                        text: 'Visualisation'
                    },
                    subtitle: {
                        text: 'Base currency has a value of 1'
                    },
                    xAxis: {
                        categories: [
                            "Compare"
                        ],
                        crosshair: true
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Exchange rate value'
                        }
                    },
                    tooltip: {
                        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                            '<td style="padding:0"><b>{point.y:.3f}</b></td></tr>',
                        footerFormat: '</table>',
                        shared: true,
                        useHTML: true
                    },
                    plotOptions: {
                        column: {
                            pointPadding: 0.2,
                            borderWidth: 0
                        }
                    },
                    series: [{
                        name: data.response[Object.keys(data.response)[1]],
                        data: [1],
                        color: "black"
                
                    }, {
                        name: Object.keys(data.response.rates)[0],
                        data: [data.response.rates[Object.keys(data.response.rates)[0]]],
                        color: "goldenrod"
                
                    }]
                })
            }
        })                
    });
})

function Compare(cNumber, base, compare, cValue){
    this.cNum = cNumber;
    this.b = base;
    this.c = compare;
    this.cVal = cValue;
}

function displayExchange(){
    let compareInfo = "";
    if (localStorage.getItem('cList')) {
        let cList = JSON.parse(localStorage.getItem('cList'));
    
        if (cList.length) {
          for (let compare of cList) {
            compareInfo += `<tr><td>${compare.cNum}</td><td>${compare.b}</td><td>${compare.c}</td><td>${compare.cVal}</td></tr>`;
          }
    
          $('#comparison-info').html(compareInfo);
        } else {
          $('#comparison-info').html('No records found');
        }
    }

}

Highcharts.chart('containerForChart',{
    chart: {
        type: 'column'
    },
    title : {
        text: 'Visualisation'
    },
    subtitle: {
        text: 'Base currency has a value of 1'
    },
    xAxis: {
        categories: [
            "Compare"
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Exchange rate value'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.3f} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: "Base",
        data: [0],
        color: "black"

    }, {
        name: "Other",
        data: [0],
        color: "goldenrod"

    }]
})
            
