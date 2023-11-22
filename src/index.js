const telegramBot = require('node-telegram-bot-api');

require('dotenv').config()

const TOKEN = process.env.TOKEN;

let currentDay = 17;

const bot = new telegramBot(TOKEN, {polling: true});

const schedule = require('node-schedule');

const job = schedule.scheduleJob('0 5 * * *', function () {
    const message = `📅Day ${currentDay}`;
    sendMessage(message, -995958458);
    currentDay++;
});
const askForDailyReport = schedule.scheduleJob('0 21 * * *', function () {
    const message = `@YahyobekRahimov @TheIlhomjon \n Have you, guys, done today's push-ups???`;
    sendMessage(message, -995958458);
});
const motivateUser = schedule.scheduleJob('0 7 * * *', function () {
    const message = `@YahyobekRahimov @TheIlhomjon \n Are you ready to do today's push-ups? If yes, reply to me with "Yes" `;
    sendMessage(message, -995958458);
});

bot.on('message', (msg) => {
    if (msg.text.toLowerCase() === 'yes') {
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, `Great! Keep it up!`);
    }
})

function sendMessage(message, chatId) {
    bot.sendMessage(chatId, message);
}



