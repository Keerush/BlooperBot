const Discord = require('discordie')
const config = require('../config')
const botCommands = require('./botCommands')

const Events = Discord.Events
const client = new Discord()

client.connect({
    token: config.botToken
})

client.Dispatcher.on(Events.GATEWAY_READY, e => {
    console.log('Connected as: ' + client.User.username)
    botCommands.loadImages()
})

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
    if (e.message.author.username != client.User.username) {
        botCommands.cmd(e.message)
    }
})
