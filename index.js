var Discord = require('discordie')

const Events = Discord.Events
const client = new Discord()

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