const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const rootDir = require('./utils/path.js');


const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');


app.use(bodyParser.urlencoded( {extended:true} ));
app.use(express.static(path.join(rootDir, 'public')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})







app.listen(8080, ()=>{
    console.log('listening to port 8080')
})