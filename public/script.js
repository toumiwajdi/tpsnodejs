
$(function () {
    /*$.ajax({
        url: 'http://localhost:8080/quotes',
        type: "GET",
        dataType: "json",
        data: {
        },
        success: function (result) {
            result.forEach(function (value) {
                console.log(value);
                $(".quotes").append("<LI>"+value+"</LI>");
            })
        },
        error: function (err) {
            console.log(err);
        }
    });*/
    $.get('/quotes',appendToList);
    function appendToList(quotes) {
        var list=[];
        for (var i in quotes){
            list.push($('<li>',{text:quotes[i]}));
        }
        $(".quotes").append(list);

    }
    $('form').on('submit', function(event) {
        event.preventDefault();
        var form = $(this);
        var quoteData = form.serialize();

        $.ajax({
            type: 'POST',
            url: '/quotes',
            data: quoteData
        }).done(function(quoteName){
            appendToList([quoteName]);
            form.trigger('reset');
        });
    });

});
