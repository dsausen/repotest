var express = require("express"),
    app = express()

app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.listen(3000, () => {
    console.log("Serving on port 3000")
})

module.exports = app
