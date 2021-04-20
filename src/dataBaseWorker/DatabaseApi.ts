import mysql from "mysql";
import { config } from "../../config/serverConfig";
import { CategoryApi } from "../API/CategoryApi";
import { ProductsApi } from "../API/ProductApi";
import { AdminApi } from "../API/AdminApi";
import { OrdersApi } from "../API/OrdersApi";
import { SubCategoryApi } from "../API/SubCategoryApi";

export class DatabaseApi {
	private connection: mysql.Pool = mysql.createPool(config.dataBase_config);

	public admin: AdminApi = new AdminApi(this.connection);
	public products: ProductsApi = new ProductsApi(this.connection);
	public category: CategoryApi = new CategoryApi(this.connection);
	public orders: OrdersApi = new OrdersApi(this.connection);
	public subcategory: SubCategoryApi = new SubCategoryApi(this.connection);
}
