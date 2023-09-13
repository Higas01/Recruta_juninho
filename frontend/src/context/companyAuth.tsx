import {
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useState,
} from "react";
import { createContext } from "react";
import { ApiContext } from "./api";
import { IResponse } from "../interface/IResponse";

interface AuthContextProps {
	companyAuthenticated: boolean | null;
	setCompanyAuthenticated: Dispatch<SetStateAction<boolean | null>>;
	verifyCompanyToken: () => Promise<void>;
	companyIsLoading: boolean;
}

const CompanyAuthContext = createContext({} as AuthContextProps);

const CompanyAuthProvider = ({ children }: { children: ReactNode }) => {
	const [companyAuthenticated, setCompanyAuthenticated] = useState<
		boolean | null
	>(null);
	const [companyIsLoading, setCompanyIsLoading] = useState(true);
	const { URL } = useContext(ApiContext);

	const verifyCompanyToken = async (): Promise<void> => {
		const response = await fetch(`${URL}/company/token`, {
			method: "POST",
			credentials: "include",
		});
		const data: IResponse = await response.json();

		if (data.message === "Token válido") {
			setCompanyIsLoading(false);
			setCompanyAuthenticated(true);
			return;
		} else {
			setCompanyIsLoading(false);
			setCompanyAuthenticated(false);
		}
	};
	console.log(companyAuthenticated);

	return (
		<CompanyAuthContext.Provider
			value={{
				companyAuthenticated,
				setCompanyAuthenticated,
				verifyCompanyToken,
				companyIsLoading,
			}}
		>
			{children}
		</CompanyAuthContext.Provider>
	);
};

export { CompanyAuthContext, CompanyAuthProvider };
