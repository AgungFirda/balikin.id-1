(function ($) {
    $(function () {

        $('.button-collapse').sideNav();
        $('.parallax').parallax();

    }); // end of document ready

    var options = [
        {selector: '#coba', offset: 200, callback: 'Materialize.fadeInImage("#coba")'}
    ];
    Materialize.scrollFire(options);

    $(document).ready(function(){
        $('.slider').slider({full_width: true});
    });

})(jQuery); // end of jQuery name space