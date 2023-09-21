const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = process.env.MONGODB_URI

mongoose.set('strictQuery',false)
mongoose.connect(url)

const phoneBookSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true
  },
  number: {
    type: String,
    validate: {
      validator: function (v){
        return /^\d{2,3}-\d+$/.test(v);
      },
      message: 'Invalid phone number format. It should be in the format 09-1234556 or 040-22334455.'
    },
    required: true,
  },
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