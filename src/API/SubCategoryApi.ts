import mysql, { MysqlError } from "mysql";

export class SubCategoryApi {
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

	public async getByCategory(params: Array<unknown>) {
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

	public async getSubCategoryByID(params: Array<unknown>) {
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
	public async postImage(params: Array<any>): Promise<Array<any>> {
		const sqlQuery = "UPDATE ?? SET? WHERE ??=?";

		const responce: any = await new Promise((resolve, reject) => {
			this.connection.query(
				sqlQuery,
				params,
				(err: MysqlError | null, result: Array<any>) => {
					if (err) reject(new Error(err.message));
					console.log(err);

					resolve(result);
				},
			);
		});

		return responce;
	}
	// public async getOneById(params: Array<any>) {
	// 	const sqlQuery = "SELECT * FROM ?? WHERE ??=?";

	// 	let responce: any = await new Promise((resolve, reject) => {
	// 		this.connection.query(
	// 			sqlQuery,
	// 			params,
	// 			(err: MysqlError | null, result: any) => {
	// 				if (err) reject(new Error(err.message));
	// 				console.log(err);

	// 				resolve(result);
	// 			},
	// 		);
	// 	});

	// 	return responce;
	// }
	public async updateImg(params: Array<any>) {
		let sqlQuery = "UPDATE ?? SET? WHERE ??=?";
		console.log(params);

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
	public async update(params: Array<any>) {
		let sqlQuery = "UPDATE ?? SET? WHERE ??=?";
		console.log(params);

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
