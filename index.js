const express = require('express')
const app = express()
const port = 3000
const { exec } = require('node:child_process');
require('dotenv').config()


app.get('/ping', (req, res) => {
    res.send('pong')
})

app.get('/screen-off', (req, res) => {
    exec('xset dpms force off;', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stdout);
    });
    res.send('off')
})

app.get('/screen-on', (req, res) => {
    exec('xset dpms force on', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stdout);
    });
    res.send('on')
})

exec(`chromium-browser ${process - env.WEB_SITE} --start-fullscreen;`, (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(stdout);
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})