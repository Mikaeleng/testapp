/**
 * Created by mikaeleng on 2016/08/22.
 */
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/mongotest',
    function(err, db) {
        console.log('Connected to MongoDB!');


        var collection = db.collection('testing');
        // insert a new item using the collection's insert function:
        collection.insert({'title': 'Snowcrash'}, function(err, docs) {
            // on successful insertion, log to the screen the new
            // collection's details:
            console.log(docs);
            // finally close the connection:

            collection.findOne({
                title: 'Snowcrash'
            }, function(err, doc) {
                console.log(doc._id + ' - ' + doc.title);
                db.close();
            });
            db.close();
        });
    });