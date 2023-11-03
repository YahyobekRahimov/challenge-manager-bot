const schedule = require('node-schedule');

const rule = new schedule.RecurrenceRule();
rule.hour = 14;
rule.minute = 5;
rule.second = 45;

const dailyMessageJob = schedule.scheduleJob(rule, sendDailyMessage);
function sendDailyMessage() {
    console.log('Day 1');
}
