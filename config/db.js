let mongoose = require('mongoose');

// let dbUrl = 'mongodb://localhost:27017/structureDb';
let dbUrl = 'mongodb+srv://myuser:myuser@cluster0.1etyj.gcp.mongodb.net/structureDb'

mongoose.connect(dbUrl, { useNewUrlParser: true }, async (err) => {
    if (!err) {
        console.log('db ok.');
    }
    else if (err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n', err);
    }
});




