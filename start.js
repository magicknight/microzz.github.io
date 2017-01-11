var process = require('child_process');

process.exec('hexo server -p 80', function (error, stdout, stderr) {
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});