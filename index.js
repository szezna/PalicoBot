const Discord = require('discord.js');
const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

// const token = ' ';

const roleMods = 'Fishy Business';
const roleAdmin = 'Super Mod';
const roleHunter = 'Hunter';
const PREFIX = '!';
const Patch = 'Meta Builds Patch Version 13.50';
const newestVideo = ["https://www.youtube.com/watch?v=OSifzcaJpPk"];


// const { monster } = require('./monster.js');
let xpData = require('./xp.json');
const colors = require('./colors.json');
const monsters = require('./monsterdata.json');

fs = require('fs');


// print when online
bot.on('ready', () => {
    console.log('Ich bin on Bro');
})

// XP
bot.on("message", async message => {
    let xpAdd = Math.floor(Math.random() * 7) + 8;
    // console.log(xpAdd);

    if (!xpData[message.author.id]) {
        if (message.member.roles.cache.find(r => r.name === 'PalicoBot')) {
            return;
        } else {
            xpData[message.author.id] = {
                username: message.author.username,
                xp: 0,
                rank: 1
            }
        }
    }

    let curXp = xpData[message.author.id].xp;
    let curLvl = xpData[message.author.id].rank;
    let nxtLvl = (xpData[message.author.id].rank * 300) * xpData[message.author.id].rank;
    xpData[message.author.id].xp = curXp + xpAdd;
    if (nxtLvl <= xpData[message.author.id].xp) {
        xpData[message.author.id].rank = curLvl + 1;
        let lvlup = new Discord.MessageEmbed()
            .setTitle('Your Hunter Rank increased! Now go hunt some monsters?')
            .setColor(colors.orange)
            .addField('New Hunter Rank: ', curLvl + 1)

        message.reply(lvlup);
    }
    fs.writeFile('./xp.json', JSON.stringify(xpData, null, '\t'), (err) => {
        if (err) {
            console.log(err)
        }
    })

})

