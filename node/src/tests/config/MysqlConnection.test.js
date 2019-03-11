import assert from 'assert'
import { MysqlConnection } from '../../config/MysqlConnection'

describe('MysqlConnection', () => {
	it('should connect', () => {
		(new MysqlConnection).connect((error) => {
			assert.ifError(error)
		})
	})
})
