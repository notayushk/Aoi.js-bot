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
bot.variables ({
  wallet: "0", //wallet money
  bank: "0", //bank money
  bio: "I am Just a Plain Human" //user bio for profile
});
