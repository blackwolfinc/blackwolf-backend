const MongoClient = require('mongodb').MongoClient
const connection = "mongodb://localhost:27017"


const db = new MongoClient(connection);

(async ()=>{
    try {
        await db.connect()
    } catch (error) {
        console.log(error)
    }
})();


module.exports= db