import { app } from './config/server'
import { routeHome } from './app/routes/home'
import { routeFormAddNews } from './app/routes/form_add_news'
import { routeNews } from './app/routes/news'

routeHome(app)
routeFormAddNews(app)
routeNews(app)

app.listen(3000, () => {
	console.log('Servidor rodando com Express')
	console.log('Servidor rodando com Express')
})
