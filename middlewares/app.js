const express = require("express")
let app = express()

let postRouter = require("../routes/post.route")

app.use(express.json())
app.use("/api/posts", postRouter)


app.get("*", (req, res, next) => {
    res.send("Ishlayapti");
});

module.exports = app