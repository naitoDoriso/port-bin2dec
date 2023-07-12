const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/', (req,res)=>{
    res.send('Hello World!');
});

app.get('/bin2dec', (req,res)=>{
    res.render('bin2dec/index');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/bin2dec', (req,res)=>{
    let binary = req.body.binary;
    var dec = 0;
    for (var i in binary) {
        if (binary[i]=='1') dec += 2**(Math.abs(i-7));
    }
    res.render('bin2dec/index',{binary:binary, dec:dec});
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Running...');
});