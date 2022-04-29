var Discord = require('discord.io');

var logger = require('winston');

var auth = require('./auth.json');

// Configure logger settings

logger.remove(logger.transports.Console);

logger.add(new logger.transports.Console, {

colorize: true
});

logger.level = 'debug';

// Initialize Discord Bot

var bot = new Discord.Client({

token: auth.token,

autorun: true

});

bot.on('ready', function (evt) {

logger.info('Connected');

logger.info('Logged in as: ');

logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function(user, userID, channelID, message, evt) {
      if (channelID === '963810107974647808' && userID !== '969618394519326753' && message.toLowerCase().includes('never give up')) {
        bot.sendMessage({
    
            to: channelID,

            message: 'Never give up! Get 10 wins! Get a fucking bison! Believe in the heart of the cards! \nhttps://www.youtube.com/watch?v=tYzMYcUty6s'

        });
    }
  });


  // keep token in env variable
  // once i do that host on heroku (app and repo already made, just connect them and make sure token works)