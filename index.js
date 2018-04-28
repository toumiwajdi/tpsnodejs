var express = require('express');
var app = express();

app.use(express.static('public'));
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });


var quotes= {
    "Wajdi": "Life like nothing",
    "Einstein": "Life like everything"
};

app.get('/quote/:name', function (request,response) {
    var quote=quotes[request.params.name];
    response.render('quote.ejs',{
        name:request.params.name,
        quote:quote
    })
});

app.get('/quotes', function (request,response) {
    response.json(quotes);
});
/*app.get('/',function (request,response) {
    response.redirect(301,'/quotes');

});*/
app.post('/quotes',parseUrlencoded,function (request,response) {
    var newQuote = request.body;
    quotes[newQuote.author]=newQuote.textQuote;
    response.status(201).json(newQuote.textQuote);
})

app.listen(8080);