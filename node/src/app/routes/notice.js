const routeNotice = (app) => {

	app.get('/notice', (req, res) => {

		const connection = new app.dist.config.MysqlConnection.MysqlConnection()

		const getNoticiasFromDatabase = async () => {
			try {
				await connection.connect()
				const notice = await connection.query('select * from notices where id_notice = 2')
				res.render('news/noticia', {notice: notice})
				await connection.end()
			} catch(error){
				console.error(`${error.name}: ${error.message}`)
			}
		}
		getNoticiasFromDatabase()
	})
}
module.exports = routeNotice
