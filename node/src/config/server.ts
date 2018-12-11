export let app = require('express')()
const consign = require('consign')

app.set('view engine', 'ejs')
app.set('views','./src/app/views');
consign().include('dist/app/routes').into(app)
