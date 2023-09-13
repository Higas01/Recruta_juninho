import {
	Flex,
	useMediaQuery,
	Heading,
	FormControl,
	Box,
	Image,
	Alert,
	AlertIcon,
	AlertDescription,
	Spinner,
} from "@chakra-ui/react";
import FormModel from "../../components/FormModel";
import Inputs from "../../components/Inputs/Inputs";
import { useState, FormEvent, useContext } from "react";
import Btn from "../../components/Btn";
import image_login_company from "../../assets/company/login/image_login_company.png";
import * as EmailValidator from "email-validator";
import { ApiContext } from "../../context/api";
import { IResponse } from "../../interface/IResponse";
import { CompanyAuthContext } from "../../context/companyAuth";

const LoginCompany = () => {
	const [isLargerThan1100px] = useMediaQuery("(min-width: 1100px)");
	const { URL } = useContext(ApiContext);
	const { setCompanyAuthenticated } = useContext(CompanyAuthContext);

	// Inputs
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	//Spinner
	const [showSpinner, setShowSpinner] = useState<boolean>(false);

	// Errors
	const [emailError, setEmailError] = useState<boolean>(false);
	const [msgEmailError, setMsgEmailError] = useState<string>("");
	const [passwordError, setPasswordError] = useState<boolean>(false);
	const [msgPasswordError, setMsgPasswordError] = useState<string>("");
	const [unknownError, setUnknownError] = useState<boolean>(false);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		try {
			event.preventDefault();
			setEmailError(false);
			setPasswordError(false);
			const emailIsValid = EmailValidator.validate(email);

			if (!emailIsValid) {
				setEmailError(true);
				setMsgEmailError("Campo inválido!");
				return;
			}

			if (!password) {
				setPasswordError(true);
				setMsgPasswordError("Campo Senha precisa ser preenchido!");
				return;
			}

			const value = {
				email,
				password,
			};

			setShowSpinner(true);
			const response = await fetch(`${URL}/company/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(value),
				credentials: "include",
			});
			const data: IResponse = await response.json();

			if (data.message === "Senha incorreta") {
				setPasswordError(true);
				setMsgPasswordError("Senha incorreta");
				setShowSpinner(false);
				return;
			}
			if (data.message === "E-mail não cadastrado") {
				setEmailError(true);
				setMsgEmailError("E-mail não cadastrado");
				setShowSpinner(false);
				return;
			}
			setShowSpinner(false);
			setCompanyAuthenticated(true);
		} catch {
			setShowSpinner(false);
			setUnknownError(true);
		}
	};

	return (
		<section>
			<Flex
				minHeight="130vh"
				justifyContent="space-evenly"
				alignItems="center"
				backgroundColor="#f4f4f4"
			>
				{isLargerThan1100px && (
					<Box>
						<Image
							src={image_login_company}
							boxSize="55rem"
							objectFit="cover"
						/>
					</Box>
				)}
				<FormModel>
					<Heading as="h2" fontSize={isLargerThan1100px ? "3rem" : "2rem"}>
						Login como Empresa
					</Heading>
					<FormControl>
						<form onSubmit={handleSubmit}>
							<Inputs
								label="Digite seu email"
								helperText={
									emailError ? msgEmailError : "exemplo: exemplo@hotmail.com"
								}
								type="email"
								value={email}
								setValue={setEmail}
								error={emailError && true}
							/>
							<Inputs
								label="Digite sua senha"
								type="password"
								value={password}
								setValue={setPassword}
								error={passwordError && true}
								helperText={passwordError ? msgPasswordError : undefined}
							/>
							<Btn type="submit" border={true}>
								{showSpinner ? <Spinner /> : "Enviar"}
							</Btn>
						</form>
					</FormControl>
					{unknownError ? (
						<Alert status="error" fontSize="1.5rem" margin="1rem">
							<AlertIcon boxSize="2rem" />
							<AlertDescription>
								Ocorreu algum erro, já estamos trabalhando na solução, tente
								novamente mais tarde
							</AlertDescription>
						</Alert>
					) : (
						<></>
					)}
				</FormModel>
			</Flex>
		</section>
	);
};

export default LoginCompany;
