import layout from '../components/layout.js';
import {posts} from '../database/data.js';
import postCard from '../components/postCards.js';

const pageSize = 2;

export default (params) => {
  // Filtering
  const filteredPosts = params.has('category') ? posts.filter((post) => {
    return post.category === params.get('category')
  }) : posts;


  // Sorting
  const sort = params.has('sort') ? params.get('sort') : 'asc';
  const sortedPosts = filteredPosts.sort((a, b) => {
    if (a.title > b.title) {
      return sort === 'asc' ? 1 : -1
    }
    if (a.title < b.title) {
      return sort === 'asc' ? -1 : 1
    }
    return 0
  });
  const sortingButtons = [];
  for (let direction of ['asc', 'desc']) {
    const pageParams = new URLSearchParams();
    if (params.has('category')) {
      pageParams.set('category', params.get('category'))
    }
    pageParams.set('sort', direction)
    const href = `/?${pageParams.toString()}`
    const isActive = direction === sort;
    sortingButtons.push(`<a class="${isActive ? 'active' : 'nactive'}" href="${href}">${direction}</a>`);
  }

  // Pagination
  const page = params.has('page') ? Number(params.get('page')) : 1;
  const startIndex = (page - 1) * pageSize;
  const resultPosts = [...sortedPosts].splice(startIndex, pageSize);

  // Pagination buttons
  const totalButtons = Math.ceil(filteredPosts.length / pageSize);
  const paginationButtons = [];
  for (let i = 0; i < totalButtons; i++) {
    const pageParams = new URLSearchParams();
    if (params.has('category')) {
      pageParams.set('category', params.get('category'))
    }
    if (params.has('sort')) {
      pageParams.set('sort', params.get('sort'))
    }
    pageParams.set('page', String(i + 1))
    const href = `/?${pageParams.toString()}`
    const isActive = i + 1 === page;
    paginationButtons.push(`<a href="${href}" class="${isActive ? 'active' : 'nactive'}">${i + 1}</a>`);
  }

  return layout(`
  <section class="container blog">
  <div class="categoties">
      <input type="text" placeholder="Search">
      <div><h2><a class="categories-element" href="/">Blog catigories</a></h2></div>
      <div><a class="categories-element" href="/">All</a></div>
      <div><a class="categories-element" href="/?category=Design">Design</a></div>
      <div><a class="categories-element" href="/?category=Product">Product</a></div>
      <div><a class="categories-element" href="/?category=Softwere Dewiopment">Softwere Dewiopment</a></div>
      <div><a class="categories-element" href="/?category=Custumer Success>Custumer Success"</a></div>
      <div class="sortingButtons"> ${sortingButtons.join('   ')}   </div>
  </div>
  <div class="content-post">
  ${resultPosts.map((post)=>postCard(post))}
  </div>
  </section>
  <div class="buttonsPagination">
            ${paginationButtons.join('   ')}
        </div>
  `);
}