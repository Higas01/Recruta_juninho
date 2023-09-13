import {
	Flex,
	Heading,
	Box,
	Image,
	FormControl,
	useMediaQuery,
	AlertIcon,
	Alert,
	AlertDescription,
} from "@chakra-ui/react";

import image_register_company from "../../assets/company/register/image_register_company.png";
import FormModel from "../../components/FormModel";
import { useState, useEffect, FormEvent } from "react";
import Inputs from "../../components/Inputs/Inputs";
import { State } from "../../interface/IState";
import InputSelect from "../../components/Inputs/InputSelect";
import { City } from "../../interface/ICity";
import Btn from "../../components/Btn";
import FileUpload from "../../components/FileUpload";
import getStates from "../../hooks/GetStates";
import getCitys from "../../hooks/GetCitys";
import TextArea from "../../components/Inputs/TextArea";
import * as EmailValidator from "email-validator";
import { useContext } from "react";
import { ApiContext } from "../../context/api";
import { IResponse } from "../../interface/IResponse";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

const RegisterCompany = () => {
	const navigate = useNavigate();

	// Inputs
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [arrayStates, setArrayStates] = useState<State[]>([]);
	const [arrayCity, setArrayCitys] = useState<City[]>([]);
	const [state, setState] = useState<string>("");
	const [city, setCity] = useState<string>("");
	const [selectedFile, setSelectedFile] = useState<File | null>(null);

	// Errors
	const [emailError, setEmailError] = useState<boolean>(false);
	const [msgEmailError, setMsgEmailError] = useState<string>("");
	const [passwordError, setPasswordError] = useState<boolean>(false);
	const [msgPasswordError, setMsgPasswordError] = useState<string>("");
	const [nameError, setNameError] = useState<boolean>(false);
	const [descriptionError, setDescriptionError] = useState<boolean>(false);
	const [cityError, setCityError] = useState<boolean>(false);
	const [unknownError, setUnknownError] = useState<boolean>(false);

	//Success
	const [success, setSuccess] = useState<boolean>(false);

	//Spinner
	const [showSpinner, setShowSpinner] = useState<boolean>(false);

	// BreakPoints
	const [isLargerThan1100px] = useMediaQuery("(min-width: 1100px)");

	const { URL } = useContext(ApiContext);

	const handleFileSelect = (file: File | null) => {
		setSelectedFile(file);
	};

	useEffect(() => {
		if (arrayStates.length === 0) {
			getStates(setArrayStates);
		}
	}, []);

	useEffect(() => {
		getCitys(setArrayCitys, state);
	}, [state]);

	const handleSubmit = async (
		event: FormEvent<HTMLFormElement>
	): Promise<void> => {
		try {
			event.preventDefault();
			setSuccess(false);
			setEmailError(false);
			setPasswordError(false);
			setNameError(false);
			setDescriptionError(false);
			setCityError(false);
			setUnknownError(false);
			setShowSpinner(false);

			const emailIsValid = EmailValidator.validate(email);

			if (!name) {
				setNameError(true);
				return;
			}

			if (!emailIsValid) {
				setEmailError(true);
				setMsgEmailError("Campo inválido!");
				return;
			}

			if (password.length < 6) {
				setPasswordError(true);
				setMsgPasswordError("Senha precisar ter ao menos 6 caracteres");
				return;
			}

			if (!(password === confirmPassword)) {
				setPasswordError(true);
				setMsgPasswordError("Campos Senha e Confirmar senha devem ser iguais!");
				return;
			}

			if (!description) {
				setDescriptionError(true);
				return;
			}

			if (!state) {
				setCityError(true);
				return;
			}

			const formData = new FormData();
			setShowSpinner(true);

			formData.append("name", name);
			formData.append("email", email);
			formData.append("password", password);
			formData.append("description", description);
			formData.append("state", state);
			formData.append("city", city);
			if (selectedFile) {
				formData.append("photo", selectedFile);
			}

			const response = await fetch(`${URL}/company`, {
				method: "POST",
				body: formData,
			});

			const data: IResponse = await response.json();
			if (data.message == "Email já cadastrado") {
				setEmailError(true);
				setMsgEmailError("Email já cadastrado");
				setShowSpinner(false);
				return;
			}

			setSuccess(true);
			setShowSpinner(false);

			setTimeout(() => {
				navigate("/company/login");
			}, 2000);
		} catch {
			setShowSpinner(false);
			setUnknownError(true);
		}
	};

	return (
		<section>
			<Flex
				minHeight="160vh"
				justifyContent="space-around"
				alignItems="center"
				paddingTop="120px"
			>
				{isLargerThan1100px && (
					<Box>
						<Image
							src={image_register_company}
							boxSize="60rem"
							objectFit="contain"
						/>
					</Box>
				)}
				<FormModel>
					<Heading as="h2" fontSize={isLargerThan1100px ? "3rem" : "2rem"}>
						Registre-se abaixo
					</Heading>

					<FormControl>
						<form onSubmit={handleSubmit}>
							<Inputs
								label="Nome da sua Empresa"
								value={name}
								setValue={setName}
								helperText={
									nameError
										? "Campo nome precisa ser preenchido"
										: "exemplo: Empresa bem legal!"
								}
								error={nameError && true}
								type="text"
							/>
							<Inputs
								label="Email da Sua Empresa"
								value={email}
								setValue={setEmail}
								helperText={
									emailError ? msgEmailError : "exemplo: exemplo@hotmail.com"
								}
								error={emailError && true}
								type="email"
							/>
							<Inputs
								label="Sua Senha"
								value={password}
								setValue={setPassword}
								helperText={passwordError ? msgPasswordError : undefined}
								error={passwordError && true}
								type="password"
							/>
							<Inputs
								label="Repita sua Senha"
								value={confirmPassword}
								setValue={setConfirmPassword}
								helperText={passwordError ? msgPasswordError : undefined}
								error={passwordError && true}
								type="password"
							/>
							<TextArea
								label="Descrição da sua Empresa"
								placeholder="Conte um pouco mais sobre sua empresa..."
								description={description}
								setDescription={setDescription}
								error={descriptionError && true}
							/>
							<InputSelect
								label="Selecione o Estado da sua Empresa"
								stateValue={arrayStates}
								setValue={setState}
							/>
							<InputSelect
								label="Selecione a Cidade da sua Empresa"
								cityValue={arrayCity}
								setValue={setCity}
								disable={!state && true}
								error={cityError && true}
							/>
							<FileUpload onFileSelect={handleFileSelect} />
							<Btn
								type="submit"
								border={true}
								disabled={showSpinner ? true : undefined}
							>
								{showSpinner ? <Spinner /> : "Enviar"}
							</Btn>
						</form>
					</FormControl>
					{success ? (
						<Alert status="success" fontSize="1.5rem" margin="1rem">
							<AlertIcon boxSize="2rem" />
							Conta criada com sucesso!
						</Alert>
					) : unknownError ? (
						<Alert status="error" fontSize="1.5rem" margin="1rem">
							<AlertIcon boxSize="2rem" />
							<AlertDescription>
								Ocorreu algum erro, já estamos trabalhando na solução! Tente
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

export default RegisterCompany;
