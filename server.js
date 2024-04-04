const express = require('express');
//Dont reveal confidential info for shared projects
const dotenv = require('dotenv');
const morgan = require('morgan');


const app = express();

dotenv.config( {path: 'config.env'} );
const PORT = process.env.PORT || 8080

//Show the requests logs
app.use(morgan('tiny'));

app.get('/', (req,res)=>{
    res.send('Crud app');
})

app.listen(PORT, ()=> {console.log(`Server is running on http://localhost:${PORT}`)});