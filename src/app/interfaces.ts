export interface User {
	name: string,
	phone: string,
	email: string,
	gender: string,
	[key: string]: string;
}