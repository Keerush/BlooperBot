const express = require('express')
let app = express()

app.set('port', (process.env.PORT || 8080))

app.get('/', function(request, response) {
    response.send('Bloop!')
})

app.listen(app.get('port'), function() {
    console.log("blooperbot is running at:" + app.get('port'))
})
