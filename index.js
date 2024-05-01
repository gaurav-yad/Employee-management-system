const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const layouts = require('express-ejs-layouts');

app.use(express.static('assets'));

app.use(express.urlencoded());
app.use(layouts);

app.set('view engine','ejs');
app.set('views','./views');
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use('/',require('./routes'));
app.use('/user',require('./routes/users'));

app.listen(port, function(err){
    if(err)
    {
        console.log(`error : ${err}`);
        return;
    }
    console.log(`Server is running on port:${port}`);
})
