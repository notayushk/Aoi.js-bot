const aoi = require("aoi.js")
const bot = new aoi.Bot({
     token: config.Token,
     prefix: [config.Prefix_1,config.Prefix_2,config.Prefix_3]
});

bot.onMessage({
  guildOnly: false //make commands work in dms
});

bot.loadCommands('./Commmands/'); //command handler
bot.status {(
 text: "${config.Prefix_3} help",
 type: "LISTENING",
 time: 10
});
