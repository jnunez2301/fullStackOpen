require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

const mongoUrl = `mongodb+srv://jmoisesn23:password@cluster0.fh9x2un.mongodb.net/bloglist?retryWrites=true&w=majority`
mongoose.connect(mongoUrl)

app.use(cors())
app.use(express.json())


const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})