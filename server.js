const express = require('express');
//Dont reveal confidential info for shared projects
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');


const app = express();

dotenv.config( {path: 'config.env'} );
const PORT = process.env.PORT || 8080

//Show the requests logs
app.use(morgan('tiny'));

//Parse request to body-parser
app.use(bodyparser.urlencoded({extended: true}));

//Set view engine
app.set("view engine","ejs");
//app.set("views",path.resolve(__dirname, "views/ejs"));

//Load assets
//Make it easier to use css files (ex: /css/style.css) instead of writing all the route assets/css
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

//load routers
app.use('/', require("./server/routes/router"));

app.listen(PORT, ()=> {console.log(`Server is running on http://localhost:${PORT}`)});