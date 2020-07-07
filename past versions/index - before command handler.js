const Discord = require('discord.js');
const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const botconfig = require('./botconfig.json');

const roleMods = 'Fishy Business';
const roleAdmin = 'Super Mod';
const roleHunter = 'Hunter';
const Patch = 'Meta Builds Patch Version 13.50';
const newestVideo = ["https://www.youtube.com/watch?v=OSifzcaJpPk"];

// const { monster } = require('./monster.js');
const hugGIF = require('./hugGIF.json');
const slapGIF = require('./slapGIF.json');
const colors = require('./colors.json');
const monsters = require('./monsterdata.json');
const sqlite = require(`sqlite3`).verbose();

fs = require('fs');

// print when online
bot.on('ready', () => {
    require('console-stamp')(console, { pattern: 'dd/mm/yyyy HH:MM:ss' });
    console.log(`${bot.user.username} is now online!`)
    bot.user.setActivity('Hentai', { type: 'WATCHING' });

    // Create / Read from Database
    let db = new sqlite.Database('./xpdb.db', sqlite.OPEN_READWRITE | sqlite.OPEN_CREATElet, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Connected to database.');
    });

    db.run(`CREATE TABLE IF NOT EXISTS XPDATA(userID INTEGER NOT NULL, username TEXT NOT NULL, tag INTEGER NOT NULL, xp INTEGER NOT NULL,
        rank INTEGER NOT NULL)`, (err) => {
        if (err) {
            console.error(err.message);
        }
    });
});

bot.on("error", (e) => {
    console.error(e);
})

// XP
bot.on("message", async message => {

    if (message.member.roles.cache.find(r => r.name === 'PalicoBot')) { return; }

    let userID = message.author.id;
    let userName = message.author.username;
    let userTag = message.author.tag;
    let db = new sqlite.Database('./xpdb.db', sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE);

    let query = `SELECT * FROM XPDATA WHERE userID = ?`
    db.get(query, [userID], (err, row) => {
        if (err) {
            console.log(err);
            return;
        }
        if (row === undefined) {
            let insertData = db.prepare(`INSERT INTO XPDATA VALUES(?,?,?,?,?)`)
            insertData.run(userID, userName, userTag, 0, 1);
            insertData.finalize();
            db.close();
            return;
        } else {
            let curUserXp = row.xp
            let xpAdd = Math.floor(Math.random() * 7) + 8;
            let updXp = curUserXp + xpAdd;
            let curUserRank = row.rank
            let nxtLvl = (curUserRank * 300) * curUserRank;
            db.run(`UPDATE XPDATA SET xp = ? WHERE userid = ?`, [updXp, userID])

            if (nxtLvl <= updXp) {
                curUserRank = curUserRank + 1;
                db.run(`UPDATE XPDATA SET rank = ? WHERE userid = ?`, [curUserRank, userID])
                let lvlup = new Discord.MessageEmbed()
                    .setTitle('Your Hunter Rank increased! Now go hunt some monsters?')
                    .setColor(colors.orange)
                    .addField('Next Hunter Rank: ', curUserRank + 1)
                message.reply(lvlup);
            }
            db.close();
            return;
        }
    });
})

