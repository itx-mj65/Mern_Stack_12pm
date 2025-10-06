const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors")
const app = express();




mongoose.connect('mongodb://localhost:27017/mydatabase12').then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

app.use(express.json());
app.use(cors())

const userSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String
});
const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {

    try {
        const { fullname, email, password } = req.body

        const user = new User({ fullname, email, password });
        await user.save();
        res.status(201).send('User registered');
    } catch {
        () => {
            console.log("eror while saving data ")
        }
    }
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});