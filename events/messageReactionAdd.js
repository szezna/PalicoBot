module.exports = async (bot, reaction, user) => {
    if (reaction.message.partial) {
        await reaction.message.fetch(); // Partial messages do not contain any content so skip them.
    }
    if (reaction.partial) {
        await reaction.fetch();
    }
    if (user.bot) {
        return; // If the user was a bot, return nothing.
    }
    if (!reaction.message.guild) {
        return; // If the user was reacting something but not in the guild/server, ignore them.
    }
    if (reaction.message.guild.id !== "721354120832876555") {               // Server ID
        return;
    }
 
    if (reaction.message.channel.id === "721357870163165204") {             // Channel ID
        if (reaction.message.id === "729283992897060904") {                 // Post ID
            bot.commands.get('addHunterRole').run(bot, reaction, user);
        } else {
            return;
        }
    }
    if (reaction.message.channel.id === "724624920587272212") {
        bot.commands.get('addFunRoles').run(bot, reaction, user);
    } else {
        return;
    }
}