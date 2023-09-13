import { ReactNode } from "react";
import { createContext } from "react";

interface ApiContextProps {
	URL: string;
}

const ApiContext = createContext({} as ApiContextProps);

const ApiProvider = ({ children }: { children: ReactNode }) => {
	const URL = import.meta.env.VITE_API_URL;
	return <ApiContext.Provider value={{ URL }}>{children}</ApiContext.Provider>;
};

export { ApiProvider, ApiContext };
