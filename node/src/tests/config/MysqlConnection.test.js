import assert from 'assert'
import { MysqlConnection } from '../../config/MysqlConnection'

describe('MysqlConnection', () => {
	let connection

	beforeEach(function(){
		connection = new MysqlConnection
	})

	it('should connect', () => {
		connection.connect((error) => {
			assert.ifError(error)
		})
	})

	it('should end connection', async () => {
		await connection.connect()
		connection.end((error) => {
			assert.ifError(error)
		})
	})
})
