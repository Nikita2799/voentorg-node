import mysql, { MysqlError } from "mysql";

export class CategoryApi {
	constructor(private readonly connection: mysql.Pool) {}

	public async post(params: Array<unknown>) {
		const sqlQuery = "INSERT INTO ?? SET? ";

		let responce = await new Promise((resolve, reject) => {
			this.connection.query(
				sqlQuery,
				params,
				(err: MysqlError | null, result: any) => {
					if (err) reject(new Error(err.message));

					resolve(result);
				},
			);
		});

		return responce;
	}

	public async getAll(params: Array<any>) {
		const sqlQuery = "SELECT * FROM ??";

		let responce = await new Promise((resolve, reject) => {
			this.connection.query(
				sqlQuery,
				params,
				(err: MysqlError | null, result: any) => {
					if (err) reject(new Error(err.message));
					console.log(err);

					resolve(result);
				},
			);
		});

		return responce;
	}

	public async getOneById(params: Array<any>) {
		const sqlQuery = "SELECT * FROM ?? WHERE ??=?";

		let responce: any = await new Promise((resolve, reject) => {
			this.connection.query(
				sqlQuery,
				params,
				(err: MysqlError | null, result: any) => {
					if (err) reject(new Error(err.message));
					console.log(err);

					resolve(result);
				},
			);
		});

		return responce;
	}

	public async getCategoryByName(params: Array<any>) {
		const sqlQuery = "SELECT * FROM ?? WHERE ??=?";

		let responce: any = await new Promise((resolve, reject) => {
			this.connection.query(
				sqlQuery,
				params,
				(err: MysqlError | null, result: any) => {
					if (err) reject(new Error(err.message));
					console.log(err);

					resolve(result);
				},
			);
		});

		return responce;
	}
}
