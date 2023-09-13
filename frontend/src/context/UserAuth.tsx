import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { createContext } from "react";

interface AuthContextProps {
	userAuthenticated: boolean;
	setUserAuthenticated: Dispatch<SetStateAction<boolean>>;
}

const UserAuthContext = createContext({} as AuthContextProps);

const UserAuthProvider = ({ children }: { children: ReactNode }) => {
	const [userAuthenticated, setUserAuthenticated] = useState(false);

	return (
		<UserAuthContext.Provider
			value={{ userAuthenticated, setUserAuthenticated }}
		>
			{children}
		</UserAuthContext.Provider>
	);
};

export { UserAuthContext, UserAuthProvider };
