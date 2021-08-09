import mysql, { MysqlError } from "mysql";
import { IProductList } from "../modules/Products/type";

export class ProductsApi {
	constructor(private readonly connection: mysql.Pool) {}

	public async post(params: Array<unknown>) {
		let sqlQuery = "INSERT INTO ?? SET? ";

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
		let sqlQuery = "SELECT * FROM ??";

		let responce = await new Promise((resolve, reject) => {
			this.connection.query(
				sqlQuery,
				params,
				(err: MysqlError | null, result: Array<IProductList>) => {
					if (err) reject(new Error(err.message));
					console.log(err);

					resolve(result);
				},
			);
		});

		return responce;
	}

	public async getOne(params: Array<any>): Promise<Array<IProductList>> {
		let sqlQuery = "SELECT * FROM ?? WHERE ??=?";

		let responce: Array<IProductList> = await new Promise((resolve, reject) => {
			this.connection.query(
				sqlQuery,
				params,
				(err: MysqlError | null, result: Array<IProductList>) => {
					if (err) reject(new Error(err.message));
					console.log(err);

					resolve(result);
				},
			);
		});

		return responce;
	}

	public async getProductCategory(
		params: Array<any>,
	): Promise<Array<IProductList>> {
		let sqlQuery = "SELECT * FROM ?? WHERE ??=?";

		let responce: Array<IProductList> = await new Promise((resolve, reject) => {
			this.connection.query(
				sqlQuery,
				params,
				(err: MysqlError | null, result: Array<IProductList>) => {
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

	public async delete(params: Array<any>) {
		let sqlQuery = "DELETE FROM ?? WHERE ??=?";

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

	public async getCurrent(params: Array<any>): Promise<Array<IProductList>> {
		const sqlQuery = "SELECT * FROM ?? WHERE ??=?";

		const responce: any = await new Promise((resolve, reject) => {
			this.connection.query(
				sqlQuery,
				params,
				(err: MysqlError | null, result: Array<IProductList>) => {
					if (err) reject(new Error(err.message));
					console.log(err);

					resolve(result);
				},
			);
		});

		return responce;
	}

	public async filter(params: Array<any>): Promise<Array<IProductList>> {
		const sqlQuery = "SELECT * FROM ?? ";

		const responce: any = await new Promise((resolve, reject) => {
			this.connection.query(
				sqlQuery,
				params,
				(err: MysqlError | null, result: Array<IProductList>) => {
					if (err) reject(new Error(err.message));
					console.log(err);

					resolve(result);
				},
			);
		});

		return responce;
	}

	public async postImage(params: Array<any>): Promise<Array<IProductList>> {
		const sqlQuery = "UPDATE ?? SET? WHERE ??=? ";

		const responce: any = await new Promise((resolve, reject) => {
			this.connection.query(
				sqlQuery,
				params,
				(err: MysqlError | null, result: Array<IProductList>) => {
					if (err) reject(new Error(err.message));
					console.log(err);

					resolve(result);
				},
			);
		});

		return responce;
	}

	public async getProductDiscount(
		params: Array<any>,
	): Promise<Array<IProductList>> {
		const sqlQuery = "SELECT * FROM ?? WHERE ??!=? ";

		const responce: any = await new Promise((resolve, reject) => {
			this.connection.query(
				sqlQuery,
				params,
				(err: MysqlError | null, result: Array<IProductList>) => {
					if (err) reject(new Error(err.message));
					console.log(err);

					resolve(result);
				},
			);
		});

		return responce;
	}
}
