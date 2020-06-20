
const Discord = require('discord.js');
const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

//const token = '';
const PREFIX = '!';
const Patch = 'Meta Builds Patch Version 13.50';
const { monster } = require('./monster.js')

let newestVideo = ["https://www.youtube.com/watch?v=OSifzcaJpPk"];

// print when online
bot.on('ready', () => {
    console.log('Ich bin on Bro');
})

// bot listenting to commands with prefix !
bot.on('message', msg => {
    let args = msg.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'meta':
            if (!args[1]) {
                return;
            }
            if (args[1] === 'Greatsword') {
                msg.reply(Patch + ' ' + ' https://imgur.com/a/VG0ygmu')
            }
            if (args[1] === 'Hammer') {
                msg.reply(Patch + ' ' + ' https://imgur.com/a/vIl6kx9')
            }
            if (args[1] === 'Longsword') {
                msg.reply(Patch + ' ' + ' https://imgur.com/a/VxmX3Ve')
            }
            if (args[1] === 'Sword' && args[2] === 'and' && args[3] === "Shield") {
                msg.reply(Patch + ' ' + ' https://imgur.com/a/YMlXvFD')
            }
            if (args[1] === 'Dual' && args[2] === 'Blades') {
                msg.reply(Patch + ' ' + ' https://imgur.com/a/rVFAvnt')
            }
            if (args[1] === 'Hunting' && args[2] === 'Horn') {
                msg.reply(Patch + ' ' + ' https://imgur.com/a/5Obf7BY')
            }
            if (args[1] === 'Lance') {
                msg.reply(Patch + ' ' + 'https://imgur.com/a/TrvUiBK')
            }
            if (args[1] === 'Gunlance') {
                msg.reply(Patch + ' ' + 'https://imgur.com/a/007kkv3')
            }
            if (args[1] === 'Switchaxe') {
                msg.reply(Patch + ' ' + 'https://imgur.com/a/higkyc2')
            }
            if (args[1] === 'Charge' && args[2] === 'Blade') {
                msg.reply(Patch + ' ' + 'https://mhwbuilds.net/charge-blade/')
            }
            if (args[1] === 'Insect' && args[2] === 'Glaive') {
                msg.reply(Patch + ' ' + 'https://imgur.com/a/dC2z3sZ')
            }
            if (args[1] === 'LBG') {
                msg.reply(Patch + ' ' + 'https://imgur.com/a/hNmfY0r')
            }
            if (args[1] === 'HGB') {
                msg.reply(Patch + ' ' + 'https://imgur.com/a/roLBS9l')
            }
            if (args[1] === 'Bow') {
                msg.reply(Patch + ' ' + 'https://imgur.com/a/XCJleqI')
            }
            break;
        case 'youtube':
            msg.reply('https://www.youtube.com/jeywe')
            break;
        case 'twitter':
            msg.reply('https://twitter.com/jeywe_ix')
            break;
        case 'newestVideo':
            msg.reply(newestVideo)
            break;
        case 'roll':
            min = Math.ceil(1);
            max = Math.floor(110);
            var number = Math.floor(Math.random() * (max - min + 1)) + min;

            if (number > 0 && number < 49) {
                msg.reply('rolls ' + 'Name ' + ' | ' + 'Rarity: ★★' + ' (' + number + ', test only) ' + Math.round((48 / monster.size) * 100) + '% Chance', { files: [monster.get(number)] });
            }
            if (number > 48 && number < 82) {
                msg.reply('rolls ' + 'Name ' + ' | ' + 'Rarity: ★★★' + ' (' + number + ', test only) ' + Math.round((32 / monster.size) * 100) + '% Chance', { files: [monster.get(number)] });
            }
            if (number > 81 && number < 100) {
                msg.reply('rolls ' + 'Name ' + ' | ' + 'Rarity: ★★★★' + ' (' + number + ', test only) ' + Math.round((19 / monster.size) * 100) + '% Chance', { files: [monster.get(number)] });
            }
            if (number > 99 && number < 109) {
                msg.reply('rolls ' + 'Name' + ' | ' + 'Rarity: ★★★★★' + ' (' + number + ', test only) ' + Math.round((9 / monster.size) * 100) + '% Chance', { files: [monster.get(number)] });
            }
            if (number > 108 && number < 111) {
                msg.reply('rolls ' + 'Name ' + ' | ' + 'Rarity: ★★★★★★+' + ' (' + number + ', test only) ' + Math.round((2 / monster.size) * 100) + '% Chance', { files: [monster.get(number)] })
            }
            break;
        case 'reactionRules':
            if (!msg.member.roles.cache.find(r => r.name === 'Guild Master') && !msg.member.roles.cache.find(r => r.name === 'Mods')
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
            if (!msg.member.roles.cache.find(r => r.name === 'Guild Master') && !msg.member.roles.cache.find(r => r.name === 'Mods')
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
        /*  case 'kick':
               if (!msg.member.roles.cache.find(r => r.name === 'Guild Master') && !msg.member.roles.cache.find(r => r.name === 'Mods')
                   && !msg.member.roles.cache.find(r => r.name === 'Hentai')) {
                    return msg.reply('You do not have Permission for this Command!');
               } else {
                   if (!args[1]) {
                       msg.reply('You need to specify a person in your second argument!')
                   } else {
                       const user = msg.mentions.users.first();
                       if (user) {
                           const member = member.guild.member(user);
                           if (member) {
                               member.kick('You were kicked from this server').then(() => {
                                   msg.reply(`Succesfully kicked ${user.tag}`);
                               }).catch(err => {
                                   msg.reply('Unable to kick member')
                                   console.log(err);
                               });
                           } else {
                               msg.reply('That user is not on this server')
                           }
                       } else {
                           msg.reply('That user is not on this server')
                       }
                   }
               }*/
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
    // Veqaz 721327883976441856
    // Jeywe 721354120832876555
    if (reaction.message.guild.id !== "721354120832876555") {
        return;
    }

    // Room ID
    // Veqaz test 722048352593903638
    // Jeywe rules 721357870163165204
    if (reaction.message.channel.id === "721357870163165204") {
        if (reaction.emoji.name === "❤️") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("721360117693677590") // Role ID
            return user.send("Hunter role was given! You are now allowed to post in JeyWe's Channel, have Fun :)").catch(() => console.log("Failed to send DM."));
        } else {
            return; // If the room is not rules, then ignore reacts
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

    if (reaction.message.channel.id === "721357870163165204") {
        if (reaction.emoji.name === "❤️") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("721360117693677590")
            return user.send("Hunter role was taken! Big sad").catch(() => console.log("Failed to send DM."));
        } else {
            return;
        }
    }
})

bot.login(process.env.token);
