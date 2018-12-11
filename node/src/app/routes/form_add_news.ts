const routeFormAddNews = (app: any) => {
	app.get('/form_add_news', (req: any, res: any) => {
		res.render('admin/form_add_news')
	})
}
module.exports = routeFormAddNews
