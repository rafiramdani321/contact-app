const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/rafi', {
})

// // Add data
// const contact1 = new Contact({
//   nama: 'Akmal Alif',
//   nohp: '0812734444',
//   email: 'akmal@gmail.com'
// })

// // save collection
// contact1.save().then((contact) => console.log(contact))