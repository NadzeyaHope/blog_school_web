import fs from 'fs';
import path from 'path';
import notFound from '../pages/notFound.js';

const MIME_TYPES = {
    default: 'application/octet-stream',
    js: 'application/javascript',
    css: 'text/css',
    png: 'image/png',
    jpg: 'image/jpg',
    gif: 'image/gif',
    ico: 'image/x-icon',
    svg: 'image/svg+xml',
  };

export const isStatic = (url) =>{
    return url.includes('.');
};
export const isStaticUrl = (url, res) => {
    const pagePath = `./styles${url}`;
    const ext = path.extname(pagePath).substring(1).toLowerCase();
    const mimeType = MIME_TYPES[ext] ?? MIME_TYPES.default;

    const stream = fs.createReadStream(pagePath);
    res.writeHead(200, { 'Content-Type' : mimeType});
    stream.pipe(res)
};
export const isStaticUrlPage = (routes, url, res) => {
    let [route, params] = url.split('?');
    params = new URLSearchParams(params);
    const routeFunction = routes[route] ?? notFound;
    const result = routeFunction(params);

    res.writeHead(200, { 'Content-Type' : 'text/html; charset=UTF-8' });
    res.write(result);
    res.end()
}