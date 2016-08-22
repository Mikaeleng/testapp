//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/chapter3';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        //HURRAY!! We are connected. :)
        console.log('Connection established to', url);

        // Get the documents collection
        var collection = db.collection('newCollection');
        // do some work here with the database.

        // Insert some users
        var user1 = {name: 'Jason Krol', website: 'http://kroltech.com'};
        var user2 = {name: 'Brian Know', website: 'http://weaf'};
        var user3 = {name: 'Elsa Bright', website: 'http://e'};

        collection.insert([user1, user2, user3], function (err, result) {
            if (err) {
                console.log(err);
            } else {
                // console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
            }
            //Close connection
        });
        collection.find({name: 'Jason Krol'}).toArray(function (err, result) {
            if (err) {
                console.log(err);
            } else if (result.length) {
                console.log('Found:', result);
            } else {
                console.log('No document(s) found with defined "find" criteria!');
            }
        });
        db.close();
    }
});

/*

 MongoClient.connect(connectionUrl, function(err, db) {'

 // Get some collection
 var collection = db.collection(sampleCollection);

 collection.insert(chapters,function(error,result){
 //here result will contain an array of records inserted
 if(!error) {
 console.log("Success :"+result.ops.length+" chapters
 inserted!");
 } else {
 console.log("Some error was encountered!");
 }
 db.close();
 });
 });

 */