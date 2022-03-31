$( document ).ready(function() {
    var folder = "./img/slider";

$.ajax({
    url : folder,
    type: 'Get',
    success: function (data) {
        debugger
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                $("body").append( "<img src='"+ folder + val +"'>" );
            } 
        });
    }
});
});