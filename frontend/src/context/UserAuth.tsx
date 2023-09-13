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
	userAuthenticated: boolean | null;
	setUserAuthenticated: Dispatch<SetStateAction<boolean | null>>;
	verifyUserToken: () => Promise<void>;
	userIsLoading: boolean;
}

const UserAuthContext = createContext({} as AuthContextProps);

const UserAuthProvider = ({ children }: { children: ReactNode }) => {
	const [userAuthenticated, setUserAuthenticated] = useState<boolean | null>(
		false
	);
	const [userIsLoading, setUserIsLoading] = useState<boolean>(true);

	const { URL } = useContext(ApiContext);

	const verifyUserToken = async (): Promise<void> => {
		const response = await fetch(`${URL}/user/token`, {
			method: "POST",
			credentials: "include",
		});
		const data: IResponse = await response.json();

		if (data.message === "Token válido") {
			setUserIsLoading(false);
			setUserAuthenticated(true);
			return;
		} else {
			setUserIsLoading(false);
			setUserAuthenticated(false);
		}
	};

	return (
		<UserAuthContext.Provider
			value={{
				userAuthenticated,
				setUserAuthenticated,
				verifyUserToken,
				userIsLoading,
			}}
		>
			{children}
		</UserAuthContext.Provider>
	);
};

export { UserAuthContext, UserAuthProvider };
