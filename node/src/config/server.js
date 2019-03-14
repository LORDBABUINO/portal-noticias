import express from 'express'
import consign from 'consign'
export let app = express()

app.set('view engine', 'ejs')
app.set('views','./src/app/views')
consign()
	.include('dist/app/routes')
	.then('dist/config/MysqlConnection.js')
	.into(app)
