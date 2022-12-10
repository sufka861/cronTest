const cron = require("node-cron");
const { schedule } = require("node-cron");


cron.schedule("* * * * *", function(){
    console.log("starting cron function ------");
    const time = new Date.now();
    console.log("time in string: " + time.toString());
    console.log("time in ISO: " + time.toISOString());
})