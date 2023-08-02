import express from 'express'

const app = express();

app.use(express.json())

app.get('/',(req, res) => {
    res.send('Hello world ! 111')
})

app.post('/auth/login', (req, res) => {
   
    console.log(req.body)
    res.json({
        success: true,
    })
})

app.listen(5000,(err) =>{
    if (err){
        return console.log(err)
    }

    console.log('Server OK')
})


