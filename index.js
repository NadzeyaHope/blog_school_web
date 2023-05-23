import http from 'http';
import {isStatic, isStaticUrl, isStaticUrlPage} from './server/server.js';
import home from './pages/home.js';
import post from './pages/post.js';
const port = 3000;

const routes = {
    '/' : home,
    '/post' : post
}

const server = http.createServer((req, res) => {
    const {url} = req;
    if(isStatic(url)){
        isStaticUrl(url, res)
    }else{
        isStaticUrlPage(routes, url, res)
    }
});
server.listen(port);