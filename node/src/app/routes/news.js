import { MysqlConnection } from '../../config/MysqlConnection'
const routeNews = (app) => {
	const util = require('util')

	app.get('/news', (req, res) => {

		const connection = MysqlConnection()
		const connect		 = util.promisify(connection.connect.bind(connection))
		const query			 = util.promisify(connection.query.bind(connection))
		const end				 = util.promisify(connection.end.bind(connection))

		const getNoticiasFromDatabase = async () => {
			try {
				await connect()
				const notices = await query('select * from notices')
				res.render('news/news', {notices: notices})
				await end()
			} catch(error){
				console.error(`${error.name}: ${error.message}`)
			}
		}
		getNoticiasFromDatabase()
	})
}
module.exports = routeNews
