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

    // db.collection('users').insertOne({
    //     username: 'firstuser',
    //     password: 'testpass',
    //     email: email,
    //     privileges: privileges
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to create new user', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2)) 
    //     console.log(JSON.stringify(result.ops[0], undefined, 2)) 
    //     console.log(result.ops[0]._id.getTimestamp()); 

    // });

    // db.collection('users').find({
    //     _id: new ObjectID('5b082a2fd775a535a9687d73')
    // }).toArray().then((docs)=>{
    //     console.log('User data');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log(`Failed`, err);
    // });

    db.collection('users').find().count().then((count)=>{
        console.log(`User data count: ${count}`);
    }, (err)=>{
        console.log(`Failed`, err);
    }); 

    client.close();
});