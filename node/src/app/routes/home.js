const routeHome = (app) => {
	app.get('/', (req, res) => {
		res.render('home/index')
	})
}
module.exports = routeHome
