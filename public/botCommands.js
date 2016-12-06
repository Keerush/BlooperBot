module.exports = (message) => {
    switch (message.content) {
        // test command
        case "bloop":
            message.channel.sendMessage("Bloop!")
            break;
    }
}
