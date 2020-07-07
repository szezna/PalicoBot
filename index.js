const Discord = require('discord.js');
const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const supersecret = require('./json/supersecret.json');
const fs = require('fs').promises;
const path = require('path');
bot.commands = new Map();

bot.login(supersecret.token);

// read all events in event folder
fs.readdir(path.join(__dirname, 'events'))
    .then(files => {
        files.forEach(file => {
            if (!file.endsWith('.js')) {
                return;
            }
            let eventName = file.substring(0, file.indexOf('.js'));
            let eventModule = require(path.join(__dirname, 'events', eventName))

            bot.on(eventName, eventModule.bind(null, bot));
        })
    }).catch(err => console.log(err));

// read all commands in commands folder
fs.readdir(path.join(__dirname, 'commands'))
    .then(files => {
        files.forEach(file => {
            if (!file.endsWith('.js')) {
                return;
            }
            let cmdName = file.substring(0, file.indexOf('.js'));
            let cmdModule = require(path.join(__dirname, 'commands', cmdName))
            bot.commands.set(cmdName, cmdModule);
        })
    }).catch(err => console.log(err));