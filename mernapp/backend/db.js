const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://goFood:Dheeru123@cluster0.xs9vici.mongodb.net/gofoodmern?retryWrites=true&w=majority';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to the database successfully");
        try{
            const fetched_data = await mongoose.connection.db.collection("food_items");
        
            const data = await fetched_data.find({}).toArray();
            console.log(data);
        } catch(err){
            console.log(err);
        }
    } catch (error) {
        console.error("Failed to connect to the database:", error);
    }
}

module.exports = mongoDB;
