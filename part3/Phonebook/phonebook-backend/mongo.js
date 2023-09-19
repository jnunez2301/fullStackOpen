const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://jmoisesn23:${password}@cluster0.fh9x2un.mongodb.net/phonebookApp?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const phoneBookSchema = new mongoose.Schema({
  name: String,
  number: Number,
})

const Phonebook = mongoose.model('Phonebook', phoneBookSchema)

const phonebook = new Phonebook({
  name: process.argv[3],
  number: process.argv[4],
})



if(phonebook.name === '' || !phonebook.number){
  Phonebook.find({}).then(result => {
    result.forEach(phone => {
      console.log(`phonebook:\n${phone.name} ${phone.number}\n`)
    })
    mongoose.connection.close()
  })
}else{
  phonebook.save().then(result => {
    console.log(`added ${result.name} number ${result.number} to phonebook`)
    mongoose.connection.close()
  })
}