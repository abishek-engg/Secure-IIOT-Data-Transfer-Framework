let io;

function initSocket(server) {
  const { Server } = require("socket.io");
  io = new Server(server, { cors: { origin: "*" } });
  
  io.on("connection", () => {
    console.log("Frontend connected");
  });
}

function emitSensorData(data) {
  if (io) io.emit("live_data", data);
}

module.exports = initSocket;
module.exports.emitSensorData = emitSensorData;
