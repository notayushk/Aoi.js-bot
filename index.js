const aoi = require("aoi.js")
const bot = new aoi.Bot({
     token: "",
     prefix: ""
})
bot.onMessage({
  guildOnly: false //make commands work in dms
})

bot.loadCommands('./Commmands/') //command handler
