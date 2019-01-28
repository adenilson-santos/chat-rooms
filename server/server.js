const app = require("express")();
const io = require("socket.io")(app.listen(3000, "192.168.0.2"));

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://reactuser:reactuserpass123@ds151864.mlab.com:51864/react-chat",
  { useNewUrlParser: true }
);

const Messages = require("./src/models/Messages.js");

const messages = [];
const users = [];

io.on("connection", socket => {
  users.push({
    name: socket.handshake.query.name,
    color: socket.handshake.query.color,
    id: socket.id
  });
  updateUsers();

  function updateUsers() {
    socket.emit("users", users);
    socket.broadcast.emit("users", users);
    socket.broadcast.emit("count users", users.length);
    socket.emit("count users", users.length);
  }

  //   socket.emit("get messages", Messages.find());
  socket.emit("get messages", messages);

  socket.on("new message", data => {
    const { author, content, createdAt } = data;

    const newMessage = {
      author,
      content,
      createdAt,
      color: socket.handshake.query.color
    };
    messages.push(newMessage);
    socket.broadcast.emit("new messages", newMessage);
    socket.emit("new messages", newMessage);
  });

  // socket.on("new user", data => {
  //   users.push(data.user);
  //   socket.broadcast.emit("new user", data.user);
  // });

  socket.on("disconnect", () => {
    for (var i = 0; i < users.length; i++) {
      if (users[i].id === socket.id) {
        users.splice(i, 1);
      }
    }
    updateUsers();
  });
});
