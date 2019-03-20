import supertest from 'supertest'
import { app } from '../../../config/server'

describe('RouteNews', function () {
	this.timeout(Infinity)

	it('should GET /news', async () => {
		await supertest(app)
			.get('/news')
			.expect(200)
	})
})
