export interface IOrder {
	clientName: string;
	typePost: string;
	city: string;
	phoneClient: string;
	typePay: string;
	products: Array<any>;
	postNumber: number;
	address: string;
	orderNumber: string;
}

export interface ISort {
	sortArray: [
		{
			typePost: string;
			address: string;
			phoneClient: string;
			typePay: string;
			branchesNumber: number;
			orderId: number;
			productId: Array<number>;
			amount: number;
			size: "M";
		},
	];
}
