export interface IOrder {
	typePost: string;
	city: string;
	phoneClient: string;
	typePay: string;
	products: Array<any>;
	branchesNumber: number;
}

export interface ISort {
	sortArray:[
        {
            "typePost": string,
            "address": string,
            "phoneClient": string,
            "typePay": string,
            "branchesNumber":number,
            "orderId": number,
            "productId": Array<number>,
            "amount": number,
            "size": "M"
        }
    ]
}
