const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, 'dist');
const portArg = process.argv.indexOf('--port');
const port = Number(portArg >= 0 ? process.argv[portArg + 1] : process.env.PORT) || 5176;
const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.json': 'application/json',
  '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.pdf': 'application/pdf'
};

http.createServer((req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400); res.end('Bad request'); return; }
  if (!['GET', 'HEAD'].includes(req.method)) {
    res.writeHead(405, { Allow: 'GET, HEAD' }); res.end('Method not allowed'); return;
  }
  const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
  if (!file.startsWith(root + path.sep)) { res.writeHead(403); res.end('Forbidden'); return; }
  fs.readFile(file, (error, data) => {
    res.writeHead(error ? 404 : 200, {
      'Content-Type': error ? 'text/plain; charset=utf-8' : (types[path.extname(file)] || 'application/octet-stream'),
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    });
    res.end(req.method === 'HEAD' ? undefined : (error ? 'Not found' : data));
  });
}).listen(port, '127.0.0.1', () => console.log(`Arnav Hooda portfolio → http://127.0.0.1:${port}/`));
