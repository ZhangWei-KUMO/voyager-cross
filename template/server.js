
const express = require("express");
const next = require("next");
const fs = require("fs");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const { DESTINATION, createSitemap } = require("./sitemap");
const routes = require('./routes');
const handle = routes.getRequestHandler(app, ({ req, res, route, query }) => {
  app.render(req, res, route.page, query)
});

const server = express();
server.set("trust proxy", 1);
server.use(bodyParser.json({ limit: '10mb' }));
server.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
server.use(cookieParser());
server.use(compression());

server.use((req, res, next) => next());

app.prepare().then(() => {
  server.get("/sitemap.xml", (req, res) => {
    res.header("Content-Type", "application/xml");
    (async function sendXML() {
      let xmlFile = await createSitemap();
      res.send(xmlFile);
      fs.writeFileSync(DESTINATION, xmlFile);
    })();
  });
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log(`Start Application,the port number is ${3000}`);
  });
});

process.on("uncaughtException", (err) => {
  console.log(err);
});
