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
 
    if (reaction.message.channel.id === "724624920587272212") {
        bot.commands.get('removeFunRoles').run(bot, reaction, user);
    } else {
        return;
    }
}