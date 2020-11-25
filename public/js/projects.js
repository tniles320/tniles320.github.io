if(document.getElementById("healthapp-link") !== null){
    document.getElementById("healthapp-link").addEventListener("click", function() {
        window.open("https://github.com/tniles320/healthapp", "_blank");
    });
};

if(document.getElementById("weather-dashboard-link") !== null){
    document.getElementById("weather-dashboard-link").addEventListener("click", function() {
        window.open("https://github.com/tniles320/weather-dashboard", "_blank");
    });
};

if(document.getElementById("day-scheduler-link") !== null){
    document.getElementById("day-scheduler-link").addEventListener("click", function() {
        window.open("https://tniles320.github.io/day-scheduler", "_blank");
    });
};

if(document.getElementById("bindrr-link") !== null){
    document.getElementById("bindrr-link").addEventListener("click", function() {
        window.open("https://github.com/tniles320/bindrr", "_blank");
    });
};

(function($) {
    const $window = $(window),
        $text = $('.web-text');

    function resize() {
        if ($window.width() < 576) {
            return $text.removeClass('col-5');
        }
    }
    function resize() {
        if ($window.width() > 576) {
            return $text.addClass('col-5');
        }
    }
    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);
