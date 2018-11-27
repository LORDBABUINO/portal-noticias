let app = require('express')()

app.set('view engine', 'ejs')
app.set('views','src/views');

app.get('/', (req: any, res: any) => {
	res.render('home/index')
})

app.get('/formulario_inclusao_noticia', (req: any, res: any) => {
	res.render('admin/form_add_noticia')
})

app.get('/noticias', (req: any, res: any) => {
	res.render('noticias/noticias')
})

app.listen(3000, () => {
	console.log('Servidor rodando com Express')
})
