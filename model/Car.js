const mongoose = require('mongoose');

let ProductsSchema = new mongoose.Schema({
    category_id: Number,
    title: String,
    description: String,
    transmission: String,
    fuel_type: String,
    built_year: Date,
    color: String,
    mileage: String,
    maintained_by_company: String,
    price_type: String,
    price: Number,
    name: String,
    email: String,
    phone_number: String,
    show_whatsapp: Number,
    whatsapp: String,
    city: String,
    area: String,
    options: Object,

});

// Compile model from schema
module.exports = mongoose.model('Car', ProductsSchema);
