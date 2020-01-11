const Queue = require("./emailque")

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

setInterval(async function () {
  await Queue.get_queue_attribute()
  const value = getRandomInt(100)
  console.log(`value is ${value}`);
  Queue.send_message(`${value}`)
}, 1000);
