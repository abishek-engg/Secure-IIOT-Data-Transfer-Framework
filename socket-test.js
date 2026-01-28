const { io } = require("socket.io-client");

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("Connected to socket server");
});

socket.on("live_data", (data) => {
  console.log("Received live data:", data);
});
