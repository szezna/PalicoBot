const sqlite = require(`sqlite3`).verbose();
const Discord = require('discord.js');
const botconfig = require('../json/botconfig.json');

module.exports.run = (bot, msg) => {
    if(msg.author.bot) { return; }

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
            db.run(`UPDATE XPDATA SET xp = ? WHERE userid = ?`, [updXp, userID])

            if (nxtLvl <= updXp) {
                curUserRank = curUserRank + 1;
                db.run(`UPDATE XPDATA SET rank = ? WHERE userid = ?`, [curUserRank, userID])
                let lvlup = new Discord.MessageEmbed()
                    .setTitle('Your Hunter Rank increased! Now go hunt some monsters?')
                    .setColor(botconfig.colors.orange)
                    .addField('Next Hunter Rank: ', curUserRank + 1)
                msg.reply(lvlup);
            }
            db.close();
            return;
        }
    });
}