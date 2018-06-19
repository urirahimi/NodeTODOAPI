// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
    if (err) {
        return console.log('Unable to connect to Mongo DB' + err);
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Insert new doc into users (name, age, location)
    // new collection name and error handling code

    db.collection('Users').insertOne({
        name: 'Uri',
        age: 22,
        location: 'LA'
    }, (err, result) =>{
        if (err) return console.log('Unable to insert into users');
        console.log(JSON.stringify(result.ops, undefined, 2));
    })

    client.close();
});