var db = require('../db');


module.exports = {
  messages: {
    get: function(callback) {
      //db.connect();
      var queryString = 'select m.mid as objectId, u.username, m.text, r.roomname, m.createdAt, m.updatedAt from messages as m, users as u, rooms as r';
      var queryArgs = [];
      db.query(queryString, queryArgs, function(err, results) {
        if (err) {
          console.log('error:', results);
          //db.end();
        } else {
          //db.end();
          callback(results);
        }
      });

    }, // a function which produces all the messages


    post: function() {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function() {},
    post: function() {}
  }
};



// SELECT messages.mid AS objectId, users.username, rooms.roomname, messages.body
// FROM users INNER JOIN (rooms INNER JOIN messages ON rooms.[rid] = messages.rid_rooms) ON users.[uid] = messages.uid_users;


