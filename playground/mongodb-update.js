const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/invusers', (err, client)=>{
    if(err){
        return console.log('Unable to connect to server')
    }
    console.log('Connected to server');
    const db = client.db('invusers')

    let email = "aaron@paradigmrpa.com";
    let privileges = {
        createusers: true,
        deleteusers: false
    } 

    db.collection('users').findOneAndUpdate({
        _id: new ObjectID('5b0d69a7fb3a2fe7aa93bd0e') 
    },{
        $set: {
            username: 'updated username'
        }
    },{
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });
    

    client.close();
});