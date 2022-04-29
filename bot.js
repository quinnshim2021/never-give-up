var Discord = require('discord.io');

var logger = require('winston');

var auth = require('./auth.js');

// Configure logger settings

console.log('started')

logger.remove(logger.transports.Console);

logger.add(new logger.transports.Console, {

colorize: true
});

logger.level = 'debug';

// Initialize Discord Bot

var bot = new Discord.Client({

token: auth.config.token,

autorun: true

});

logger.info(bot.token.length)

bot.on('ready', function (evt) {

logger.info('Connected');

logger.info('Logged in as: ');

logger.info(bot.username + ' - (' + bot.id + ')');
});

console.log('running')
logger.info('running')

bot.on('message', function(user, userID, channelID, message, evt) {
      console.log('got message')
      console.log(message)
      if ((channelID === '963810107974647808' || channelID === '969622548432175164') && userID !== '969618394519326753' && message.toLowerCase().includes('never give up')) {
        console.log('going to send message')
        bot.sendMessage({
    
            to: channelID,

            message: 'Never give up! Get 10 wins! Get a fucking bison! Believe in the heart of the cards! \nhttps://www.youtube.com/watch?v=tYzMYcUty6s'

        });
    }
  });


