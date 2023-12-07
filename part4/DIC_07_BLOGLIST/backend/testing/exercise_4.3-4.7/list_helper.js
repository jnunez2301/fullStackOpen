const _ = require('lodash');

const dummy = (blogs) => {
    return 1;
}

const totalLikes = (blogs) => {

    return blogs[0].likes;
}

const favoriteBlog = (blogs) => {
    let max = 0;
    for(let i = 0; i < blogs.length; i++){
        if(blogs[i].likes > max){
            max = blogs[i].likes;
        }
    }
    return blogs.filter(blog => blog.likes === max)[0];
}
// 4.6*
const mostBlogs = (blogs) => {
    const authorCounts = _.countBy(blogs, 'author');
    
    // Find the author with the maximum blogs
    const mostBlogsAuthor = _.maxBy(Object.keys(authorCounts), (author) => authorCounts[author]);

    return {
        author: mostBlogsAuthor,
        blogs: authorCounts[mostBlogsAuthor]
    };
}
// 4.7*

const mostLikes = (blogs) => {
    let max = 0;
    for(let i = 0; i < blogs.length; i++){
        if(blogs[i].likes > max){
            max = blogs[i].likes;
        }
    }
    const {author, likes} = blogs.filter(blog => blog.likes === max)[0];
    return {
        author, likes
    };
}

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes }