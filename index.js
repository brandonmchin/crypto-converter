const express = require('express');
const morgan = require('morgan');
const socket = require('socket.io');
global.fetch = require('node-fetch');
const cryptocompare = require('cryptocompare');

const app = express();

// Middleware
app.use(morgan('tiny'));

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});

// Static files
app.use(express.static('public'));

// Initialize web socket server
const io = socket(server);

io.on('connection', (socket) => {
    console.log('[' + socket.id + '] : Connection established');
    // User has requested to convert a value
    socket.on('request', (data) => {
        cryptocompare.price(data.unitFrom, data.unitTo).then((result) => {
            const value = parseFloat(result[Object.keys(result)[0]]) * data.userValue;
            io.to(socket.id).emit('response', value);
        });
    });
});