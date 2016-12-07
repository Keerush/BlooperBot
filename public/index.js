const express = require('express')
let app = express()

let bot = require('./bot')

app.set('port', (process.env.PORT || 8080))

app.get('/', function(request, response) {
    response.send('Bloop!')
})

app.get('/wakemydyno.txt', (request, response) => {
  response.send('');
})

app.listen(app.get('port'), function() {
    console.log("blooperbot is running at:" + app.get('port'))
})
