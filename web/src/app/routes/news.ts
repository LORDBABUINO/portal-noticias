export const routeNews = (app: any) => {
	app.get('/news', (req: any, res: any) => {
		res.render('news/news')
	})
}
