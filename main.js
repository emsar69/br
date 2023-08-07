const express = require("express")
const path = require("path")

var app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "pages"))

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(process.env.PORT || 80, () => {
    console.log("Listening Server...")
})