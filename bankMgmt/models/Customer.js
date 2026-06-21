const mongoose =
require("mongoose");

const customerSchema =
new mongoose.Schema({

    accountNumber: {
        type: Number,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    accountType: {
        type: String,
        required: true
    },

    balance: {
        type: Number,
        required: true
    }

});

module.exports =
mongoose.model(
"Customer",
customerSchema
);