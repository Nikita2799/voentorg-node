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

					resolve(result);
				},
			);
		});

		return responce;
	}

	public async getOrderProduct(params: Array<unknown>) {
		const sqlQuery =
			"SELECT * FROM orders o INNER JOIN orderProducts op on op.orderId=? INNER JOIN products p on p.id=op.productId WHERE o.orderId=?";

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

	public async getOrderId(params: Array<unknown>) {
		const sqlQuery = "SELECT orderId FROM ?? ORDER BY orderId DESC LIMIT 1";

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

	public async updateStaus(params: Array<unknown>) {
		const sqlQuery = "UPDATE ?? SET ? WHERE ??=?";

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

	public async delete(params: Array<unknown>) {
		const sqlQuery = "DELETE FROM ?? WHERE ??=?";

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

	public async getProduct(params: Array<unknown>) {
		const sqlQuery =
			"SELECT * FROM ?? INNER JOIN products ON orderProducts.productId=products.id WHERE ??=? ";

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
}
