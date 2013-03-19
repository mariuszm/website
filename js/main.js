$(document).ready(function(){
    $('form#mailing').submit(function(){
        $.ajax({
            url: "http://spreadsheets.google.com/formResponse",
            data: { formkey: "1dzLvPECEiM_6-z0kjvJfwlACSaUKyc49z8vl7oBfd7g", "entry.1.single": 'abc', 'submit': 'Submit' },
            type: "POST",
            dataType: "xml",
            success: function(data, textStatus, XMLHttpRequest) {
                console.log("success");
                console.log(data);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log("error");
                console.log(textStatus);
            },
        });

        return false;
    });
});
