const RedisSMQ = require("rsmq")

const rsmq = new RedisSMQ({
    host: "localhost",
    port: 6379,
    ns: "rsmq"
});

const create_queue = async () => {
  try {
      let response = await rsmq.createQueueAsync({
          qname: "emailqueue",
      })
      console.log(response);
      if (response === 1 ) {
          console.log("Queue created", response);
      }
      } catch (err) {

      if (err.name == 'queueExists')
           console.log(" DQueue Exists")

      else ("redis error" )
  }
}

const list_queue = async () => {
  try {
    let response = await rsmq.listQueuesAsync()
    console.log(response);
  }
  catch (err) {
    console.log(err);
  }
}

const get_queue_attribute = async () => {
  try {
    let response = await rsmq.getQueueAttributesAsync({ qname: "emailqueue" })
    console.log(response);
  }
  catch (err) {
    console.log(err);
  }
}

const receive_message = async () => {
  try {
    let response = await rsmq.receiveMessageAsync({ qname: "emailqueue" })
    console.log(response);
  }
  catch (err) {
    console.log(err);
  }
}

const send_message = async (message) => {
  try {
    let response = await rsmq.sendMessageAsync({ qname: "emailqueue", message })
    console.log(response);
  }
  catch (err) {
    console.log(err);
  }
}

const delete_queue = async () => {
  try {
    let response = await rsmq.deleteQueueAsync({ qname: "emailqueue" })
    console.log(response);
  }
  catch (err) {
    console.log(err);
  }
}

create_queue()

module.exports = {
  create_queue,
  list_queue,
  get_queue_attribute,
  receive_message,
  send_message,
  delete_queue
}
