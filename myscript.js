$(function(){
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top >= 500){
            $('.go-up').slideDown(500);
        }else{
            $('.go-up').slideUp(500);
        }
    });

    $('.go-up').click(function(){
        $(window).scrollTop(0);
    });

    $('.bar').click(function(){
        $(this).toggleClass('active');
        $('#nav').toggleClass('movement');
    });

    $('#email').keyup(function(){
        var email = $('#email').val();
        if(isValidEmail(email)){
            $('#email').removeClass('is-invalid').addClass('is-valid');
        }else{
            $('#email').removeClass('is-valid').addClass('is-invalid');
        }
    });
    $('#subject').keyup(function(){
        var subject = $('#subject').val();
        if(subject.length <= 100){
            $('#subject').removeClass('is-invalid').addClass('is-valid');
        }else{
            $('#subject').removeClass('is-valid').addClass('is-invalid');
        }
    });
    
});

function isValidEmail(param){
    if(param.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        return true;
    }else{
        return false;
    }
}
