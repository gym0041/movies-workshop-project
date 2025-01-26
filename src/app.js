import express from 'express'

const app = express()

app.use(express.json())
app.use(express.static('src/public'))

app.get("/", (req, res) => {
    res.send("Welcome from the Home Page")
})

app.listen(5000, "localhost", () => {
    console.log("Server started. Listening on http://localhost:5000...")
})