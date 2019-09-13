const mongoose = require('mongoose')

mongoose.set('debug', true)
mongoose.Promise = global.Promise
// -----------------------------MongoDb Local-------------------------------------
// mongoose.connect('mongodb://localhost:27017/comfycook')

// -----------------------------comfycookapi -> MONGODB_URI (1st)-------------------------------------
mongoose.connect('mongodb://heroku_8dcklznk:ce2e4q822hegs0r1l34fecefu4@ds131139.mlab.com:31139/heroku_8dcklznk')

module.exports.Ingredient = require('./ingredient')
module.exports.Food = require('./food')
module.exports.Cusine = require('./cusine')
module.exports.User = require('./user')