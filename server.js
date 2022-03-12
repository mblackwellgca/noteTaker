//Dependencies
const express = require ('express');

//Routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//Ports
const PORT = process.env.PORT || 3001;

//Express APP
const app = express();

//Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static('public'));

//Listener
app.listen(PORT, () =>
console.log(`Server is ready at http://localhost:${PORT} 🚀`)
);