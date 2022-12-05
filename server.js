const { createServer } = require("http");
const next = require("next");
const { parse } = require("url");

const dev = process.env.BUILD_ENV !== "production";
const hostname = "localhost";
const port = 3000;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

// show images on nextjs route
const serveStatic = require("serve-static");
const serve = serveStatic("public");

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;
    try {
      if (pathname.startsWith("public/icons")) {
        serve(req, res);
      } else {
        handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error(err);
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  }).listen(port, hostname, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});

    

// // TODO: Next.js 11 doesn't support middlewares, remove custom server config after upgrading to 12 or higher
// app.prepare().then(() => {
//   createServer(async (req, res) => {
//     try {
//       const parsedUrl = parse(req.url, true);
//       handle(req, res, parsedUrl);
//     } catch (err) {
//       console.error("Error occurred handling", req.url, err);
//       res.statusCode = 500;
//       res.end("internal server error");
//     }
//   }).listen(port, (err) => {
//     if (err) throw err;
//     console.log(`> Ready on http://${hostname}:${port}`);
//   });
// });
