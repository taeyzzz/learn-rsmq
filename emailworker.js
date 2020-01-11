const moment = require('moment');
const RedisSMQ = require("rsmq-worker")


const worker = new RedisSMQ( "emailqueue" ,{
    host: "localhost",
    port: 6379,
    ns: "rsmq"
});

worker.on( "message", function( msg, next, id ){
  try {
    console.log(msg);
    next()
  }
  catch (err) {
    console.log(err);
  }
});

  // optional error listeners
worker.on('error', function( err, msg ){
  console.log( "ERROR", err, msg.id );
});
worker.on('data', function(msg){
  const created = moment(new Date(msg.sent)).format('MMMM Do YYYY, h:mm:ss a');
  console.log(msg);
  console.log(created);
})
worker.on('deleted', function(id){
  // console.log(id);
})
worker.on('exceeded', function( msg ){
  console.log( "EXCEEDED", msg.id );
});
worker.on('timeout', function( msg ){
  console.log( "TIMEOUT", msg.id, msg.rc );
});

worker.start();
