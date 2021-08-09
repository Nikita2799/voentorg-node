export interface IProduct {
	id: number;
	name: string;
	category: number;
	price: number;
	discont: number;
	inOrder: number;
	brand: string;
	description: string;
}

export interface IProductList extends IProduct {
	id: number;
}
