var db = require('../db');


module.exports = {
  messages: {
    get: function(callback) {
      db.connect();
      var queryString = 'select * from messages';
      var queryArgs = [];
      db.query(queryString, queryArgs, function(err, results) {
        if (err) {
          console.log('error: ', err);
          db.end();
        } else {
          callback(results);
          db.end();
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

