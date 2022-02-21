const path = require("path")
const express = require("express")
const app = express()
const hbs = require('hbs')

// console.log(__dirname)
// console.log(path.join(__dirname, "../public"))

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
//.use is to customise server
app.use(express.static(publicDirectoryPath))

//.set allows to set a value for given express 'property'
//setup handlebars and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.get('', (req,res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Andrew Mead'
    })
})

app.get('/help', (req, res) => {
    res.render('help')
})

app.get('/index', (req, res) => {
    res.render('index')
})

app.get('/about', (req,res) => {
    res.render('about')
})

app.get('*', (req, res) =>{
    res.render('404', {
        errorMessage: '404 error'
    })
})

const port = 3000

app.listen(3000, () =>{
    console.log(`listening at port: ${port}`)
})