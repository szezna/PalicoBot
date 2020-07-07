const botconfig = require('../json/botconfig.json');
const monsters = require('../json/monsterdata.json');

module.exports.run = (bot, msg, args) => {
    if (msg.member.roles.cache.find(r => r.name === botconfig.roleHunter) && (!msg.member.roles.cache.find(r => r.name === botconfig.roleMods) &&
        !msg.member.roles.cache.find(r => r.name === botconfig.roleAdmin))) {
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
    if (msg.member.roles.cache.find(r => r.name === botconfig.roleMods) || msg.member.roles.cache.find(r => r.name === botconfig.roleAdmin) || msg.member.roles.cache.find(r => r.name === 'Hentai')) {
       
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