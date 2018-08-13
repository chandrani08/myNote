const express = require ('express');
const router = express.Router();
const mongoose = require ('mongoose');
const Notes = require('../models/notes');//importing notes model
const Users= require('../models/users');//importing users model

//const db = "mongodb://cmitra:pwd123@ds121251.mlab.com:21251/mynote";

//To connect to local database:
const db = "mongodb://localhost/mynote";

mongoose.Promise = global.Promise;// to avoid warnings that mongoose might throw

mongoose.connect(db,function(err){
   if(err){
         console.error("Error!" + err);
     }

 });



// a GET request to read data from database
router.get('/notes', function(req,res){
    console.log("Get request for all notes...");
    Notes.find({}) //empty because we dont have a search criteria;;;Mongoose provides a find method on the notes model which is connected to notes collection in the notes db
    .exec(function(err, notes){
        if(err){
            console.log("Error retrieving notes");
        }else {
            res.json(notes);
        }
    });
});

router.get('/notes/:id', function(req,res){
    console.log("Get request for a single note");
    Notes.findById(req.params.id)
    .exec(function(err, note){
        if(err){
            console.log("Error retrieving note");
        }else {
            res.json(note);
        }
    });
});


router.post('/notes', function(req,res){
     console.log("Post a note");
     var newNote = new Notes();
     newNote.username = req.body.username;
     newNote.title = req.body.title;
     newNote.content = req.body.content;

     var arr = req.body.tags.split(',');

     newNote.tags = arr;
     newNote.date_created = req.body.date_created;
     

    newNote.save(function(err,insertedNote){
         if(err){
            console.log('Error saving note');
        }else{
             res.json(insertedNote);
        }
    });
 });


 router.put('/notes/:id', function(req,res){
     console.log('Update a note');
     Notes.findByIdAndUpdate(req.params.id,//id of the note we want to update which is retrieved from the request
         {
             $set:{username: req.body.username,title: req.body.title, content:req.body.content,tags:req.body.tags,date_created:req.body.date_created}
        },
        {
            new:true //if this is set to true the method will return the updated note, set to false will return the original video
         },
         function(err,updatedNote){
             if (err){
                 res.send("Error updating note");
             }else{
                 res.json(updatedNote);
             }
         }
     );
 });

router.delete('/notes/:id', function(req,res){
    console.log('Deleting a note');
         Notes.findByIdAndRemove(req.params.id, function(err,deletedNote){
            if(err){
                 res.send("Error deleting note");
             }else{
                 res.json(deletedNote)
             }
         });
    
 });


 router.get('/query', function(req, res){
    console.log("In backend query function");
     
    var searchQuery = {};
    console.log(req.query.tags);

    if (req.query.tags)
    searchQuery = { tags: req.query.tags};

    Notes.find(searchQuery) 
        .exec(function(err, notes){
        if (err){
            res.status(400);
            res.send("Error finding note");
        }
        else {
            console.log("returning matched notes");
             res.json(notes);
        }
    }) 
 });




// router.get('/users', function(req,res){
//     console.log("Get request for all users");
//     Users.find({})
//      .exec(function(err, users){
//          if(err){
//              console.log("Error retrieving users");
//          }else {
//             res.json(users);
//         }
//     });
//  });


//  router.get('/users/:id', function(req,res){
//     console.log("Get request for a single user");
//     Users.findById(req.params.id)
//    .exec(function(err, user){
//         if(err){
//             console.log("Error retrieving user");
//          }else {
//            res.json(user);
//         }
//     });
// });


//  router.post('/users', function(req,res){
//     console.log("Post a new user");
//      var newUser = new Users();
//      newUser.username = req.body.username;
//     newUser.first_name = req.body.first_name;
//     newUser.last_name = req.body.last_name;
//     newUser.save(function(err,insertedUser){
//          if(err){
//              console.log('Error saving user');
//        }else{
//             res.json(insertedUser);         }
//     });
// });

// router.put('/users/:id', function(req,res){
//     console.log('Update a user');
//     Users.findByIdAndUpdate(req.params.id,
//         {
//             $set:{username: req.body.username,first_name:req.body.first_name,last_name:req.body.last_name}
//         },
//         {
//            new:true 
//         },
//         function(err,updatedUser){
//             if (err){
//                 res.send("Error updating user");
//             }else{
//                 res.json(updatedUser);
//             }
//         }
//     );
// });


// router.delete('/users/:id', function(req,res){
//      console.log('Deleting a user');
//          Users.findByIdAndRemove(req.params.id, function(err,deletedUser){
//              if(err){
//                  res.send("Error deleting user");
//              }else{
//                  res.json(deletedUser)
//              }
//          });
    
//  });

module.exports = router;
