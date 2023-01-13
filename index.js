const express = require("express");
const path = require("path")
const logger = require('./middleware/Logger')
const exphbs = require('express-handlebars')
const app = express();
const members = require("./Members")


// Init middlware
app.use(logger)

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Homepage route
app.get('/', (req, res) => res.render('index'), {
 title: 'Member App'
});


// set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('api/members', require('./routes/api/members'))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))