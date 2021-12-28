const mongoose = require('mongoose')

const connectDB = async () => {
   try {
      const conn = await mongoose.connect(process.env.MONGO_URL, {
         useNewUrlParser: true,
         useCreateIndex: true,
         useUnifiedTopology: true
      })

      console.log(`mongoDB connect: ${conn.connection.host}`)
   } catch (err) {
      console.log(`error: ${err.message}`)
      process.exit(1)
   }
}

module.exports = connectDB