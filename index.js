const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = 'ITR-';

client.on('ready', () => {
  console.log(`Başarılı! !`);
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('Aleyküm Selam Müslüman Kardeşim');
  }
});
client.on('ready', () => {
    console.log("Giris Saglandi... Teşekkürler emirhanlol1");
     client.user.setStatus("STREAMING"); 
    setTimeout(function(){
    console.log("Bot open.");
    }, 1000);
    function botStatus() {
        let status = [
            `Prefix : {'ITR-'}.`,
            `Thanks : ${client.guilds.size} server`,
            `Thanks For Emirhanlol1 and IIOmqKinxII.`,
            `Bot Owners:IIOmqKinxII, Emirhanlol1`,
            `Total: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Players.`
        ];
        let rstatus = Math.floor(Math.random() * status.length);
        
    client.user.setActivity(status[rstatus], {Type: 'STREAMING'});        // BOT STATUS
      }; setInterval(botStatus, 20000)
        setInterval(() => {
        dbl.postStats(client.guilds.size)
        }, 1800000);
    })
client.on('ready', () => {
  console.log('Kick sistem');
});
client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "ITR-kick"
  if (message.content.startsWith('ITR-kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.kick('Optional reason that will display in the audit logs').then(() => {
          // We let the message author know we were able to kick the person
          message.reply(`${user.tag} Kicked From the server.`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          message.reply('Player Kicked.');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('That user isn\'t in this guild!');
      }
    // Otherwise, if no user was mentioned
    } else {
      message.reply('Wrong.\ Tag Player.');
    }
  }
});
client.on('ready', () => {
  console.log('Ban sistem');
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "ITR-ban"
  if (message.content.startsWith('ITR-ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
         */
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          // We let the message author know we were able to ban the person
          message.reply(`${user.tag} Banned From the server.`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to ban the member,
          // either due to missing permissions or role hierarchy
          message.reply('Bu oyuncuyu banlayamassınız yada yetkiniz yetersiz.');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('You not have **ban members** rank ');
      }
    } else {
    // Otherwise, if no user was mentioned
      message.reply('Wrong Tag user');
    }
  }
});
client.on('ready', () => {
  console.log('Bot Açıldı..');
});
client.on('ready', () => {
  console.log(`[BOT] ${client.user.tag} ADI İLE GİRİŞ YAPTI!`);
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send('Pong!' + client.ping + 'ms');
  }
  
    if (message.content === 'sa') {
    message.reply('as');
  }
  
  if (message.content === prefix + 'avatar') {  
	message.channel.send(message.author.avatarURL);
  }
  
  if (message.content === prefix + 'reboot') {
	  
	  if (message.author.id === "265072701171957760") {
		  message.channel.send('[BOT]Reloading...').then(msg => {
			  console.log('Reboot..')
			  process.exit(0);
		  });
	  } else 
		  message.channel.send('You not my Owner!')
  }
  
  
});
client.login('NTAwMDM1NDgyNjg4Njg0MDM0.DqE-Uw.uFl3u5jblXWqH_eIC7UgI3QeAys');