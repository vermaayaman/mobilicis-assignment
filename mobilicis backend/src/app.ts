import express from 'express'
const app = express()
const PORT =8080
app.use(express.urlencoded({extened:true}))
app.use(express.json())

app.get('/',(req, res)=>{
    res.status(200).send("ok")
})
app.get('/health',(req, res)=>{
    res.status(200).send("ok")
})

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
});