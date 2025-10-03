const mongoose = require('mongoose');
const express = require('express');
const app = express();




mongoose.connect('mongodb://localhost:27017/mydatabase12').then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

app.use(express.json());

const userSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String
});
const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {

    const user = new User({ name: "hello", email: "hello@example.com", password: "password123" });
    await user.save();
    res.status(201).send('User registered');
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});