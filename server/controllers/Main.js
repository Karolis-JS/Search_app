const articleDB = require('../schemas/articleSchema')
const keywordDB = require('../schemas/keywordSchema')
const fetch = require("node-fetch")

module.exports = {
    getData: async (request, response) => {
        fetch(`https://gnews.io/api/v4/search?q=${request.body.keyword}&token=a5d07a8ff28b935680d86fe6800be2dc`)
            .then(res => res.json())
            .then(data => {
                response.send({data, error: false})
            })
        let newKeyword = new keywordDB
        newKeyword.time = Date(Date.now())
        newKeyword.keyword = request.body.keyword
        newKeyword.save()
    },
    article: async (req, res) => {
        console.log(req.body)
        let newArticle = new articleDB
        newArticle.time = Date(Date.now())
        newArticle.article = req.body
        newArticle.save().then(() => {
            res.send({error: false, message: 'Article saved to MongoDB!'})
        }).catch(e => {
            res.send({error: true, message: e})
        })
    },
}