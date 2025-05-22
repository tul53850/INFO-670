const express = require('express'); //Run this file like 'node server.js' in another terminal
const bodyParser = require('body-parser'); // JSON body parser
const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());

app.listen(PORT, () =>{ //API routes here
    console.log(`Server Running on port ${PORT}`)
});

app.get('/api/data', (req, res) => { //returns JSON response
    const data = {
        message: 'test message mf'
    };
    res.json(data);
});
//https://www.appsdevpro.com/blog/develop-a-full-stack-react-native-app-using-node-js-backend/