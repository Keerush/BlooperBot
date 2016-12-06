const Discord = require('discordie')
const config = require('../config')

const Events = Discord.Events
const client = new Discord()

client.connect({
    token: config.botToken
})

client.Dispatcher.on(Events.GATEWAY_READY, e => {
    console.log('Connected as: ' + client.User.username)
})

// test command
client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
    if (e.message.content == "ping")
        e.message.channel.sendMessage("pong")
})
