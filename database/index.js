const mongoose = require('mongoose');
const mongoUri = 'mongodb://mikayla:bball03@ds147265.mlab.com:47265/instructors'
const option = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    reconnectTries: 30000,
    useNewUrlParser: true
};

const db = mongoose.connect(mongoUri, option).then(function(){

}, function(err){

});

module.exports = db;