const Discord = require('discordie')
const express = require('express')

const Events = Discord.Events
const client = new Discord()

let app = express()

client.connect({
    token: 'MjU1NTUzMDg5MjI5MDI5Mzc2.CyfVrg.GezvzdFXjqOAtC8r0-BmlBPqLP8'
})

client.Dispatcher.on(Events.GATEWAY_READY, e => {
    console.log('Connected as: ' + client.User.username)
})

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
    if (e.message.content == "ping")
        e.message.channel.sendMessage("pong")
})

app.set('port', (process.env.PORT || 8080))

app.get('/', function(request, response) {
    response.send('Bloop!')
})

app.listen(app.get('port'), function() {
    console.log("blooperbot is running at:" + app.get('port'))
})
