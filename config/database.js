const moongoose =  require('moongoose');

const db = "mongodb+srv://mongodb:jfAmdDWtGgJiGyVK@cluster0.vcxtt.mongodb.net/<dbname>?retryWrites=true&w=majority"

const ConnectDB = async () =>{
    await moongoose.connect(db)
    console.log('datbase Connected');
}

module.exports = ConnectDB;