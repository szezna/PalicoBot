const Discord = require('discord.js');
const slapGIF = require('../json/slapGIF.json');
const botconfig = require('../json/botconfig.json');

module.exports.run = (bot, msg, args) => {
    
    if (args[1].includes('@')) {

        let userToSlap = args[1];

        const slapEmbed = new Discord.MessageEmbed()
            .setDescription(msg.author.username + ' slaps ' + userToSlap)
            .setImage(slapGIF[Math.floor(Math.random() * 5)])
            .setColor(botconfig.colors.red)
        msg.channel.send(slapEmbed);
    }
}




