const routeFormAddNews = (app) => {
	app.get('/form_add_news', (req, res) => {
		res.render('admin/form_add_news')
	})
}
module.exports = routeFormAddNews
