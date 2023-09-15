import {
	Flex,
	Image,
	FormControl,
	Box,
	Heading,
	useMediaQuery,
	Alert,
	AlertIcon,
	AlertDescription,
	Spinner,
} from "@chakra-ui/react";
import image_login_user from "../../assets/users/login/image_login_user.png";
import Inputs from "../../components/Inputs/Inputs";
import { FormEvent, useContext, useState } from "react";
import Btn from "../../components/Btn";
import FormModel from "../../components/FormModel";
import * as EmailValidator from "email-validator";
import { IResponse } from "../../interface/IResponse";
import { UserAuthContext } from "../../context/UserAuth";
import { ApiContext } from "../../context/api";

const LoginUser = () => {
	// Inputs
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [isLargerThan1100px] = useMediaQuery("(min-width: 1100px)");

	// errors
	const [emailError, setEmailError] = useState<boolean>(false);
	const [msgEmailError, setMsgEmailError] = useState<string>("");
	const [passwordError, setPasswordError] = useState<boolean>(false);
	const [msgPasswordError, setMsgPasswordError] = useState<string>("");
	const [unknownError, setUnknownError] = useState<boolean>(false);

	//Spinner
	const [showSpinner, setShowSpinner] = useState<boolean>(false);

	const { setUserAuthenticated } = useContext(UserAuthContext);

	const { URL } = useContext(ApiContext);

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
			const response = await fetch(`${URL}/user/login`, {
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
			setUserAuthenticated(true);
		} catch (e) {
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
						<Image src={image_login_user} boxSize="50rem" objectFit="contain" />
					</Box>
				)}
				<FormModel>
					<Heading as="h2" fontSize={isLargerThan1100px ? "3rem" : "2rem"}>
						Login como Candidato
					</Heading>
					<FormControl>
						<form
							style={{
								height: "50%",
							}}
							onSubmit={handleSubmit}
						>
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
								label={"Digite sua senha"}
								type="password"
								value={password}
								setValue={setPassword}
								error={passwordError && true}
								helperText={passwordError ? msgPasswordError : ""}
							/>
							<Btn type="submit" border={true}>
								{showSpinner ? <Spinner /> : "Enviar"}
							</Btn>
						</form>
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
					</FormControl>
				</FormModel>
			</Flex>
		</section>
	);
};

export default LoginUser;
