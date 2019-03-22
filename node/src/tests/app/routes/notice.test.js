import supertest from 'supertest'
import { app } from '../../../config/server'

describe('RouteNotice', function () {
	this.timeout(Infinity)

	it('should GET /notice', async () => {
		await supertest(app)
			.get('/notice')
			.expect(200)
	})
})
