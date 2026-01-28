const { emitSensorData } = require("../websocket/socket");

function handleMessage(topic, message) {
  const value = (message.toString());
  emitSensorData({ value, timestamp: Date.now() });
}

module.exports = { handleMessage };