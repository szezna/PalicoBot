const functions = require('../functions.js');

module.exports.run = (bot, msg) => {
    if (msg.author.id === '231474317051953155') {
    msg.reply('random number: ' + functions.roll(0, 150) + '\nHello: ' + functions.hello());
    }
}