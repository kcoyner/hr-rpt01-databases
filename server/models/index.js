var db = require('../db');

var getUserID = function (username, callback) {
  var queryString = 'SELECT uid from users where username = ' + JSON.stringify(username);
  var myQuery = db.query(queryString, function(err, userID){
    if (err) {
      console.log('UserID lookup error: ', err);
    } else {
      var userID = JSON.stringify(userID);

      if ( userID.length === 0 ) {
        //createNewUser(username);
      } else {
      console.log(JSON.parse(userID)[0].uid);
      // return the id
      //console.log(userID[0]);
      //console.log(JSON.stringify(userID));  // [{'uid': 2}]
      }
    }
  });

  //return {uid: val, rid: val}
};

module.exports = {
  messages: {
    get: function(callback) {
      //db.connect();
      var queryString = 'SELECT messages.mid AS objectId, users.username, rooms.roomname, messages.text, messages.createdAt as created, messages.updatedAt FROM users INNER JOIN (rooms INNER JOIN messages ON rooms.rid = messages.rid_rooms) ON users.uid = messages.uid_users order by ?? desc limit ?';
      var queryArgs = ['created', 100];
      var myQuery = db.query(queryString, queryArgs, function(err, results) {
        if (err) {
          console.log('Query error:', results);
        } else {
          callback(results);
        }
      });

    }, // a function which produces all the messages


    post: function(message, callback) {
      getUserID(message.username);
      var queryString = 'INSERT into messages (`uid_users`, `rid_rooms`, `text`) VALUES (?, ?, ?)';
      var queryArgs = [1, 1, message.text];
      var myQuery = db.query(queryString, queryArgs, function(err, results) {
        console.log(myQuery.sql);
        if (err) {
          console.log('Query error:', err);
        } else {
          callback();
        }
      });
      // read object and check if user exists in table
      //  sql insert

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function() {},
    post: function() {}
  }
};



// SELECT messages.mid AS objectId, users.username, rooms.roomname, messages.body FROM users INNER JOIN (rooms INNER JOIN messages ON rooms.[rid] = messages.rid_rooms) ON users.[uid] = messages.uid_users;

      // var queryString = 'select m.mid as objectId, u.username, m.text, r.roomname, m.createdAt, m.updatedAt from messages as m, users as u, rooms as r';

