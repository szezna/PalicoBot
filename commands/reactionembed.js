const botconfig = require('../json/botconfig.json');
const Discord = require('discord.js');

module.exports.run = (bot, msg, args) => {
    console.log('hi')
    if (!msg.member.roles.cache.find(r => r.name === botconfig.roleAdmin) && !msg.member.roles.cache.find(r => r.name === botconfig.roleMods)
        && !msg.member.roles.cache.find(r => r.name === 'Hentai')) {
        return msg.reply('You do not have Permission for this Command');
    } else {
        let channel = bot.channels.cache.get('724624920587272212');

        const emojiPS4 = bot.emojis.cache.get('724943269758369823')
        const embedPS4 = new Discord.MessageEmbed()
            .setColor(botconfig.colors.ps4)
            .setTitle('React with ' + ` ${emojiPS4} ` + ' to give yourself the PS4 Role.')
        channel.send(embedPS4).then(async msg => {
            await msg.react(emojiPS4)
        })
        const emojiXBOX = bot.emojis.cache.get('721374536989278249')
        const embedXBOX = new Discord.MessageEmbed()
            .setColor(botconfig.colors.xbox)
            .setTitle('React with ' + ` ${emojiXBOX} ` + ' to give yourself the XBOX Role.')
        channel.send(embedXBOX).then(async msg => {
            await msg.react(emojiXBOX)
        })
        const emojiPC = bot.emojis.cache.get('721377976775737375')
        const embedPC = new Discord.MessageEmbed()
            .setColor(botconfig.colors.pc)
            .setTitle('React with ' + ` ${emojiPC} ` + ' to give yourself the PC Role.')
        channel.send(embedPC).then(async msg => {
            await msg.react(emojiPC)
        })

        const emojiSR = bot.emojis.cache.get('723342617005391883')
        const embedSR = new Discord.MessageEmbed()
            .setColor(botconfig.colors.speedrunner)
            .setTitle('React with ' + ` ${emojiSR} ` + ' to give yourself the Speedrunner Role.')
        channel.send(embedSR).then(async msg => {
            await msg.react(emojiSR)
        })

        const emojiMem = bot.emojis.cache.get('721377976868143194')
        const embedMem = new Discord.MessageEmbed()
            .setColor(botconfig.colors.memer)
            .setTitle('React with ' + ` ${emojiMem} ` + ' to give yourself the Memer Role.')
        channel.send(embedMem).then(async msg => {
            await msg.react(emojiMem)
        })

        const emojiSB = bot.emojis.cache.get('723290841451593781')
        const embedSB = new Discord.MessageEmbed()
            .setColor(botconfig.colors.setbuilder)
            .setTitle('React with ' + ` ${emojiSB} ` + ' to give yourself the Set Builder Role.')
        channel.send(embedSB).then(async msg => {
            await msg.react(emojiSB)
        })

        const emojiWeeb = bot.emojis.cache.get('723343498312548373')
        const embedWeeb = new Discord.MessageEmbed()
            .setColor(botconfig.colors.weeb)
            .setTitle('React with ' + ` ${emojiWeeb} ` + ' to give yourself the Weeb Role.')
        channel.send(embedWeeb).then(async msg => {
            await msg.react(emojiWeeb)
        })
    }

}