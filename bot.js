var auth = require('./auth.js');
const { Client, Intents } = require('discord.js'); //import discord.js

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if ((msg.channelId ==='969622548432175164' || msg.channelId === '963810107974647808') && msg.author.id !== '969618394519326753' && msg.content.toLowerCase().includes('never give up')){
    msg.reply('NEVER GIVE UP! BUY A FUCKING BISON! SCALE THE SHIT OUT OF IT UNTIL YOU GET 10 WINS! TATAKAE!\nhttps://www.youtube.com/watch?v=KxGRhd_iWuE')
      .then(console.log('successfully sent message'))
      .catch(console.log('error sending message'))
  }


})

//make sure this line is the last line
bot.login(auth.config.token);

