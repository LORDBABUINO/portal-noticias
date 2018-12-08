export const routeHome = (app: any) => {
	app.get('/', (req: any, res: any) => {
		res.render('home/index')
	})
}
