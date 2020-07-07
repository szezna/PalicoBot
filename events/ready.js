const sqlite = require(`sqlite3`).verbose();

module.exports = bot => {
    require('console-stamp')(console, { pattern: 'dd/mm/yyyy HH:MM:ss' });
    console.log(`${bot.user.username} is now online!`)

    // Create/Read from Database
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
}
