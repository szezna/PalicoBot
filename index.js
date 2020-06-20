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
            max = Math.floor(1);
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
    [1, 'https://i.imgur.com/A56DdR3.png'],  // | Anjanath
    [2, 'https://i.imgur.com/cfjKUA3.png'],  // | Arzuros
    [3, 'https://imgur.com/sKbGSXv'],  // | Pukei Pukei
    [4, 'https://imgur.com/MG3p0Hm'],  // | Qurupeco
    [5, 'https://imgur.com/Oteqxbb'],  // | Rathalos
    [6, 'https://imgur.com/1gR3iCY'],  // | Rathian
    [7, 'https://imgur.com/ZPuaeCG'],  // | Royal Ludroth
    [8, 'https://imgur.com/6zEVxlO'],  // | Ruby Basarios
    [9, 'https://imgur.com/9ghtUAh'],  // | Shogun Ceanataur
    [10, 'https://imgur.com/eYZnM4t'], // | Tigrex
    [11, 'https://imgur.com/sS9DqGj'], // | Tobi Kadachi
    [12, 'https://imgur.com/TkgFYEU'], // | Uragaan
    [13, 'https://imgur.com/yWc2in1'], // | Volvidon
    [14, 'https://imgur.com/5OSW64N'], // | Yian Garuga
    [15, 'https://imgur.com/0Fdljc7'], // | Barioth
    [16, 'https://imgur.com/xkFU8Kf'], // | Diablos
    [17, 'https://imgur.com/lH8gOND'], // | Congalala
    [18, 'https://imgur.com/3hSiBMe'], // | Yian Kut Ku
    [19, 'https://imgur.com/qAK3rmC'], // | Daimyo Hermitaur
    [20, 'https://imgur.com/0NGoeji'], // | Zamtrios
    [21, 'https://imgur.com/8zPVtqa'], // | Dodogama
    [22, 'https://imgur.com/KucJJzw'], // | Barroth
    [23, 'https://imgur.com/1Ej64Cs'], // | Basarios
    [24, 'https://imgur.com/kaXrMv0'], // | Blangonga
    [25, 'https://imgur.com/zPH2rjM'], // | Cephadrome
    [26, 'https://imgur.com/XWldpPH'], // | Emerald Congalala
    [27, 'https://imgur.com/vQ9Q2xE'], // | Gravios
    [28, 'https://imgur.com/yx4KKwm'], // | Gigginox
    [29, 'https://imgur.com/wGvFJr2'], // | Great Girros
    [30, 'https://imgur.com/4lGN909'], // | Great Baggi
    [31, 'https://imgur.com/vR9tYvz'], // | Gobul
    [32, 'https://imgur.com/bARH8be'], // | Great Jaggi
    [33, 'https://imgur.com/iN4l5jG'], // | Green Plesioth
    [34, 'https://imgur.com/87hJOhY'], // | Gypceros
    [35, 'https://imgur.com/asjhyte'], // | Jyuratodos
    [36, 'https://imgur.com/iSwlnX3'], // | Jade Barroth
    [37, 'https://imgur.com/Id7lguf'], // | Kecha Wacha
    [38, 'https://imgur.com/uotwQne'], // | Lavasioth
    [39, 'https://imgur.com/HiUOyXI'], // | Lagombi
    [40, 'https://imgur.com/weKzd2o'], // | Khezu
    [41, 'https://imgur.com/xcFPkR1'], // | Legiana
    [42, 'https://imgur.com/QAt9xZ5'], // | Malfestio
    [43, 'https://imgur.com/qIhkeVD'], // | Nerscylla
    [44, 'https://imgur.com/RNamIO8'], // | Nargacuga
    [45, 'https://imgur.com/gCMMNc2'], // | Nibelsnarf
    [46, 'https://imgur.com/nkkXTyB'], // | Odogaron
    [47, 'https://imgur.com/JFhGR07'], // | Paolumu
    [48, 'https://imgur.com/NbSXHx0'], // | Plesioth

    // B-Tier 33
    [49, 'https://imgur.com/I159Nbq'], // | Agnaktor
    [50, 'https://imgur.com/Kym9jlM'], // | Astalos
    [51, 'https://imgur.com/q7CzwJb'], // | Atlal - Ka
    [52, 'https://imgur.com/PtMDRxB'], // | Azure Rathalos
    [53, 'https://imgur.com/FmPWuD2'], // | Bazelgeuse
    [54, 'https://imgur.com/hCOQFsb'], // | Black Diablos
    [55, 'https://imgur.com/pwqG3Tt'], // | Gammoth
    [56, 'https://imgur.com/POjSnJU'], // | Brachydios
    [57, 'https://imgur.com/GkmVPTu'], // | Brute Tigrex
    [58, 'https://imgur.com/9rv9IKM'], // | Chameleos
    [59, 'https://imgur.com/qwoCY3C'], // | Deviljho
    [60, 'https://imgur.com/3dydhwP'], // | Glacial Agnaktor
    [61, 'https://imgur.com/tx9bmLd'], // | Glavenus
    [62, 'https://imgur.com/aksvSvD'], // | Gold Rathian
    [63, 'https://imgur.com/NeIG5Z3'], // | Gore Magala
    [64, 'https://imgur.com/4FqkUzn'], // | Ivory Lagiacrus
    [65, 'https://imgur.com/qYBypHv'], // | Kirin
    [66, 'https://imgur.com/EWTcBzr'], // | Kushala Daora
    [67, 'https://imgur.com/B463JYe'], // | Lagiacrus
    [68, 'https://imgur.com/KPGd831'], // | Lunastra
    [69, 'https://imgur.com/Ufx23GR'], // | Mizutsune
    [70, 'https://imgur.com/rDwaJFq'], // | Molten Tigrex
    [71, 'https://imgur.com/WtVZ72Z'], // | Oroshi Kirin
    [72, 'https://imgur.com/Rbw6Z0N'], // | Pink Rathian
    [73, 'https://imgur.com/dnzzgNj'], // | Rajang
    [74, 'https://imgur.com/b3v4a5l'], // | Sand Barioth
    [75, 'https://imgur.com/bx14irj'], // | Seregios
    [76, 'https://imgur.com/sah7HYe'], // | Shen Gaoren
    [77, 'https://imgur.com/fB7aNHt'], // | Silver Rathalos
    [78, 'https://imgur.com/BIUb7DU'], // | Teostra
    [79, 'https://imgur.com/mVYQPVr'], // | Vaal Hazak
    [80, 'https://imgur.com/GrXuCfL'], // | White Monoblos
    [81, 'https://imgur.com/90wlEWX'], // | Zinogre

    // A-Tier 18
    [82, 'https://imgur.com/zALuAi7'], // | Akantor
    [83, 'https://imgur.com/A56DdR3'], // | Ceadeus
    [84, 'https://imgur.com/PXsuNP5'], // | Chaotic Gore Magala
    [85, 'https://imgur.com/1hEG5c4'], // | Dah'ren Mohran
    [86, 'https://imgur.com/mHpomds'], // | Furious Rajang
    [87, 'https://imgur.com/Dd3TyXc'], // | Gogmazios
    [88, 'https://imgur.com/QIJdLaQ'], // | Jhen Moran
    [89, 'https://imgur.com/LzulcF5'], // |  Kulve Taroth
    [90, 'https://imgur.com/sRgFSSj'], // | Lao - Shan Lung
    [91, 'https://imgur.com/V4n8Ynu'], // | Nergigante
    [92, 'https://imgur.com/WjLoFSE'], // | Rusted Kushala Daora
    [93, 'https://imgur.com/R9qLdXX'], // | Savage Deviljho
    [94, 'https://imgur.com/lrdO5IT'], // | Shagaru Magala
    [95, 'https://imgur.com/b7vhRS6'], // | Stygian Zinogre
    [96, 'https://imgur.com/LSHbN7B'], // | Ukanlos
    [97, 'https://imgur.com/E74llnu'], // | Valstrax
    [98, 'https://imgur.com/mqwDy5y'], // | Yama Tsukami
    [99, 'https://imgur.com/nxmSIHf'], // | Zorah Magdaros

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
