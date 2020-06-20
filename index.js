const Discord = require('discord.js');
const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

//const token = '';
const PREFIX = '!';
const Patch = 'Meta Builds Patch Version 13.50';


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
                msg.reply('rolls C Tier Monster' + ' ' + '(' + number + ', test only) ' + (48 / monster.size) * 100 + '% Chance', { files: [monster.get(number)] });
            }
            if (number > 48 && number < 82) {
                msg.reply('rolls B Tier Monster' + ' ' + '(' + number + ', test only) ' + (33 / monster.size) * 100 + '% Chance', { files: [monster.get(number)] });
            }
            if (number > 81 && number < 100) {
                msg.reply('rolls A Tier Monster' + ' ' + '(' + number + ', test only) ' + (18 / monster.size) * 100 + '% Chance', { files: [monster.get(number)] });
            }
            if (number > 99 && number < 111) {
                msg.reply('rolls S Tier Monster' + ' ' + '(' + number + ', test only) ' + (11 / monster.size) * 100 + '% Chance', { files: [monster.get(number)] });
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


const monster = new Map([
    // C-Tier 48
    [1, 'https://i.imgur.com/HRcm2na.png'],  // | Anjanath
    [2, 'https://i.imgur.com/cfjKUA3.png'],  // | Arzuros
    [3, 'https://i.imgur.com/sKbGSXv.png'],  // | Pukei Pukei
    [4, 'https://i.imgur.com/MG3p0Hm.png'],  // | Qurupeco
    [5, 'https://i.imgur.com/Oteqxbb.png'],  // | Rathalos
    [6, 'https://i.imgur.com/1gR3iCY.png'],  // | Rathian
    [7, 'https://i.imgur.com/ZPuaeCG.png'],  // | Royal Ludroth
    [8, 'https://i.imgur.com/6zEVxlO.png'],  // | Ruby Basarios
    [9, 'https://i.imgur.com/9ghtUAh.png'],  // | Shogun Ceanataur
    [10, 'https://i.imgur.com/eYZnM4t.png'], // | Tigrex
    [11, 'https://i.imgur.com/sS9DqGj.png'], // | Tobi Kadachi
    [12, 'https://i.imgur.com/TkgFYEU.png'], // | Uragaan
    [13, 'https://i.imgur.com/yWc2in1.png'], // | Volvidon
    [14, 'https://i.imgur.com/5OSW64N.png'], // | Yian Garuga
    [15, 'https://i.imgur.com/0Fdljc7.png'], // | Barioth
    [16, 'https://i.imgur.com/xkFU8Kf.png'], // | Diablos
    [17, 'https://i.imgur.com/lH8gOND.png'], // | Congalala
    [18, 'https://i.imgur.com/3hSiBMe.png'], // | Yian Kut Ku
    [19, 'https://i.imgur.com/qAK3rmC.png'], // | Daimyo Hermitaur
    [20, 'https://i.imgur.com/0NGoeji.png'], // | Zamtrios
    [21, 'https://i.imgur.com/8zPVtqa.png'], // | Dodogama
    [22, 'https://i.imgur.com/KucJJzw.png'], // | Barroth
    [23, 'https://i.imgur.com/1Ej64Cs.png'], // | Basarios
    [24, 'https://i.imgur.com/kaXrMv0.png'], // | Blangonga
    [25, 'https://i.imgur.com/zPH2rjM.png'], // | Cephadrome
    [26, 'https://i.imgur.com/XWldpPH.png'], // | Emerald Congalala
    [27, 'https://i.imgur.com/vQ9Q2xE.png'], // | Gravios
    [28, 'https://i.imgur.com/yx4KKwm.png'], // | Gigginox
    [29, 'https://i.imgur.com/wGvFJr2.png'], // | Great Girros
    [30, 'https://i.imgur.com/4lGN909.png'], // | Great Baggi
    [31, 'https://i.imgur.com/vR9tYvz.png'], // | Gobul
    [32, 'https://i.imgur.com/bARH8be.png'], // | Great Jaggi
    [33, 'https://i.imgur.com/iN4l5jG.png'], // | Green Plesioth
    [34, 'https://i.imgur.com/87hJOhY.png'], // | Gypceros
    [35, 'https://i.imgur.com/asjhyte.png'], // | Jyuratodos
    [36, 'https://i.imgur.com/iSwlnX3.png'], // | Jade Barroth
    [37, 'https://i.imgur.com/Id7lguf.png'], // | Kecha Wacha
    [38, 'https://i.imgur.com/uotwQne.png'], // | Lavasioth
    [39, 'https://i.imgur.com/HiUOyXI.png'], // | Lagombi
    [40, 'https://i.imgur.com/weKzd2o.png'], // | Khezu
    [41, 'https://i.imgur.com/xcFPkR1.png'], // | Legiana
    [42, 'https://i.imgur.com/QAt9xZ5.png'], // | Malfestio
    [43, 'https://i.imgur.com/qIhkeVD.png'], // | Nerscylla
    [44, 'https://i.imgur.com/RNamIO8.png'], // | Nargacuga
    [45, 'https://i.imgur.com/gCMMNc2.png'], // | Nibelsnarf
    [46, 'https://i.imgur.com/nkkXTyB.png'], // | Odogaron
    [47, 'https://i.imgur.com/JFhGR07.png'], // | Paolumu
    [48, 'https://i.imgur.com/NbSXHx0.png'], // | Plesioth
    // B-Tier 33
    [49, 'https://i.imgur.com/I159Nbq.png'], // | Agnaktor
    [50, 'https://i.imgur.com/Kym9jlM.png'], // | Astalos
    [51, 'https://i.imgur.com/q7CzwJb.png'], // | Atlal - Ka
    [52, 'https://i.imgur.com/PtMDRxB.png'], // | Azure Rathalos
    [53, 'https://i.imgur.com/FmPWuD2.png'], // | Bazelgeuse
    [54, 'https://i.imgur.com/hCOQFsb.png'], // | Black Diablos
    [55, 'https://i.imgur.com/pwqG3Tt.png'], // | Gammoth
    [56, 'https://i.imgur.com/POjSnJU.png'], // | Brachydios
    [57, 'https://i.imgur.com/GkmVPTu.png'], // | Brute Tigrex
    [58, 'https://i.imgur.com/9rv9IKM.png'], // | Chameleos
    [59, 'https://i.imgur.com/qwoCY3C.png'], // | Deviljho
    [60, 'https://i.imgur.com/3dydhwP.png'], // | Glacial Agnaktor
    [61, 'https://i.imgur.com/tx9bmLd.png'], // | Glavenus
    [62, 'https://i.imgur.com/aksvSvD.png'], // | Gold Rathian
    [63, 'https://i.imgur.com/NeIG5Z3.png'], // | Gore Magala
    [64, 'https://i.imgur.com/4FqkUzn.png'], // | Ivory Lagiacrus
    [65, 'https://i.imgur.com/qYBypHv.png'], // | Kirin
    [66, 'https://i.imgur.com/EWTcBzr.png'], // | Kushala Daora
    [67, 'https://i.imgur.com/B463JYe.png'], // | Lagiacrus
    [68, 'https://i.imgur.com/KPGd831.png'], // | Lunastra
    [69, 'https://i.imgur.com/Ufx23GR.png'], // | Mizutsune
    [70, 'https://i.imgur.com/rDwaJFq.png'], // | Molten Tigrex
    [71, 'https://i.imgur.com/WtVZ72Z.png'], // | Oroshi Kirin
    [72, 'https://i.imgur.com/Rbw6Z0N.png'], // | Pink Rathian
    [73, 'https://i.imgur.com/dnzzgNj.png'], // | Rajang
    [74, 'https://i.imgur.com/b3v4a5l.png'], // | Sand Barioth
    [75, 'https://i.imgur.com/bx14irj.png'], // | Seregios
    [76, 'https://i.imgur.com/sah7HYe.png'], // | Shen Gaoren
    [77, 'https://i.imgur.com/fB7aNHt.png'], // | Silver Rathalos
    [78, 'https://i.imgur.com/BIUb7DU.png'], // | Teostra
    [79, 'https://i.imgur.com/mVYQPVr.png'], // | Vaal Hazak
    [80, 'https://i.imgur.com/GrXuCfL.png'], // | White Monoblos
    [81, 'https://i.imgur.com/90wlEWX.png'], // | Zinogre
    // A-Tier 18
    [82, 'https://i.imgur.com/zALuAi7.png'], // | Akantor
    [83, 'https://i.imgur.com/A56DdR3.png'], // | Ceadeus
    [84, 'https://i.imgur.com/PXsuNP5.png'], // | Chaotic Gore Magala
    [85, 'https://i.imgur.com/1hEG5c4.png'], // | Dah'ren Mohran
    [86, 'https://i.imgur.com/mHpomds.png'], // | Furious Rajang
    [87, 'https://i.imgur.com/Dd3TyXc.png'], // | Gogmazios
    [88, 'https://i.imgur.com/QIJdLaQ.png'], // | Jhen Moran
    [89, 'https://i.imgur.com/LzulcF5.png'], // |  Kulve Taroth
    [90, 'https://i.imgur.com/sRgFSSj.png'], // | Lao - Shan Lung
    [91, 'https://i.imgur.com/V4n8Ynu.png'], // | Nergigante
    [92, 'https://i.imgur.com/WjLoFSE.png'], // | Rusted Kushala Daora
    [93, 'https://i.imgur.com/R9qLdXX.png'], // | Savage Deviljho
    [94, 'https://i.imgur.com/lrdO5IT.png'], // | Shagaru Magala
    [95, 'https://i.imgur.com/b7vhRS6.png'], // | Stygian Zinogre
    [96, 'https://i.imgur.com/LSHbN7B.png'], // | Ukanlos
    [97, 'https://i.imgur.com/E74llnu.png'], // | Valstrax
    [98, 'https://i.imgur.com/mqwDy5y.png'], // | Yama Tsukami
    [99, 'https://i.imgur.com/nxmSIHf.png'], // | Zorah Magdaros
    // S-Tier 11
    [100, 'https://i.imgur.com/jDqbzyr.png'], // | Alatreon
    [101, 'https://i.imgur.com/N8duTTi.png'], // | Amatsu
    [102, 'https://i.imgur.com/EnPoA30.png'], // | Black Fatalis
    [103, 'https://i.imgur.com/laWm6wU.png'], // | Crimsion Fatalis
    [104, 'https://i.imgur.com/KFFj0ia.png'], // | Dalamadur
    [105, 'https://i.imgur.com/iPPTnf7.png'], // | Dalamadur
    [106, 'https://i.imgur.com/sPE89pT.png'], // | Dire Miralis
    [107, 'https://i.imgur.com/R3oBdzo.png'], // | Fat Handler
    [108, 'https://i.imgur.com/JibypZE.png'], // | Safi'jiiva
    [109, 'https://i.imgur.com/5VRWHzo.png'], // | White Fatalis
    [110, 'https://i.imgur.com/J2vlf3j.png'], // | Xeno'jiiva
]);

bot.login(process.env.token);
