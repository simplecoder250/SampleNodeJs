const path = require('path')
const express = require('express')

const app = express()
const publicDirectory = path.join(__dirname,'public')
app.use(express.static(publicDirectory))
// var server = app.listen(5000);
//app.use(express.static(path.join(__dirname,'/public'))) // Customize server

app.get('',(req,res) => {
    res.render('index')
})

// app.get('', (req, res) => {
//     res.send('<h1>Weather</h1>')
// })    // get data
// app.com
// app.com/help
// app.com/about


// app.get('/help', (req,res) => {
//     res.send([{
//         name : 'Vivek',
//         age : 27
//     }, 
//     {
//         name : 'Rahul',
//         age : 45
//     }])
// })
// app.listen(3000, () => {
//     console.log('Server is up on 3000')
// })

 
// app.get('/about', (req,res) => {
//     res.send({
//         forcast:'It is snowing',
//         location:'Bokaro'
//     })
// })

// app.get('/WeatherPage', (req,res) => {
//     res.send('Show weather')
// })

