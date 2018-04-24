var express = require('express');
var app = express();
app.get('/',function (request,response) {
    response.sendFile(__dirname +  "/index.html");
});

var quotes= {
    'einstein' : 'Life is like riding a bicycle.',
    'Wajdi' : 'Life like nothing',
}

app.get('/quote/:name', function (request,response) {
    var quote=quotes[request.params.name];
    response.render('quote.ejs',{
        name:request.params.name,
        quote:quote
    })
})
app.listen(8080);