const express = require('express');
const bodyparser = require('body-parser');
const { readFile, writeFile } = require('fs');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

let notes = [];
let settings = [];

function save() {
    writeFile('./api/api.json', JSON.stringify({
        notes: notes,
        settings: settings
    }), (err, data) => {
        console.log('The file was created', data);
    })
}

app.get('/', (req, res) => {
    readFile('./api/api.json', 'utf-8', (err, data) => {
        if (err) throw new Error(err.message);

        const json = JSON.parse(data);

        notes = [ ...json.notes ];
        settings = json.settings;

        res.json(json);
    });
});

app.post('/add', (req, res) => {
    notes = [ req.body, ...notes ];
    save();
    res.json({ message: 'success' });
});

app.post('/remove', (req, res) => {
    const results = notes.filter(n => n.id !== req.body.id);
    notes = [ ...results ];
    save();
    res.json({ message: 'success' });
});

app.post('/update', (req, res) => {
    const note = req.body;

    const index = notes.findIndex(n => n.id === req.body.id);
    notes[index] = note;

    save();
    res.json({ message: 'success' });
});

app.post('/darkmode', (req, res) => {
    const darkmode = req.body.darkmode;
    settings.darkmode = darkmode;
    save();
    res.json({ message: 'success' });
});

app.listen('3000', () => {
    console.log('Listening...');
});