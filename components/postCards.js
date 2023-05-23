import {dataFormat} from '../components/dateFunc.js';
export default (post)=>{
    return `
    <div class="post">
    <div class="item"
         style="background: url('${post.image}') no-repeat; background-size: cover">
        <div class="desc">
            <div>
                <div class="author">${post.author}</div>
                <div>${dataFormat(post.date)}</div>
            </div>
            <div>
                ${post.category}
            </div>
        </div>
    </div>
    <h2><a href="/page?id=${post.id}">${post.title}</a></h2>
    <p>${post.summary}</p>
    <a href="#">Read more</a>
</div>
    `
}