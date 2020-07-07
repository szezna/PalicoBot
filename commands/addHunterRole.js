module.exports.run = async (bot, reaction, user) => {

    if (reaction.emoji.name === "letmesee") {                                                   // Emoji ID/Name
        await reaction.message.guild.members.cache.get(user.id).roles.add("721360117693677590") // Role ID - Hunter
            .catch(() => console.log("Failed to permit Role Hunter"));
    } else {
        return;
    }
}