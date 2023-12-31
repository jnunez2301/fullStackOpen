const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', (request, response) => {
    Blog.find({}).then(blogs => {
        response.json(blogs)
    })
})

blogsRouter.get('/:id', (request, response, next) => {

    Blog.findById(request.params.id)
        .then(blog => {
            if (blog) {
                response.json(blog)
            }
            else {
                response.status(404).end()
            }
        })
        .catch(error => next(error))
})

blogsRouter.delete('/:id', (request, response, next) =>{

    Blog.findByIdAndDelete(request.params.id)
    .then((deletedBlog) =>{
        response.json(deletedBlog)
    })
    .catch(error => next(error))

})

blogsRouter.post('/', (request, response, next) => {
    const body = request.body

    const blog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes
    })

    blog
        .save()
        .then(result => {
            response.status(201).json(result)
        })
        .catch(error => next(error))
})

blogsRouter.put('/:id', (request, response, next) =>{

    const updatedData = request.body

    Blog.findByIdAndUpdate(
        request.params.id, updatedData, { new: true, runValidators: true, context: 'query'})
        .then((updatedBlog) => {
            if(updatedBlog){
                response.json(updatedBlog)
            }
            else{
                response.status(404).end()
            }
        })
        .catch(error => next(error))

})



module.exports = blogsRouter