// bot listenting to commands with prefix !
bot.on('message', msg => {
    let args = msg.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'slap':
            if (msg.author.id === bot.user.id) {
                return;
            }
            if (args[1].includes('@')) {
                let userToSlap = args[1];
                return msg.channel.send(msg.author.username + ' slaps ' + userToSlap)
            }
            break;
        case 'rank':
            if (!xpData[msg.author.id]) {
                xpData[msg.author.id] = {
                    xp: 0,
                    rank: 1
                }
            }

            let curXp = xpData[msg.author.id].xp;
            let curLvl = xpData[msg.author.id].rank;
            let nxtLvlXp = (curLvl * 300) * curLvl;
            let difference = nxtLvlXp - curXp;

            let lvlEmbed = new Discord.MessageEmbed()
                .setAuthor(msg.author.username)
                .setColor(colors.orange)
                .addField("Hunter Rank", curLvl, true)
                .addField("XP", curXp, true)
                .setFooter(`${difference} XP until your Hunter Rank increases!`, msg.author.displayAvatarURL({ dynamic: true }));
            msg.reply(lvlEmbed);
            msg.reply('maint tes');

            break;
        case 'meta':

            if (!args[1]) { return; }
            if (args[1] === 'Greatsword' || args[1] === 'greatsword') {
                msg.reply(Patch + ' ' + ' https://imgur.com/a/VG0ygmu')
            }
            if (args[1] === 'Hammer' || args[1] === 'hammer') {
                msg.reply(Patch + ' ' + ' https://imgur.com/a/vIl6kx9')
            }
            if (args[1] === 'Longsword' || args[1] === 'longsword') {
                msg.reply(Patch + ' ' + ' https://imgur.com/a/VxmX3Ve')
            }
            if (args[1] === 'Sword' && args[2] === 'and' && args[3] === "Shield" ||
                args[1] === 'sword' && args[2] === 'and' && args[3] === "shield") {
                msg.reply(Patch + ' ' + ' https://imgur.com/a/YMlXvFD')
            }
            if (args[1] === 'Dual' && args[2] === 'Blades' || args[1] === 'dual' && args[2] === 'blades') {
                msg.reply(Patch + ' ' + ' https://imgur.com/a/rVFAvnt')
            }
            if (args[1] === 'Hunting' && args[2] === 'Horn' || args[1] === 'hunting' && args[2] === 'horn') {
                msg.reply(Patch + ' ' + ' https://imgur.com/a/5Obf7BY')
            }
            if (args[1] === 'Lance' || args[1] === 'lance') {
                msg.reply(Patch + ' ' + 'https://imgur.com/a/TrvUiBK')
            }
            if (args[1] === 'Gunlance' || args[1] === 'gunlance') {
                msg.reply(Patch + ' ' + 'https://imgur.com/a/007kkv3')
            }
            if (args[1] === 'Switchaxe' || args[1] === 'switchaxe') {
                msg.reply(Patch + ' ' + 'https://imgur.com/a/higkyc2')
            }
            if (args[1] === 'Charge' && args[2] === 'Blade' || args[1] === 'charge' && args[2] === 'blade') {
                msg.reply(Patch + ' ' + 'https://mhwbuilds.net/charge-blade/')
            }
            if (args[1] === 'Insect' && args[2] === 'Glaive' || args[1] === 'insect' && args[2] === 'glaive') {
                msg.reply(Patch + ' ' + 'https://imgur.com/a/dC2z3sZ')
            }
            if (args[1] === 'LBG' || args[1] === 'lbg' || args[1] === 'Lbg') {
                msg.reply(Patch + ' ' + 'https://imgur.com/a/hNmfY0r')
            }
            if (args[1] === 'HGB' || args[1] === 'hgb' || args[1] === 'Hgb') {
                msg.reply(Patch + ' ' + 'https://imgur.com/a/roLBS9l')
            }
            if (args[1] === 'Bow' || args[1] === 'bow') {
                msg.reply(Patch + ' ' + 'https://imgur.com/a/XCJleqI')
            } else {
                return;
            }
            break;
        case 'youtube':
            return msg.reply('https://www.youtube.com/jeywe')
        case 'twitter':
            return msg.reply('https://twitter.com/jeywe_ix')
        case 'newestVideo':
            return msg.reply(newestVideo)
        case 'roll':

            if (msg.member.roles.cache.find(r => r.name === roleHunter) && (!msg.member.roles.cache.find(r => r.name === roleMods) &&
                !msg.member.roles.cache.find(r => r.name === roleAdmin))) {
                if (msg.channel.id === "724954454159392844") {
                    min = Math.ceil(0);
                    max = Math.floor(129);
                    var number = Math.floor(Math.random() * (max - min + 1)) + min;

                    let monsterName = monsters[number].name;
                    let monsterPoints = monsters[number].points;
                    let monsterLink = monsters[number].link;
                    let monsterRarity = monsters[number].rarity;

                    if (monsters[number].name === 'Qurupeco') {
                        minQ = Math.ceil(0);
                        maxQ = Math.floor(129);
                        var numberQ = Math.floor(Math.random() * (maxQ - minQ + 1)) + minQ;

                        let monsterNameQ = monsters[numberQ].name;
                        let monsterPointsQ = monsters[numberQ].points;
                        let monsterLinkQ = monsters[numberQ].link;
                        let monsterRarityQ = monsters[numberQ].rarity;

                        msg.reply(monsters[number].name + ' calls ' + monsterNameQ + ' for help! => ' + 'Rarity: ' + monsterRarityQ + ' | '
                            + 'Points: ' + monsterPointsQ, { files: [monsterLinkQ] })

                    }
                    msg.reply('rolls ' + monsterName + ' | ' + 'Rarity: ' + monsterRarity + ' | ' + 'Points: ' + monsterPoints,
                        { files: [monsterLink] })
                }
            }
            if (msg.member.roles.cache.find(r => r.name === roleMods) || msg.member.roles.cache.find(r => r.name === roleAdmin)) {
                min = Math.ceil(0);
                max = Math.floor(129);
                var number = Math.floor(Math.random() * (max - min + 1)) + min;

                let monsterName = monsters[number].name;
                let monsterPoints = monsters[number].points;
                let monsterLink = monsters[number].link;
                let monsterRarity = monsters[number].rarity;

                if (monsters[number].name === 'Qurupeco') {
                    minQ = Math.ceil(0);
                    maxQ = Math.floor(129);
                    var numberQ = Math.floor(Math.random() * (maxQ - minQ + 1)) + minQ;

                    let monsterNameQ = monsters[numberQ].name;
                    let monsterPointsQ = monsters[numberQ].points;
                    let monsterLinkQ = monsters[numberQ].link;
                    let monsterRarityQ = monsters[numberQ].rarity;

                    msg.reply(monsters[number].name + ' calls ' + monsterNameQ + ' for help! => ' + 'Rarity: ' + monsterRarityQ + ' | '
                        + 'Points: ' + monsterPointsQ, { files: [monsterLinkQ] })

                }

                msg.reply('rolls ' + monsterName + ' | ' + 'Rarity: ' + monsterRarity + ' | ' + 'Points: ' + monsterPoints,
                    { files: [monsterLink] })
            }
            /*
            for (var i=0; i<monsters.length; i++) {
                if(monsters[i].name === 'Qurupeco') {
                    msg.reply('Qurupecos Number: ' + i)
                    break;
                }
            }*/

            /*
            var s1 = 0;
            var s2 = 0;
            var s3 = 0;
            var s4 = 0;
            var s5 = 0;
            var s5P = 0;
            
            for (var i=0; i<monsters.length; i++) {
                if(monsters[i].rarity.length === 1) {
                    s1++;
                }
                if(monsters[i].rarity.length === 2) {
                    s2++;
                }
                if(monsters[i].rarity.length === 3) {
                    s3++;
                }
                if(monsters[i].rarity.length === 4) {
                    s4++;
                }
                if(monsters[i].rarity.length === 5) {
                    s5++;
                }
                if(monsters[i].rarity.length === 6) {
                    s5P++;
                }
            }

            msg.reply('1 Star: ' + s1 + ' | ' + '2 Star: ' + s2 + ' | ' + '3 Star: ' + s3 + ' | ' + '4 Star: ' + s4 + ' | ' + '5 Star: ' + s5 + 
            ' | ' + '5 Star+: ' + s5P + ' | ' + ' All Monsters: ' + monsters[number].rarity.length);
            */
            break;
        case 'reactionEmbed':
            if (!msg.member.roles.cache.find(r => r.name === roleAdmin) && !msg.member.roles.cache.find(r => r.name === roleMods)
                && !msg.member.roles.cache.find(r => r.name === 'Hentai')) {
                return msg.reply('You do not have Permission for this Command');
            } else {
                let channel = bot.channels.cache.get('721357870163165204');
                const embed = new Discord.MessageEmbed()
                    .setColor(0xffffff)
                    .setTitle('React to this with ' + ' ❤️ ' + ' if you agree to the rules')
                channel.send(embed).then(async msg => {
                    await msg.react("❤️")
                })
            }
            break;
        case 'clear':
            if (!msg.member.roles.cache.find(r => r.name === roleMods) && !msg.member.roles.cache.find(r => r.name === roleAdmin)
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
            break;
    }
})

