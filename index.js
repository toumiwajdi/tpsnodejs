var express = require('express');
var app = express();


var quotes= [
    {author: "Wajdi", text: "Life like nothing"},
    {author: "Einstein", text: "Life like everything"},

];

app.get('/quote/:name', function (request,response) {
    var quote=quotes[request.params.name];
    response.render('quote.ejs',{
        name:request.params.name,
        quote:quote
    })
});
app.get('/quotes', function (request,response) {
    response.render('all_quotes.ejs',{
        quotes:quotes
    })
});
app.get('/',function (request,response) {
    response.redirect(301,'/quotes');

})
app.listen(8080);