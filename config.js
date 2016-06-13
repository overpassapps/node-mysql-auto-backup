module.exports = {
    // mysql config
    mysql: {
        // host url for your mysql database
        host: '', // required
        // username
        user: '', // required
        // password
        password: '', // required
        // database
        database: '' // required
    },
    notify: {
        start: {
            title: 'Service running',
            message: 'Node mysql auto backup app is running!'
        },
        progress: {
            title: 'Backing up', 
            message: 'mysql auto backup is starting...'
        },
        completed: {
            title: 'Backup notifier', 
            message: 'Overpass mysql database downloaded successfully!'
        }
    }
};