bot.on("messageReactionAdd", async (reaction, user) => {

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

    // Channel ID
    if (reaction.message.guild.id !== "721354120832876555") {
        return;
    }

    // Room ID - rules Role
    if (reaction.message.channel.id === "721357870163165204") {
        // Post ID
        if (reaction.message.id === "721846813438509126") {
            if (reaction.emoji.name === "❤️") {
                await reaction.message.guild.members.cache.get(user.id).roles.add("721360117693677590").catch(err => { // Role ID
                    console.log(err);
                })
                //return user.send("Hunter role was given! You are now allowed to post in JeyWe's Channel, have Fun :)")
            } else {
                return;
            }
        }
    }

    // Room ID - PS4, XBOX, PC Role
    if (reaction.message.channel.id === "724624920587272212") {
        // Post ID
        if (reaction.message.id === "724983098441203802") {
            if (reaction.emoji.name === "ricardosmile") {
                await reaction.message.guild.members.cache.get(user.id).roles.add("724659372751585297").catch
                    (() => console.log("Failed to permit Role PS4")); // Role ID - PS4 
            }
            if (reaction.emoji.name === "BitConnect") {
                await reaction.message.guild.members.cache.get(user.id).roles.add("724659399951515740").catch
                    (() => console.log("Failed to permit Role XBOX")); // Role ID - Xbox
            }
            if (reaction.emoji.name === "hehehehehe") {
                await reaction.message.guild.members.cache.get(user.id).roles.add("724659467626610758").catch
                    (() => console.log("Failed to permit Role PC")); // Role ID - PC
            }
            if (reaction.emoji.name === "rathayes") {
                await reaction.message.guild.members.cache.get(user.id).roles.add("724963666511790101").catch
                    (() => console.log("Failed to permit Role Speedrunner")); // Role ID - Speedrunner
            }
            if (reaction.emoji.name === "muhahaha") {
                await reaction.message.guild.members.cache.get(user.id).roles.add("724963738595360782").catch
                    (() => console.log("Failed to permit Role Memer")); // Role ID - Memer
            }
            if (reaction.emoji.name === "kronk_think") {
                await reaction.message.guild.members.cache.get(user.id).roles.add("724963797583790080").catch
                    (() => console.log("Failed to permit Role Set Builder")); // Role ID - Set Builder
            }
            if (reaction.emoji.name === "kannawave") {
                await reaction.message.guild.members.cache.get(user.id).roles.add("725743510745120788").catch
                    (() => console.log("Failed to permit Role Weeb")); // Role ID - Weeb
            } else {
                return;
            }
        }
    }

})