// bot listenting to commands with prefix !
bot.on('message', msg => {
    let args = msg.content.substring(botconfig.prefix.length).split(" ");

    switch (args[0]) {
        case 'slap':
            if (!args[1]) { return; }
            if (msg.author.id === bot.user.id) { return; }

            if (args[1].includes('@')) {

                let userToSlap = args[1];

                const slapEmbed = new Discord.MessageEmbed()
                    .setDescription(msg.author.username + ' slaps ' + userToSlap)
                    .setImage(slapGIF[Math.floor(Math.random() * 5)])
                    .setColor(colors.red)
                msg.channel.send(slapEmbed);
            }
            break;
        case 'hug':
            if (!args[1]) { return; }
            if (msg.author.id === bot.user.id) { return; }

            if (args[1].includes('@')) {

                let userToHug = args[1];

                const slapEmbed = new Discord.MessageEmbed()
                    .setDescription(msg.author.username + ' hugs ' + userToHug)
                    .setImage(hugGIF[Math.floor(Math.random() * 3)])
                    .setColor(colors.purple)
                msg.channel.send(slapEmbed);
            }
            break;
        case 'rank':
            if (msg.author.id === bot.user.id) { return; }

            let userID = msg.author.id;
            let userName = msg.author.username;
            let userTag = msg.author.tag;
            let db = new sqlite.Database('./xpdb.db', sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE);

            let query = `SELECT * FROM XPDATA WHERE userID = ?`
            db.get(query, [userID], (err, row) => {
                if (err) {
                    console.log(err);
                    return;
                }
                if (row === undefined) {
                    let insertData = db.prepare(`INSERT INTO XPDATA VALUES(?,?,?,?,?)`)
                    insertData.run(userID, userName, userTag, 0, 1);
                    insertData.finalize();
                    db.close();
                    return;
                } else {
                    let curUserXp = row.xp
                    let xpAdd = Math.floor(Math.random() * 7) + 8;
                    let updXp = curUserXp + xpAdd;
                    let curUserRank = row.rank
                    let nxtLvl = (curUserRank * 300) * curUserRank;
                    let difference = nxtLvl - curUserXp

                    let lvlEmbed = new Discord.MessageEmbed()
                        .setAuthor(msg.author.username)
                        .setColor(colors.orange)
                        .addField('Current Hunter Rank', curUserRank, true)
                        .addField('XP', updXp, true)
                        .addField('You joined this Server ', msg.member.joinedAt)
                        .setFooter(`${difference} XP until your Hunter Rank increases!`, msg.author.displayAvatarURL({ dynamic: true }))
                    msg.reply(lvlEmbed);
                }
            });

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
            // roll channel für hunter only
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
            if (msg.member.roles.cache.find(r => r.name === roleMods) || msg.member.roles.cache.find(r => r.name === roleAdmin) || msg.member.roles.cache.find(r => r.name === 'Hentai')) {
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
                let channel = bot.channels.cache.get('724624920587272212');

                const emojiPS4 = bot.emojis.cache.get('724943269758369823')
                const embedPS4 = new Discord.MessageEmbed()
                    .setColor(colors.ps4)
                    .setTitle('React with ' + ` ${emojiPS4} ` + ' to give yourself the PS4 Role.')
                channel.send(embedPS4).then(async msg => {
                    await msg.react(emojiPS4)
                })
                const emojiXBOX = bot.emojis.cache.get('721374536989278249')
                const embedXBOX = new Discord.MessageEmbed()
                    .setColor(colors.xbox)
                    .setTitle('React with ' + ` ${emojiXBOX} ` + ' to give yourself the XBOX Role.')
                channel.send(embedXBOX).then(async msg => {
                    await msg.react(emojiXBOX)
                })
                const emojiPC = bot.emojis.cache.get('721377976775737375')
                const embedPC = new Discord.MessageEmbed()
                    .setColor(colors.pc)
                    .setTitle('React with ' + ` ${emojiPC} ` + ' to give yourself the PC Role.')
                channel.send(embedPC).then(async msg => {
                    await msg.react(emojiPC)
                })

                const emojiSR = bot.emojis.cache.get('723342617005391883')
                const embedSR = new Discord.MessageEmbed()
                    .setColor(colors.speedrunner)
                    .setTitle('React with ' + ` ${emojiSR} ` + ' to give yourself the Speedrunner Role.')
                channel.send(embedSR).then(async msg => {
                    await msg.react(emojiSR)
                })

                const emojiMem = bot.emojis.cache.get('721377976868143194')
                const embedMem = new Discord.MessageEmbed()
                    .setColor(colors.memer)
                    .setTitle('React with ' + ` ${emojiMem} ` + ' to give yourself the Memer Role.')
                channel.send(embedMem).then(async msg => {
                    await msg.react(emojiMem)
                })

                const emojiSB = bot.emojis.cache.get('723290841451593781')
                const embedSB = new Discord.MessageEmbed()
                    .setColor(colors.setbuilder)
                    .setTitle('React with ' + ` ${emojiSB} ` + ' to give yourself the Set Builder Role.')
                channel.send(embedSB).then(async msg => {
                    await msg.react(emojiSB)
                })

                const emojiWeeb = bot.emojis.cache.get('723343498312548373')
                const embedWeeb = new Discord.MessageEmbed()
                    .setColor(colors.weeb)
                    .setTitle('React with ' + ` ${emojiWeeb} ` + ' to give yourself the Weeb Role.')
                channel.send(embedWeeb).then(async msg => {
                    await msg.react(emojiWeeb)
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
            console.log(msg.author.tag + ' used clear command in ' + msg.guild.name + ', ' + msg.channel.name)
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
        if (reaction.message.id === "729279623527137352") {
            if (reaction.emoji.name === "letmesee") {
                await reaction.message.guild.members.cache.get(user.id).roles.add("721360117693677590").catch
                    (() => console.log("Failed to permit Role Hunter")); // Role ID - Hunter

                //return user.send("Hunter role was given! You are now allowed to post in JeyWe's Channel, have Fun :)")
            } else {
                return;
            }
        }
    }

    // Room ID - PS4, XBOX, PC etc Roles
    if (reaction.message.channel.id === "724624920587272212") {

        // Post ID - PS4
        if (reaction.message.id === "729329697376436245") {
            if (reaction.emoji.name === "ricardosmile") {
                await reaction.message.guild.members.cache.get(user.id).roles.add("724659372751585297").catch
                    (() => console.log("Failed to permit Role PS4")); // Role ID - PS4 
            }
        }
        // Post ID - XBOX
        if (reaction.message.id === "729329698571681803") {
            if (reaction.emoji.name === "BitConnect") {
                await reaction.message.guild.members.cache.get(user.id).roles.add("724659399951515740").catch
                    (() => console.log("Failed to permit Role XBOX")); // Role ID - Xbox
            }
        }
        // Post ID - PC
        if (reaction.message.id === "729329699683172453") {
            if (reaction.emoji.name === "hehehehehe") {
                await reaction.message.guild.members.cache.get(user.id).roles.add("724659467626610758").catch
                    (() => console.log("Failed to permit Role PC")); // Role ID - PC
            }
        }
        // Post ID - Speedrunner
        if (reaction.message.id === "729329700404461588") {
            if (reaction.emoji.name === "rathanice") {
                await reaction.message.guild.members.cache.get(user.id).roles.add("724963666511790101").catch
                    (() => console.log("Failed to permit Role Speedrunner")); // Role ID - Speedrunner
            }
        }
        // Post ID - Memer
        if (reaction.message.id === "729329700849188935") {
            if (reaction.emoji.name === "muhahaha") {
                await reaction.message.guild.members.cache.get(user.id).roles.add("724963738595360782").catch
                    (() => console.log("Failed to permit Role Memer")); // Role ID - Memer
            }
        }
        // Post ID - Set Builder
        if (reaction.message.id === "729329725008510987") {
            if (reaction.emoji.name === "kronkthink") {
                await reaction.message.guild.members.cache.get(user.id).roles.add("724963797583790080").catch
                    (() => console.log("Failed to permit Role Set Builder")); // Role ID - Set Builder
            }
        }
        // Post ID - Weeb
        if (reaction.message.id === "729329725981589534") {
            if (reaction.emoji.name === "kannawave") {
                await reaction.message.guild.members.cache.get(user.id).roles.add("725743510745120788").catch
                    (() => console.log("Failed to permit Role Weeb")); // Role ID - Weeb
            }
        }
    } else {
        return;
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
        if (reaction.message.id === "729283992897060904") {
            if (reaction.emoji.name === "letmesee") {
                await reaction.message.guild.members.cache.get(user.id).roles.remove("721360117693677590").catch
                    (() => console.log("Failed to remove Role Hunter")); // Role ID - Hunter

                //return user.send("Hunter role was taken! Big sad")
            } else {
                return;
            }
        }
    }

    // Room ID - PS4, XBOX, PC + Speedrunner, Memer, Set Builder Role
    if (reaction.message.channel.id === "724624920587272212") {

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
    } else {
        return;
    }

})

function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            // time in ms => s x 1000
        }, time)
    })
}
bot.login(botconfig.token);
// bot.login(process.env.token);
