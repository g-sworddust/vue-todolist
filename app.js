const express = require('express');
const path = require('path');

const app = express();

let conf = {
    port: 8888,
    host: 'localhost'
}

//静态web服务
app.use(express.static(path.join(__dirname, 'public')));


app.listen(conf.port, conf.host, () => {
    console.log(`server is running on http://${conf.host}:${conf.port}`);
})