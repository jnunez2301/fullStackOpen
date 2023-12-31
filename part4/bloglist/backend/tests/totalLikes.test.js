const listHelper = require('../utils/list_helper')

describe('total likes', () =>{
    const blogs = [
        {
            _id: "5a422a851b54a676234d17f7",
            title: "React patterns",
            author: "Michael Chan",
            url: "https://reactpatterns.com/",
            likes: 7,
            __v: 0,
            blogs: 1,
        },
        {
            _id: "5a422aa71b54a676234d17f8",
            title: "Go To Statement Considered Harmful",
            author: "Edsger W. Dijkstra",
            url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
            likes: 5,
            __v: 0,
            blogs: 1,
        },
        {
            _id: "5a422b3a1b54a676234d17f9",
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
            likes: 12,
            __v: 0,
            blogs: 1,
        },
        {
            _id: "5a422b891b54a676234d17fa",
            title: "First class tests",
            author: "Robert C. Martin",
            url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
            likes: 10,
            __v: 0,
            blogs: 1,
        },
        {
            _id: "5a422ba71b54a676234d17fb",
            title: "TDD harms architecture",
            author: "Robert C. Martin",
            url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
            likes: 0,
            __v: 0,
            blogs: 1,
        },
        {
            _id: "5a422bc61b54a676234d17fc",
            title: "Type wars",
            author: "Robert C. Martin",
            url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
            likes: 2,
            __v: 0,
            blogs: 3,
        },
    ];
    
    const listWithOneBlog = [
        {
          _id: '5a422aa71b54a676234d17f8',
          title: 'Go To Statement Considered Harmful',
          author: 'Edsger W. Dijkstra',
          url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
          likes: 5,
          __v: 0
        }
      ]
    test('when list has only one blog, equals the likes of that', () =>{
        const result = listHelper.totalLikes(listWithOneBlog)
        expect(result).toBe(5)
    })
    test('sum all the values of a list', () =>{
        const result = listHelper.totalLikes(blogs)
        expect(result).toBe(blogs.reduce((acc, blog) => acc + blog.likes, 0))
    })
    test('get the most liked object', () =>{
        expect(listHelper.favoriteBlog(blogs).likes).toEqual(12)
    })
    test('author with most likes', () =>{
        console.log(listHelper.favoriteBlog(blogs));
        const mostLikesAuthor = listHelper.favoriteBlog(blogs).author
        const mostLikes = listHelper.favoriteBlog(blogs).likes
        const result = [{author: mostLikesAuthor, likes: mostLikes}]
        expect(result).toEqual([{
            author: "Edsger W. Dijkstra",
            likes: 12
        }])
    })
    test('finds the author with the most blogs', () => {
        
        const result = listHelper.mostBlogs(blogs);

        expect(result).toEqual([
            { author: "Robert C. Martin", blogs: 3 },
        ]);
    });
})