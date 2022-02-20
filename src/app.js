const path = require("path")
const express = require("express")
const app = express()

// console.log(__dirname)
// console.log(path.join(__dirname, "../public"))

const publicDirectoryPath = path.join(__dirname, '../public')

//.use is to customise server

app.use(express.static(publicDirectoryPath))

const port = 3000

app.listen(3000, () =>{
    console.log(`listening at port: ${port}`)
})