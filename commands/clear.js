const botconfig = require('../json/botconfig.json');

module.exports.run = (bot, msg, args) => {
    if (!msg.member.roles.cache.find(r => r.name === botconfig.roleMods) && !msg.member.roles.cache.find(r => r.name === botconfig.roleAdmin)
        && !msg.member.roles.cache.find(r => r.name === 'Hentai')) {
        return msg.reply('You do not have Permission for this Command');
    } else {
        if (!args[1]) {
            return msg.reply('Error, please define second argument')
        } else {
            msg.channel.bulkDelete(args[1]).catch(err => {
                msg.reply('use an Integer <101')
                console.log(err);
            })
        }
    }
    console.log(msg.author.tag + ' used clear command in ' + msg.guild.name + ', ' + msg.channel.name)
}