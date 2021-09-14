const aoi = require("aoi.js")
const bot = new aoi.Bot({
     token: config.Token,
     prefix: [config.Prefix_1,config.Prefix_2,config.Prefix_3]
});

bot.onMessage({
  guildOnly: false //make commands work in dms
});
bot.onMusicStart()
bot.musicStartCommand({
 channel: "$channelID", 
 code: `
 $color[RANDOM]
 $author[Now Playing]
 $description[Playing $songInfo[title]]`
});
bot.musicEndCommand({
        channel: "$channelID",
        code: `$sendMessage[{description: I'm leaving the Voice Channel since no one is playing music anymore}{delete:5s};no]`
        });

bot.loadCommands('./Commmands/'); //command handler
bot.status ({
 text: "${config.Prefix_3} help",
 type: "LISTENING",
 time: 10
});
bot.variables ({
  wallet: "0", //wallet money
  bank: "0", //bank money
  bio: "I am Just a Plain Human" //user bio for profile
});
