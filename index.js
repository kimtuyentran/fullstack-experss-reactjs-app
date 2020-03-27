const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'hello' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//https://boiling-anchorage-41931.herokuapp.com/ | https://git.heroku.com/boiling-anchorage-41931.git