const mongoose = require('mongoose')

const KeywordSchema = mongoose.Schema;

const keywordSchema = new KeywordSchema({
    time:{
        type: String,
        required: true
    },
    keyword: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("keywordModel", keywordSchema)