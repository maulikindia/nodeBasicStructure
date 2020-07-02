let mongoose = require('mongoose');

let dbUrl = 'mongodb://localhost:27017/structureDb';

    mongoose.connect(dbUrl, { useNewUrlParser: true }, async (err) => {

        if (err) {
            console.log('db ok.');
        }
    });



