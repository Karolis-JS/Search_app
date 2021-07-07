
module.exports = {
    checkKeyword: async (req, res, next) => {
        console.log("Time:", Date(Date.now()), req.body )
        function error(status, message) {
            return res.send({error: status, message: message})
        }
        if (req.body.keyword === "") {
            return error(true, 'Enter a keyword to search for the article')
        }
        if (req.body.keyword.length > 40) {
            return error(true, 'Keyword is too long. Search keyword can be up to 40 characters')
        }
        next()
    }
}