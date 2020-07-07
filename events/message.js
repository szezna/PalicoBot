const botconfig = require('../json/botconfig.json');

module.exports = (bot, msg) => {
    bot.commands.get('xp').run(bot, msg);
    if(msg.author.bot) { return; }
    let prefix = botconfig.prefix

    if(!msg.content.startsWith(prefix)) { return; }
    const args = msg.content.slice(prefix.length).trim().split(new RegExp(/ +/g));
    const cmdModule = bot.commands.get(args[0].toLowerCase());

    if(!cmdModule) { return; }
    cmdModule.run(bot, msg, args);
}

