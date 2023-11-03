const telegramBot = require('node-telegram-bot-api');

require('dotenv').config()

const TOKEN = process.env.TOKEN;

const bot = new telegramBot(TOKEN, {polling: true});

const schedule = require('node-schedule');

const rule = new schedule.RecurrenceRule();
rule.hour = 14;
rule.minute = 11;
rule.second = 35;

const dailyMessageJob = schedule.scheduleJob(rule, sendMessage);

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `Received your message: ${msg.text}`);
    console.log(msg.text)
})

function sendMessage() {
    let message = 'Day 1';
    bot.sendMessage(743713648, message);
}

