import http from "http";

const port = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
  if (req.url === "/healthz") {
    res.writeHead(200, {"Content-Type": "text/plain"});
    return res.end("ok");
  }
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello from myapp\n");
});

server.listen(port, () => console.log(`Listening on ${port}`));
