const path = require('path');


// GET Route for notes page
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// GET Route for homepage
app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, '../public/index.html'))
);


// Get 404
app.all('*', (req,res) => {
res.status(404).send('<h1>404! Page Not Found <h1>');
});

module.exports = html;