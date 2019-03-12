import mysql from 'mysql'
import util from 'util'
export class MysqlConnection {
	constructor(){
		this._connection = mysql.createConnection({
			host: process.env.MYSQL_HOST,
			user: process.env.MYSQL_USER,
			port: process.env.MYSQL_PORT,
			password: process.env.MYSQL_PASSWORD,
			database: process.env.MYSQL_DATABASE
		})

		this.connect = util.promisify(this._connection.connect.bind(this._connection))
	}
}
