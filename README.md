# node-mysql-auto-backup

A Node.js project that allows you to backup your mysql database on your local directory.
It will notify you when the service is starting, in progress to backup and compeleted.

## Install dependencies
```
$ npm install
```

## Quick usage

Open the config.js file then fill in the required properties

```javascript
module.exports = {
    // mysql config
    mysql: {
        // host url for your mysql database
        host: '',
        // username
        user: '',
        // password
        password: '',
        // database
        database: ''
    },
    ...
};
```

## Requirements

Currently working on MAC

- **Mac OS X**: >= 10.8
- **Node.js installed**

## Run this project on startup

On the ProgramArguments key, 2nd string, make sure to set the path where node runs the server

Ex.

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
    <dict>
        <key>Label</key>
            <string>com.node.mysql.backup.plist</string>

        <key>ProgramArguments</key>
        <array>
            <string>/usr/local/bin/node</string>
            <string>/Users/username/Desktop/node-mysql-auto-backup/app.js</string>
        </array>

        <key>RunAtLoad</key>
        <true/>

        <key>KeepAlive</key>
        <true/>
    </dict>
</plist>
```

Copy the .plist file from the plist directory and paste it in the ~/Library/LaunchAgents/ folder

If you can't locate the ~/Library folder

Show
```
$ chflags nohidden ~/Library/
```

Hide

**Note:** Make sure you hide this folder after for security reasons.
```
$ chflags hidden ~/Library/
```

# Launch plist

```
$ launchctl load ~/Library/LaunchAgents/com.node.mysql.backup.plist
$ launchctl start com.node.mysql.backup
```


## Thanks to Open Source Software

`node-mysql-auto-backup` is made possible through Open Source Software. A very special thanks to all the modules `node-mysql-auto-backup` uses.
* [moment](http://momentjs.com/)
* [mysqldump](https://github.com/webcaetano/mysqldump)
* [node-notifier](https://github.com/mikaelbr/node-notifier)
* [node-schedule](https://github.com/node-schedule/node-schedule)

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)


