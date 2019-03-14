import { createConnection } from 'mysql'
import { IConnection } from './database/iconnection'
import { promisify } from 'util'
export class MysqlConnection extends IConnection {
	constructor(){
		super()
		this._connection = createConnection({
			host: process.env.MYSQL_HOST,
			user: process.env.MYSQL_USER,
			port: process.env.MYSQL_PORT,
			password: process.env.MYSQL_PASSWORD,
			database: process.env.MYSQL_DATABASE
		})

		this.connect	= promisify(this._connection.connect.bind(this._connection))
		this.query		= promisify(this._connection.query.bind(this._connection))
		this.end			= promisify(this._connection.end.bind(this._connection))
	}
}
