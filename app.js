require('pmx').init({
  http : true
});
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('thanks nifty')
});

app.get('/error', (req, res, next) => {
  next(new Error('Fail'))
})

app.listen(3000);

process.on('SIGINT', function() {

  // TODO: do stuff here to clean up before reload
  // (e.g. close out DB connections, queue a job)

  setTimeout(function() {
    // 300ms later the process kills itself to allow a restart
    process.exit(0);
  }, 300);

});
