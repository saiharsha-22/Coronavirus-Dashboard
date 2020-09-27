const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser");
var mongoose = require('mongoose');
const hostname = '127.0.0.1';

//you need to connect to your mongo db otherwise it will not run 

app.use(express.urlencoded())

//static
app.use(express.static('public'))
app.use('/css',express.static(__dirname+'public/css'))
app.use('/js',express.static(__dirname+'public/js'))
app.use('/img',express.static(__dirname+'public/img'))
app.use('/json',express.static(__dirname+'public/json'))
//json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//mongoose

mongoose.connect('mongodb://localhost/sai', {useNewUrlParser: true});
var contactSchema = new mongoose.Schema({
    name: String,
    age: String,
    gender: String,
  });
  var contact = mongoose.model('contact', contactSchema);

//set views

app.set('views','./views')
app.set('view engine','ejs')




app.get('',(req,res)=>{

    res.render('index')
})
app.get('/map',(req,res)=>{

    res.render('map')
})
app.get('/pie',(req,res)=>{

    res.render('pie')
})
app.get('/bar',(req,res)=>{

    res.render('bar')
})
app.get('/line',(req,res)=>{

    res.render('line')
})
app.get('/contact',(req,res)=>{

    res.render('contact')
})

app.post('/contact', (req, res)=>{
    
   var mydata=new contact(req.body);
    mydata.save().then(()=>{
        res.send("This item as been saved to database")
    }).catch(()=>{
        res.status(400).send("item was not saved to databse")
    })
    const parms = {'message': 'form submitted succefully'}
    res.render('contact',parms)
    console.log(req.body)
    
})

app.listen(port,hostname,()=>console.log(`Server running at http://${hostname}:${port}/`))