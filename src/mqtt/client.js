const mqtt = require("mqtt");
const { handleMessage } = require("./handlers");

const client = mqtt.connect(process.env.MQTT_URL);

client.on("connect", () => {
  client.subscribe("iiot/random");
});

client.on("message", handleMessage);

module.exports = client;