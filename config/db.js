const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_ADRESSE}:${process.env.MONGO_PORT}`,{
    useNewUrlParser: true
})
.then(() => {console.log('Connected to MongoDB');})
.catch(err => { console.log("Failed to connect to MongoDB ", err); });