const listHelper = require('./list_helper');

describe('dummy returns one', () => {
    test('returns one regardless of the value', () => {
        const blogs = [];
        expect(listHelper.dummy(blogs)).toBe(1)
    })

})

describe('total likes', () => {
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

    test('when list has only one blog, equals the likes of that', () => {
        const result = listHelper.totalLikes(listWithOneBlog)
        expect(result).toBe(5)
    })
})

describe('return most liked blog', () => {
    test('When list has more than one blog, return the most liked one', () => {
        const blogs = [ 
            {
              "title": "Harry potter",
              "author": "J.K Rowling",
              "url": "https://es.wikipedia.org/wiki/Harry_Potter",
              "likes": 10,
              "id": "651022bb798dc65b09bca38a"
            },
            {
              "title": "Chainsaw Man",
              "author": "Tatsuki Fujimoto",
              "url": "https://es.wikipedia.org/wiki/Chainsaw_Man",
              "likes": 10,
              "id": "6512a4f3004db31e44989452"
            },
            {
              "title": "Book updated",
              "author": "me again",
              "url": "localhost",
              "likes": 1,
              "id": "65169d4267238e6821562449"
            },
            {
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            likes: 20
          }
          ]
        const favorite = {
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            likes: 20
        };

        const result = listHelper.favoriteBlog(blogs);
        expect(result).toEqual(favorite);
    })
})
describe('most blogs', () => {
    test('When list has more than one blog, return the author with most blogs', () => {
        const blogs = [
            {
              "title": "Harry Potter and the Philosopher's Stone",
              "author": "J.K Rowling",
              "url": "https://es.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone",
              "likes": 10,
              "id": "651022bb798dc65b09bca38a"
            },
            {
              "title": "Harry Potter and the Chamber of Secrets",
              "author": "J.K Rowling",
              "url": "https://es.wikipedia.org/wiki/Harry_Potter_and_the_Chamber_of_Secrets",
              "likes": 10,
              "id": "6512a4f3004db31e44989452"
            },
            {
              "title": "Harry Potter and the Prisoner of Azkaban",
              "author": "J.K Rowling",
              "url": "https://es.wikipedia.org/wiki/Harry_Potter_and_the_Prisoner_of_Azkaban",
              "likes": 10,
              "id": "65169d4267238e6821562449"
            },
            {
              "title": "Harry Potter and the Goblet of Fire",
              "author": "J.K Rowling",
              "url": "https://es.wikipedia.org/wiki/Harry_Potter_and_the_Goblet_of_Fire",
              "likes": 10,
              "id": "6f8f8a11d46c4115a8f7a2de"
            },
            {
              "title": "Harry Potter and the Order of the Phoenix",
              "author": "J.K Rowling",
              "url": "https://es.wikipedia.org/wiki/Harry_Potter_and_the_Order_of_the_Phoenix",
              "likes": 10,
              "id": "cfadfc9a7f24ecf1e52a0043"
            },
            {
              "title": "Harry Potter and the Half-Blood Prince",
              "author": "J.K Rowling",
              "url": "https://es.wikipedia.org/wiki/Harry_Potter_and_the_Half-Blood_Prince",
              "likes": 10,
              "id": "c2f82e7b417e4e44abf670db"
            },
            {
              "title": "Harry Potter and the Deathly Hallows",
              "author": "J.K Rowling",
              "url": "https://es.wikipedia.org/wiki/Harry_Potter_and_the_Deathly_Hallows",
              "likes": 10,
              "id": "d63f3f88f2064cfc8c91ed1b"
            },
            {
              "title": "Chainsaw Man",
              "author": "Tatsuki Fujimoto",
              "url": "https://es.wikipedia.org/wiki/Chainsaw_Man",
              "likes": 10,
              "id": "ab9b2d9c2a334c299a460268"
            },
            {
              "title": "Book updated",
              "author": "me again",
              "url": "localhost",
              "likes": 1,
              "id": "f1d6d29e890b4c8c83c6846d"
            }
          ]
        const result = listHelper.mostBlogs(blogs);
        expect(result).toEqual({
            author: 'J.K Rowling',
            blogs: 7
        })
    })
})

describe('most likes 4.7', () => {
    test('A blog list must return the most liked author', () =>{
        const blogs = 
        [{
          "title": "Harry Potter and the Deathly Hallows",
          "author": "J.K Rowling",
          "url": "https://es.wikipedia.org/wiki/Harry_Potter_and_the_Deathly_Hallows",
          "likes": 10,
          "id": "d63f3f88f2064cfc8c91ed1b"
        },
        {
          "title": "Chainsaw Man",
          "author": "Tatsuki Fujimoto",
          "url": "https://es.wikipedia.org/wiki/Chainsaw_Man",
          "likes": 15,
          "id": "ab9b2d9c2a334c299a460268"
        },
        {
          "title": "Book updated",
          "author": "me again",
          "url": "localhost",
          "likes": 1,
          "id": "f1d6d29e890b4c8c83c6846d"
        },
        ]
        const mostLiked = {author: "Tatsuki Fujimoto", likes: 15}
        const result = listHelper.mostLikes(blogs);
        
        expect(result).toEqual(mostLiked);
        
    })
})
