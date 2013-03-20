$(document).ready(function(){
    $('form#mailing').submit(function(){
        var email = $(this).find('input[name=email]').val();
        $.ajax({
            url: "/api/subscribe/add",
            data: { email: email },
            type: "POST",
            dataType: "json",
            success: function(data, textStatus, XMLHttpRequest) {
                $('#mailing').html('<p>Thanks for your interest. We will inform you about details soon.</p>');
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $('#mailing').html('<p><a href="http://www.youtube.com/watch?v=y8Kyi0WNg40">Something\'s gone terribly wrong</a><p>');
            }
        });

        return false;
    });
});
