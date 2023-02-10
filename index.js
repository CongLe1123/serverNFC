const express = require('express');
const cors = require('cors');
const functions = require('./functions');
const dict = require('./dict.json');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/get/:set/:imgs', async(req, res)=>{
    try {
        const set = req.params.set;
        let imgs = functions.decrypt(req.params.imgs);
        imgs = set=='true' ? imgs.split('-')[0] : imgs.split('-');

        let response = [];
        if (set=='true'){

            const length = dict[imgs];
            for (let i=1; i<=length; i ++){
                response.push(`${imgs}${i}`);
            }
            
        } else {
            response = imgs
        }

        res.send(response);
    } catch (err) {
        console.error(err);
    }
})

app.get('/', (req, res) => {res.send('Server running');});

app.listen(5000, () => {
    console.log('Listening');
})