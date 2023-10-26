import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { UserAuthProvider } from "./context/UserAuth.tsx";
import { CompanyAuthProvider } from "./context/companyAuth.tsx";
import { ApiProvider } from "./context/api.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ChakraProvider>
			<UserAuthProvider>
				<CompanyAuthProvider>
					<ApiProvider>
						<BrowserRouter>
							<App />
						</BrowserRouter>
					</ApiProvider>
				</CompanyAuthProvider>
			</UserAuthProvider>
		</ChakraProvider>
	</React.StrictMode>
);
