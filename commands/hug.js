const Discord = require('discord.js');
const botconfig = require('../json/botconfig.json');
const hugGIF = require('../json/hugGIF.json');

module.exports.run = (bot, msg, args) => {
    if (!args[1]) { return; }
    if (msg.author.id === bot.user.id) { return; }

    if (args[1].includes('@')) {

        let userToHug = args[1];

        const slapEmbed = new Discord.MessageEmbed()
            .setDescription(msg.author.username + ' hugs ' + userToHug)
            .setImage(hugGIF[Math.floor(Math.random() * 3)])
            .setColor(botconfig.colors.purple)
        return msg.channel.send(slapEmbed);
    }
}