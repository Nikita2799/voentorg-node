import mysql, { MysqlError } from "mysql";

export class OrdersApi {
	constructor(private readonly connection: mysql.Pool) {}

	public async getNew(params: Array<unknown>) {
		//params: Array<unknown>
		const sqlQuery = "SELECT * FROM ?? WHERE ??=?";

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

	public async postOrder(params: Array<unknown>) {
		const sqlQuery = "INSERT INTO ?? SET? ";

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

	public async postProduct(params: Array<unknown>) {
		const sqlQuery = "INSERT INTO ?? SET?";

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
}
