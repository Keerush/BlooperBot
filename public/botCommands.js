const fs = require('fs')
const config = require('../config')
const request = require('request')

var images = []

module.exports = {
    'cmd': (message) => {
        var slashCmd = /\/([^\s]+)/g
        let content = message.content
        let channel = message.channel

        if (content.toLowerCase() == 'bloop') {
            channel.sendMessage("bloop!")
        } else if (content.toLowerCase() == 'cats') {
            let uri = 'http://thecatapi.com/api/images/get?format=src&type=png';
            request.head(uri, (err, res, body) => {
              channel.sendMessage(res.request.uri.href);
            })
        } else if (content.match(slashCmd)) {
            content.match(slashCmd).forEach((cmd) => {
                // check if its an emoji cmd
                if (images.indexOf(cmd.replace('/', '')) != -1) {
                    channel.uploadFile(fs.readFileSync(config.emojiLocation + cmd + '.png'), cmd + '.png');
                }
            })
        }
    },
    loadImages: () => {
        console.log('Loading emoji list found in ' + config.emojiLocation + '....')
        images = fs.readdirSync(config.emojiLocation)
        images = images.map(x => x.replace(/\..*/g, ''))
        console.log('Emojis list loaded.')
    }
}
