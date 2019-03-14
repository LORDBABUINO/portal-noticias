import assert from 'assert'
import { MysqlConnection } from '../../config/MysqlConnection'

const CREATION_QUERY = 'CREATE TABLE test_table( \
	id_news int not null primary key auto_increment \
)'
const REMOVAL_QUERY = 'DROP TABLE test_table'

describe('MysqlConnection', function () {
	this.timeout(Infinity)
	let connection

	beforeEach(function(){
		connection = new MysqlConnection
	})

	it('should connect', async () => {
		await assert.doesNotReject(connection.connect)
	})

	it('should execute query', async () => {
		await assert.doesNotReject(async () => {
			await connection.query(CREATION_QUERY)
			await connection.query(REMOVAL_QUERY)
		})
	});

	it('should end connection', async () => {
		await connection.connect()
		await assert.doesNotReject(connection.end)
	})
})
