export interface IProduct {
	dataProduct:
	{id: number;
	name: string;
	category: number;
	price: number;
	discont: number;
	inOrder: number;
	brand: string;
	description: string;
	size:string}
}

export interface IProductList extends IProduct {
	id: number;
}

export interface IAccesToken {
	token_type: string;
	expires_in: number;
	access_token: string;
}
