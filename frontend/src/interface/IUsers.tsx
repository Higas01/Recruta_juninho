export interface IUsers {
	id: number;
	jobId: number;
	user: User;
}

interface User {
	name: string;
	email: string;
	description: string;
	habilitys: string[];
	level: string;
	age: number;
	tel: string;
}
