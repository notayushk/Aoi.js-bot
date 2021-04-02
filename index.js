const dbd = require("dbd.js")
const bot = new dbd.Bot({
     token: "",
     prefix: ""
})
bot.loadCommands('./Commmands/')
