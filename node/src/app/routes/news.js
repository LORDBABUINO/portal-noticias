import { MysqlConnection } from '../../config/MysqlConnection'
const routeNews = (app) => {

	app.get('/news', (req, res) => {

		const connection = new MysqlConnection()

		const getNoticiasFromDatabase = async () => {
			try {
				await connection.connect()
				const notices = await connection.query('select * from notices')
				res.render('news/news', {notices: notices})
				await connection.end()
			} catch(error){
				console.error(`${error.name}: ${error.message}`)
			}
		}
		getNoticiasFromDatabase()
	})
}
module.exports = routeNews
