const express = require('express');
const cors = require('cors');
const {mongoose} = require('./database');

var app = express();

app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

app.use('/api/agente', require('./routes/agente.route'));
app.use('/api/sector', require('./routes/sector.route'));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('Server started on port', app.get('port'));
});