const express = require('express');
const env = require('dotenv')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const app = express();
const userRoutes = require('./src/route/auth');
const adminRoutes = require('./src/route/admin/auth');
const categoryRoutes = require('./src/route/category');
env.config();
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', userRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);

// const uri = 'mongodb://localhost:27017/ecommerse';
const uri = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.o8joo.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`
mongoose.connect(uri,
{
    useNewUrlParser: true,
}).then(() => {
    console.log('Database Connected')
}).catch(e => {
    console.log(e)
})

app.get('/', (req, res) => {
    res.status(200).send("welcome to ecommerce backend services");
})


 app.listen(process.env.PORT, () => {
     console.log(`Server is running on port ${process.env.PORT}`);
 })