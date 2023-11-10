const dummy = (blogs) =>{
    return typeof blogs === 'object' ? 1 : 0;
}

const totalLikes = (blogs) =>{
    return blogs.reduce((acc, blog) => acc + blog.likes, 0)
}

const favoriteBlog = (blogs) =>{
    return blogs.reduce(
        (prev, curr) => {
          return prev.likes > curr.likes ? prev : curr
          })
}

const mostBlogs = (blogs) => {
    const authors = {};

    // Count the number of blogs for each author
    blogs.forEach((blog) => {
        if (authors[blog.author]) {
            authors[blog.author]++;
        } else {
            authors[blog.author] = 1;
        }
    });

    // Find the maximum number of blogs
    const maxBlogs = Math.max(...Object.values(authors));

    // Find authors with the maximum number of blogs
    const topAuthors = Object.keys(authors).filter(
        (author) => authors[author] === maxBlogs
    );

    // Create an array of author objects in the desired format
    const result = topAuthors.map((author) => ({
        author,
        blogs: authors[author],
    }));

    return result;
};


module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs
}