bot.on("messageReactionRemove", async (reaction, user) => {

    if (reaction.message.partial) {
        await reaction.message.fetch();
    }
    if (reaction.partial) {
        await reaction.fetch();
    }
    if (user.bot) {
        return;
    }
    if (!reaction.message.guild) {
        return;
    }
    if (reaction.message.guild.id !== "721354120832876555") {
        return;
    }

    // Room ID - rules Role
    if (reaction.message.channel.id === "721357870163165204") {
        if (reaction.message.id === "721846813438509126") {
            if (reaction.emoji.name === "❤️") {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("721360117693677590").catch(err => {
                    console.log(err);
                })
                //return user.send("Hunter role was taken! Big sad")
            } else {
                return;
            }
        }
    }

    // Room ID - PS4, XBOX, PC + Speedrunner, Memer, Set Builder Role
    if (reaction.message.channel.id === "724624920587272212") {
        // Post ID
        if (reaction.message.id === "724983098441203802") {
            if (reaction.emoji.name === "ricardosmile") {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("724659372751585297").catch
                    (() => console.log("Failed to remove Role PS4")); // Role ID - PS4 
            }
            if (reaction.emoji.name === "BitConnect") {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("724659399951515740").catch
                    (() => console.log("Failed to remove Role XBOX")); // Role ID - Xbox
            }
            if (reaction.emoji.name === "hehehehehe") {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("724659467626610758").catch
                    (() => console.log("Failed to remove Role PC")); // Role ID - PC
            }
            if (reaction.emoji.name === "rathayes") {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("724963666511790101").catch
                    (() => console.log("Failed to remove Role Speedrunner")); // Role ID - Speedrunner
            }
            if (reaction.emoji.name === "muhahaha") {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("724963738595360782").catch
                    (() => console.log("Failed to permit Role Memer")); // Role ID - Memer
            }
            if (reaction.emoji.name === "kronk_think") {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("724963797583790080").catch
                    (() => console.log("Failed to permit Role Set Builder")); // Role ID - Set Builder
            } else {
                return;
            }
        }
    }

})

// bot.login(token);
bot.login(process.env.token);
