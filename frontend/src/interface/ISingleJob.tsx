export interface ISingleJob {
	id: number;
	companyId: number;
	name: string;
	description: string;
	level: string;
	type_of_contract: string;
	habilitys: string[];
	sallary: string;
	remote: boolean;
	requirements: string;
	responsibilities: string;
	company: Company;
}

interface Company {
	name: string;
	city: string;
	state: string;
	description: string;
	photo: string;
}
