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

    //Delete many
// db.collection('users').deleteMany({email: 'aaron@paradigmrpa.com'}).then((result)=>{
//     console.log(result);
// });

//Delete one
// db.collection('users').deleteOne({username: 'firstuser '}).then((result)=>{
//     console.log(result);
// });

//findone and delete
db.collection('users').findOneAndDelete({username: 'firstuser'}).then((result)=>{
    console.log(result);
});

    client.close();
});