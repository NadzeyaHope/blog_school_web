import layout from "../components/layout.js";
import {posts} from '../database/data.js';
import notFound from "./notFound.js";
import {dataFormat} from '../components/dateFunc.js';
export default (params)=>{
    const id = parseInt(params.get('id'));
    const post = posts.find((item) => item.id === id);
    if(!post){
        return notFound;
    }
    return layout(`
      <div class="post-page">
        <h1>${post.title}</h1>
        <strong class="date-format">${dataFormat(post.date)}</strong>
        <br />
        <img src="${post.image}" width="50%">
        <div class="post-content">${post.content}</div>
      </div>
    `)
}