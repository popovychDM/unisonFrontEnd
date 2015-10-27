ngApp.directive('marketProducts', function ($compile, ajaxSvc) {

    var url = "http://192.168.50.56:8080/ords/virtualbranch_ws/interface/KeyAdvantages/1";
    //var url = "http://192.168.50.56:8080/ords/virtualbranch_ws/interface/SliderBlock/1";
    //var url = "http://192.168.50.56:8080/ords/virtualbranch_ws/interface/QuickMenu/1";

    var templateUrl = "js/partials/dir-tmpl/key-advantage-tmpl.html";
    var template;

    $(".slider-main-item.item-anim")
        .mousemove(function(e) {
            var _thisW = $(this).width();
            var _coord = parseFloat(-((_thisW - e.clientX)/_thisW * 100 / 10));
            $(this).find(".bg-img").css('left',_coord+'%')
        });

    $(".main-slider-block").height($(window).height() - 160);
    //$(".needs-main-block").height($(window).height() - 160);
    //
    $(".slider-main .slider-main-item").height($(window).height() - 160);

    $('.slider-main').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
    });

    $('.spec-offer-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
    });


    function link(scope, element, attrs) {

        ajaxSvc.getData(templateUrl)

            .then(function(response) {
            template = response.data;
            })

            .then(function() {
            ajaxSvc.getData(url)
                .then(function(response) {
                    scope.marketData = response.data;
                    console.log('Advantages obj is:', scope.marketData);
                },
                function(response) {
                    console.log('Some error happened: ', response);
                })

            .then(function() {
                element.html(template).show();

                setTimeout(function(){
                    $(".key-advantage .container .text").each(function( i ) {
                        var _parentH = $(this).parent().innerHeight();
                        var _thisH = $(this).innerHeight();

                        var _padding = (_parentH - _thisH)/2;
                        $(this).css("padding-top", _padding);
                    });
                },500);

                setTimeout(function(){
                    $('.key-advantage .text').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
                        if (isInView) {
                            $(this).addClass('animated');
                        }
                    });
                    $('.key-advantage .img').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
                        if (isInView) {
                            $(this).addClass('animated');
                        }
                    });

                },1);

                $compile(element.contents())(scope);
            });
        });
    }

    return {
        restrict: 'E',
        link: link,
        //scope: {},
        //templateUrl: 'js/partials/key-advantage-tmpl.html',
        replace: true
    };
});


