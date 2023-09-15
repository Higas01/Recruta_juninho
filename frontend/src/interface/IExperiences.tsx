export interface IExperience {
	habilitys: string[];
	function: string;
	experience_profile: string;
	project_name: string;
	description: string;
	user: User;
}

interface User {
	name: string;
}
