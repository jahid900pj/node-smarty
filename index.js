const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const users = [
    { id: 1, name: 'abal', email: 'a@gmail.com' },
    { id: 2, name: 'bbal', email: 'b@mail.com' },
    { id: 3, name: 'cbal', email: 'cgmail.com' },
    { id: 4, name: 'dbal', email: 'd@gmail.com' },
    { id: 5, name: 'ebal', email: 'e@gmail.com' },
    { id: 6, name: 'fbal', email: 'f@gmail.com' }

]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(matched)

    }
    else {
        res.send(users)
    }
})

app.post('/user', (req, res) => {
    console.log('request', req.body)
    const user = req.id;
    user.id = users.length + 1;
    users.push;
    res.send(user)
})

app.get('/user/:id', (req, res) => {
    console.log(req.params)
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id)
    res.send(user)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})