const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://localhost:1883");

setInterval(() => {
  client.publish("iiot/random", Date.now().toLocaleString());
}, 5000);