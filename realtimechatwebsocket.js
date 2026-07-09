// Real-Time Chat (WebSocket client)

// This code establishes a WebSocket connection to a chat server and handles sending and receiving messages in real-time.

const socket = new WebSocket("wss://your-chat-server.com");

socket.onmessage = (event) => {
  const msg = document.createElement("div");
  msg.textContent = event.data;

  document.getElementById("chat-box").appendChild(msg);
};

document.getElementById("send-btn").addEventListener("click", () => {
  const input = document.getElementById("chat-input");

  socket.send(input.value);

  input.value = "";
});
