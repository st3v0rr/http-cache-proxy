const express = require('express');
const apicache = require("apicache");
const expressHttpProxy = require('express-http-proxy');

// create express server
let app = express();

// register cache middleware
app.get('/*', cacheMiddleware());
app.options('/*', cacheMiddleware());

// register proxy middleware
app.use(expressHttpProxy(process.env.PROXYHOST));

// start express server
const APP_PORT = process.env.PORT || 8080;
app.listen(APP_PORT, () => {
  console.log(`External CORS cache server started at port ${APP_PORT}`);
});

function cacheMiddleware() {
  const cacheOptions = {
    debug: true,
    statusCodes: { include: [200] },
    defaultDuration: process.env.CACHETIME || 60000,
    appendKey: (req, res) => req.method
  };
  return apicache.options(cacheOptions).middleware();
}
