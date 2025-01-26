import express from 'express'
import handlebars from 'express-handlebars'

const app = express()
app.engine('hbs', handlebars.engine({
    extname: "hbs"
}))
app.set('view engine', 'hbs');
app.set('views', 'src/views')

app.use(express.json())
app.use('/static', express.static('src/public'))

app.get("/", (req, res) => {
    res.render('home')
})

app.listen(5000, "localhost", () => {
    console.log("Server started. Listening on http://localhost:5000...")
})