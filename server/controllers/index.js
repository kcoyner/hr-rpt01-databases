var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      //console.log(req.url);
      models.messages.get(function(results){
        //res.writeHead(200, {'Content-Type': 'text/html'});
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({results: results}));
      });

    }, // a function which handles a get request for all messages



    post: function (req, res) {
      var message = '';
      var headers = {};
      req.on('data', function(chunk) {
        message += chunk;
        //console.log('message: ', message);
      }).on('end', function() {

        var test = JSON.parse(message);
        console.log(test);
        // var test = JSON.parse(message);
        // console.log(test);
        // models.messages.post(function(message) {
        // //  lines 31-33
        // });
        headers['Content-Type'] = 'application/json';
        res.writeHead(200, headers);
        res.end('test');
      }); // a function which handles posting a message to the database
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }

};

