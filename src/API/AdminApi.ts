import mysql, { MysqlError } from "mysql";

export class AdminApi {
	constructor(private readonly connection: mysql.Pool) {}

	public async create(dataUser: Array<any>) {
		let sqlQuery = "INSERT INTO ?? SET? ";

		let responce = await new Promise((resolve, reject) => {
			this.connection.query(
				sqlQuery,
				dataUser,
				(err: MysqlError | null, result: any) => {
					console.log(err);

					if (err) reject(err.errno);

					resolve(result);
				},
			);
		});

		return responce;
	}

	public async login(dataUser: Array<any>) {
		let sqlQuery = "SELECT * FROM ?? WHERE ??=?";

		let responce = await new Promise((resolve, reject) => {
			this.connection.query(
				sqlQuery,
				dataUser,
				(err: MysqlError | null, result: any) => {
					if (err) reject(new Error(err.message));
					console.log(err);
					console.log(result);

					resolve(result);
				},
			);
		});

		return responce;
	}
}
