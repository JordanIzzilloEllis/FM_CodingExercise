import express, { response } from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

let userArray = [];

app.use(express.static('public'));
app.use(cors());
app.use(express.json())

app.listen(port, () => console.log('listening at 3000'))

app.get('/displayUsers', (req, res) => {
    res.json(userArray)
})

app.post('/userData', (req, res) => {
    console.log(req.body);
    res.json({
        received: 'true'
    })

    let newUser = req.body;
    userArray.push(newUser);
    console.log(userArray)

})




