const cron = require("node-cron");
const { schedule } = require("node-cron");


cron.schedule("* * * * *", function(){
    console.log("starting cron function ------");
    const time = new Date('05 October 2011 14:48 UTC');
    console.log("time in string: " + time.toString());
    console.log("time in ISO: " + time.toISOString());
})