export const routeNews = (app: any) => {
	const util = require('util')

	app.get('/news', (req: any, res: any) => {

		const connection: any = require('mysql').createConnection({
			host: process.env.MYSQL_HOST,
			user: process.env.MYSQL_USER,
			port: process.env.MYSQL_PORT,
			password: process.env.MYSQL_PASSWORD,
			database: process.env.MYSQL_DATABASE
		})

		const connect:	any = util.promisify(connection.connect.bind(connection))
		const query:		any = util.promisify(connection.query.bind(connection))
		const end:			any = util.promisify(connection.end.bind(connection))

		const getNoticiasFromDatabase = async () => {
			try {
				await connect()
				const notices: object = await query('select * from notices')
				res.send(notices)
				await end()
			} catch(error){
				console.error(`${error.name}: ${error.message}`)
			}
		}
		getNoticiasFromDatabase()
	})
}
