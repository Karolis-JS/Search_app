const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    time:{
        type: String,
        required: true
    },
    keyword: {
        type: String,
        required: true
    },
    article: {
        type: Object,
        required: true
    }
})

module.exports = mongoose.model("articleModel", articleSchema)