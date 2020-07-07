const botconfig = require('../json/botconfig.json');

module.exports.run = async (bot, reaction, user) => {
    
    // Post ID - PS4
    if (reaction.message.id === "729329697376436245") {
        if (reaction.emoji.name === "ricardosmile") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("724659372751585297").catch
                (() => console.log("Failed to remove Role PS4")); // Role ID - PS4 
        }
    }
    // Post ID - XBOX
    if (reaction.message.id === "729329698571681803") {
        if (reaction.emoji.name === "BitConnect") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("724659399951515740").catch
                (() => console.log("Failed to remove Role XBOX")); // Role ID - Xbox
        }
    }
    // Post ID - PC
    if (reaction.message.id === "729329699683172453") {
        if (reaction.emoji.name === "hehehehehe") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("724659467626610758").catch
                (() => console.log("Failed to remove Role PC")); // Role ID - PC
        }
    }
    // Post ID - Speedrunner
    if (reaction.message.id === "729329700404461588") {
        if (reaction.emoji.name === "rathanice") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("724963666511790101").catch
                (() => console.log("Failed to remove Role Speedrunner")); // Role ID - Speedrunner
        }
    }
    // Post ID - Memer
    if (reaction.message.id === "729329700849188935") {
        if (reaction.emoji.name === "muhahaha") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("724963738595360782").catch
                (() => console.log("Failed to remove Role Memer")); // Role ID - Memer
        }
    }
    // Post ID - Set Builder
    if (reaction.message.id === "729329725008510987") {
        if (reaction.emoji.name === "kronkthink") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("724963797583790080").catch
                (() => console.log("Failed to remove Role Set Builder")); // Role ID - Set Builder
        }
    }
    // Post ID - Weeb
    if (reaction.message.id === "729329725981589534") {
        if (reaction.emoji.name === "kannawave") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("725743510745120788").catch
                (() => console.log("Failed to remove Role Weeb")); // Role ID - Weeb
        }
    }
}