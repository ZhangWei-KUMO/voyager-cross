const express = require("express");
const next = require("next");

const server = express();

server.get("*", (req, res) => res.status(200).sendFile('./index.html'));

server.listen(3000, (err) => {
  if (err) throw err;
  console.log(`启动安全服务器,端口号：3000`);
});

process.on("uncaughtException", (err) => {
  console.log(err);
});
