const botconfig = require('../json/botconfig.json');
const sqlite = require(`sqlite3`).verbose();
const Discord = require('discord.js');

module.exports.run = (bot, msg, args) => {
    
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
                .setColor(botconfig.colors.orange)
                .addField('Current Hunter Rank', curUserRank, true)
                .addField('XP', updXp, true)
                .addField('You joined this Server ', msg.member.joinedAt)
                .setFooter(`${difference} XP until your Hunter Rank increases!`, msg.author.displayAvatarURL({ dynamic: true }))
            return msg.reply(lvlEmbed);
        }
    });
}