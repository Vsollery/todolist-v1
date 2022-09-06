const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const date = require(__dirname + '/date.js');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("Public"));

var items= ['Buy Food', 'Cook Food', 'Eat Food'];
var workItems =[];

app.get('/', (req,res) => {
    
    res.render('list', {
        listTitle : date(),
        newListItem : items
    })
})

app.post('/', (req,res) => { 
    let item = req.body.newItem;

    if(req.body.button === 'Work List'){
        workItems.push(item);
        res.redirect('/work');
    }else{
        items.push(item);
        res.redirect('/');
    }
    
})

app.get('/work',(req,res) => {
    // let item = req.body.newItem;
    // workItems.push(item);

    res.render('list',{
        listTitle : 'Work List',
        newListItem : workItems
    })

})



app.listen(3000,() => {
    console.log('Server running on port 3000');
})