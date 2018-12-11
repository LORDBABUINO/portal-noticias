import { dbConnection } from '../../config/dbConnection'
export const routeNews = (app: any) => {
	const util = require('util')

	app.get('/news', (req: any, res: any) => {

		const connection:	any = dbConnection()
		const connect:		any = util.promisify(connection.connect.bind(connection))
		const query:			any = util.promisify(connection.query.bind(connection))
		const end:				any = util.promisify(connection.end.bind(connection))

		const getNoticiasFromDatabase = async () => {
			try {
				await connect()
				const notices: object = await query('select * from notices')
				res.render('news/news', {notices: notices})
				await end()
			} catch(error){
				console.error(`${error.name}: ${error.message}`)
			}
		}
		getNoticiasFromDatabase()
	})
}
