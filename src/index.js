const telegramBot = require('node-telegram-bot-api');

require('dotenv').config()

const TOKEN = process.env.TOKEN;

let currentDay = 15;

const bot = new telegramBot(TOKEN, {polling: true});

const schedule = require('node-schedule');

const job = schedule.scheduleJob('25 13 * * *', function () {
    const message = `📅Day ${currentDay}`;
    sendMessage(message);
    currentDay++;
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `Received your message: ${msg.text}`);
    console.log(msg.text)
})

function sendMessage(message) {
    bot.sendMessage(743713648, message);
}


