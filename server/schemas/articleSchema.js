const mongoose = require('mongoose')

const ArticleSchema = mongoose.Schema;

const articleSchema = new ArticleSchema({
    time:{
        type: String,
        required: true
    },
    article: {
        type: Object,
        required: true
    }
})

module.exports = mongoose.model("articleModel", articleSchema)