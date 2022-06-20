const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const Car = require('./model/Car');

app.get('/', (req, res) => {
    res.send({
        "message": "App running",
        "data": [],
        "success": true
    });
})

app.post('/', async (req, res) => {
    try {
        let car = await Car.create(req.body);
        res.send({
            message: "Post created successfully",
            data: car,
            success: true
        })
    } catch (e) {
        res.send({
            message: e.message,
            data: [],
            success: false
        })
    }
})


main().then(() => {
    console.log("DB is connected");
    app.listen(3000, () => {
        console.log("Server is listening at port 3000")
    })
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
}


