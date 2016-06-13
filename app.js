'use strict';



// Libraries
const mysqlDump = require('mysqldump');
const notifier = require('node-notifier');
const schedule = require('node-schedule');
const moment = require('moment');
const path = require('path');



// Configuration
var config = Object.assign({}, require('./config'));



// Backup path for your database
config.dbPath = path.join(__dirname, './backups/database/backup_' + moment().format('MM_DD_YYYY') + '.sql');



// Path where you store your icon
var iconPath = path.join(__dirname, './images/icon/overpass.png');



// Notify method
var notify = function (title, message) {
    notifier.notify({
        'title': title,
        'message': message,
        contentImage: iconPath,
        sound: true
    });
};



// Notification starts after 5 seconds
// Notify user that node mysql auto backup is running on background!
var runningTimeout = setTimeout(function () {
    notify(config.notify.start.title, config.notify.start.message);
    clearTimeout(runningTimeout);
}, 5000);



// Note: node-schedule uses military time
schedule.scheduleJob('0 0 2 * * *', function () {

    // Notify user that backup is in progress
    notify(config.notify.progress.title, config.notify.progress.message);
    
    // Dump mysql database
    mysqlDump(config, function (error) {
        if (!error)
            notify(config.notify.completed.title, config.notify.completed.message);
        else
            notify('Something went wrong!', error);
    });    
});