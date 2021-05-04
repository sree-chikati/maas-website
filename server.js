const express = require('express');
// App Setup
const app = express();

// Allows us to use content from Public file
app.use(express.static('public'));

// Middleware
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(3000, () => {
    console.log('Custom API listening on port localhost:3000!');
});