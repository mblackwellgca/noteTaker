//Dependencies
const express = require ('express');

//Routes
const path = require('path');
const api = require('./routes/index.js');

//Ports
const PORT = process.env.PORT || 3001;

//Express APP
const app = express();

//Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Wildcard route get 404 error for all others
app.all('*', (req,res) => {
res.status(404).send('<h1>404! Page Not Found <h1>');
});

//Listener
app.listen(PORT, () =>
console.log(`Server is ready on port http://localhost:${PORT} 🚀`)
);