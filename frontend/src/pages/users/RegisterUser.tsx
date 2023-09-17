import {
	Flex,
	Heading,
	Box,
	FormControl,
	Image,
	Text,
	useMediaQuery,
	Alert,
	AlertIcon,
	AlertDescription,
	Spinner,
} from "@chakra-ui/react";
import { RiCloseLine } from "react-icons/ri";
import image_register_user from "../../assets/users/register/image_register_user.png";
import { BsArrowReturnLeft } from "react-icons/bs";
import { useState, useEffect, FormEvent, useContext } from "react";
import Inputs from "../../components/Inputs/Inputs";
import TextArea from "../../components/Inputs/TextArea";
import InputRadio from "../../components/Inputs/InputRadio";
import InputTel from "../../components/Inputs/InputTel";
import Btn from "../../components/Btn";
import FormModel from "../../components/FormModel";
import getStates from "../../hooks/GetStates";
import getCitys from "../../hooks/GetCitys";
import InputSelect from "../../components/Inputs/InputSelect";
import { City } from "../../interface/ICity";
import { State } from "../../interface/IState";
import * as EmailValidator from "email-validator";
import { ApiContext } from "../../context/api";
import { IResponse } from "../../interface/IResponse";
import { useNavigate } from "react-router-dom";

const RegisterUser = () => {
	// Inputs
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [age, setAge] = useState<number>();
	const [page, setPage] = useState(1);
	const [arrayStates, setArrayStates] = useState<State[]>([]);
	const [arrayCity, setArrayCitys] = useState<City[]>([]);
	const [state, setState] = useState<string>("");
	const [city, setCity] = useState<string>("");
	const [habilitys, setHabilitys] = useState<string>("");
	const [arrayHabilitys, setArrayHabilitys] = useState<string[]>([]);
	const [description, setDescription] = useState<string>("");
	const [level, setLevel] = useState<string>("");
	const [tel, setTel] = useState<string>("");

	// Errors
	const [nameError, setNameError] = useState<boolean>(false);
	const [msgNameError, setMsgNameError] = useState<string>("");
	const [emailError, setEmailError] = useState<boolean>(false);
	const [msgEmailError, setMsgEmailError] = useState<string>("");
	const [passwordError, setPasswordError] = useState<boolean>(false);
	const [msgPasswordError, setMsgPasswordError] = useState<string>("");
	const [confirmPasswordError, setConfirmPasswordError] =
		useState<boolean>(false);
	const [msgConfirmPassword, setMsgConfirmPassword] = useState<string>("");
	const [ageError, setAgeError] = useState<boolean>(false);
	const [msgAgeError, setMsgAgeError] = useState<string>("");
	const [cityError, setCityError] = useState<boolean>(false);
	const [habilitysError, setHabilitysError] = useState<boolean>(false);
	const [msgHabilitysError, setMsgHabilitysError] = useState<string>("");
	const [descriptionError, setDescriptionError] = useState<boolean>(false);
	const [msgDescriptionError, setMsgDescriptionError] = useState<string>("");
	const [levelError, setLevelError] = useState<boolean>(false);
	const [telError, setTelError] = useState<boolean>(false);
	const [msgTelError, setMsgTelError] = useState<string>("");
	const [unknownError, setUnknownError] = useState<boolean>(false);

	// success
	const [success, setSuccess] = useState<boolean>(false);

	// breakpoints
	const [isLargerThan1100px] = useMediaQuery("(min-width: 1100px)");
	const [isHeightThan775px] = useMediaQuery("(min-height: 775px)");
	const [isHeightThan500px] = useMediaQuery("(min-height: 500px)");

	// spinner
	const [showSpinner, setShowSpinner] = useState<boolean>(false);

	const { URL } = useContext(ApiContext);

	const navigate = useNavigate();

	useEffect(() => {
		if (arrayStates.length === 0) {
			getStates(setArrayStates);
		}
	}, []);

	useEffect(() => {
		getCitys(setArrayCitys, state);
	}, [state]);

	const handleHabilitys = (hability: string) => {
		if (!hability) {
			return;
		}
		setArrayHabilitys(arrayHabilitys.concat(hability));
		setHabilitys("");
	};
	const handleRemoveHability = (indexToRemove: number) => {
		const newArray = arrayHabilitys.filter(
			(_, index) => index !== indexToRemove
		);
		setArrayHabilitys(newArray);
	};

	const nextPage = () => {
		const isValid = validateFormPage1();

		if (!isValid) {
			return;
		}
		setPage((prevPage) => prevPage + 1);
	};

	const prevPage = () => {
		setPage((prevPage) => prevPage - 1);
	};

	const validateFormPage1 = (): boolean => {
		setNameError(false);
		setEmailError(false);
		setPasswordError(false);
		setConfirmPasswordError(false);
		setAgeError(false);
		setCityError(false);
		if (!name) {
			setNameError(true);
			setMsgNameError("Campo Nome precisar ser preenchido!");
			return false;
		}
		if (!email) {
			setEmailError(true);
			setMsgEmailError("Campo Email precisa ser preenchido!");
			return false;
		}
		const validateEmail = EmailValidator.validate(email);

		if (!validateEmail) {
			setEmailError(true);
			setMsgEmailError("Escreva um email válido!");
			return false;
		}
		if (password.length < 6) {
			setPasswordError(true);
			setMsgPasswordError("Senha precisar ter ao menos 6 caracteres");
			return false;
		}

		if (password !== confirmPassword) {
			setConfirmPasswordError(true);
			setMsgConfirmPassword(
				"Campo Senha e Repita Sua Senha precisam ser iguais"
			);
			return false;
		}

		if (!age) {
			setAgeError(true);
			setMsgAgeError("Campo Idade precisa ser preenchido");
			return false;
		}

		if (!state) {
			setCityError(true);
			return false;
		}

		return true;
	};

	const validateFormPage2 = (): boolean => {
		setHabilitysError(false);
		setDescriptionError(false);
		setLevelError(false);
		setTelError(false);
		if (arrayHabilitys.length === 0) {
			setHabilitysError(true);
			setMsgHabilitysError("Campo habilidade precisa ser preenchido!");
			return false;
		}

		if (!description) {
			setDescriptionError(true);
			setMsgDescriptionError("Campo descrição precisa ser preenchido!");
			return false;
		}

		if (!level) {
			setLevelError(true);
		}

		if (!tel) {
			setTelError(true);
			setMsgTelError("Campo telefone precisa ser preenchido!");
		}
		return true;
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		setUnknownError(false);
		setSuccess(false);
		try {
			e.preventDefault();
			const isValid = validateFormPage2();
			if (!isValid) {
				return;
			}
			const value = {
				name,
				age,
				email: email,
				level,
				habilitys: arrayHabilitys,
				description,
				tel,
				city,
				state,
				password,
			};

			setShowSpinner(true);
			const response = await fetch(`${URL}/user`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(value),
			});

			const data: IResponse = await response.json();

			if (data.message === "Usuário criado com sucesso") {
				setShowSpinner(false);
				setSuccess(true);
				setTimeout(() => {
					navigate("/user/login");
				}, 2000);
			}

			if (data.message === "Usuário já existente") {
				setShowSpinner(false);
				setEmailError(true);
				setMsgEmailError("Email já cadastrado");
				setPage(1);
			}
		} catch {
			setShowSpinner(false);
			setUnknownError(true);
		}
	};

	return (
		<Flex
			minHeight={
				isHeightThan775px ? "130vh" : isHeightThan500px ? "160vh" : "250vh"
			}
			backgroundColor="#f4f4f4"
			justifyContent="space-evenly"
			alignItems="center"
		>
			{isLargerThan1100px && (
				<Box>
					<Image src={image_register_user} boxSize="50rem" objectFit="cover" />
				</Box>
			)}
			<FormModel>
				{page === 2 && (
					<Btn
						type="button"
						setOnClick={prevPage}
						alingItems="end"
						justifyContent="end"
						border={true}
					>
						<BsArrowReturnLeft />
					</Btn>
				)}
				<Flex alignItems="center" textAlign="center">
					<Heading as="h2" fontSize={isLargerThan1100px ? "3rem" : "2rem"}>
						Registre-se abaixo
					</Heading>
					<Text
						fontSize={isLargerThan1100px ? "3rem" : "2rem"}
						marginLeft="2rem"
					>
						{page}/2
					</Text>
				</Flex>
				<FormControl height="50%">
					{page === 1 && (
						<>
							<Inputs
								label="Nome Completo"
								helperText={
									nameError
										? msgNameError
										: "exemplo: Higor Matheus Rocha Porangaba"
								}
								type="text"
								value={name}
								setValue={setName}
								error={nameError && true}
							/>
							<Inputs
								label="Seu Email"
								helperText={
									emailError ? msgEmailError : "exemplo: exemplo@gmail.com"
								}
								type="email"
								value={email}
								setValue={setEmail}
								error={emailError && true}
							/>
							<Inputs
								label="Sua Senha"
								helperText={passwordError ? msgPasswordError : ""}
								type="password"
								value={password}
								error={passwordError && true}
								setValue={setPassword}
							/>
							<Inputs
								label="Repita Sua Senha"
								type="password"
								value={confirmPassword}
								helperText={confirmPasswordError ? msgConfirmPassword : ""}
								error={confirmPasswordError && true}
								setValue={setConfirmPassword}
							/>
							<Inputs
								label="Sua idade"
								type="number"
								value={age}
								setValue={setAge}
								error={ageError && true}
								helperText={ageError ? msgAgeError : ""}
							/>
							<InputSelect
								label="Selecione seu Estado"
								stateValue={arrayStates}
								setValue={setState}
							/>
							<InputSelect
								label="Selecione sua Cidade"
								cityValue={arrayCity}
								setValue={setCity}
								disable={!state && true}
								error={cityError && true}
							/>
							<Btn type="button" setOnClick={nextPage} border={true}>
								Seguir
							</Btn>
						</>
					)}
					{page === 2 && (
						<form
							style={{
								height: "50%",
							}}
							onSubmit={handleSubmit}
						>
							<Box>
								<Inputs
									label="Escreva Suas 7 Principais Habilidades (uma de cada vez)"
									helperText={
										habilitysError ? msgHabilitysError : "exemplo: Java"
									}
									type="text"
									value={habilitys}
									setValue={setHabilitys}
									disable={arrayHabilitys.length === 7 ? true : false}
									error={habilitysError && true}
								/>
								<Flex height="20%" flexWrap="wrap">
									{arrayHabilitys.map((hability, index) => (
										<Flex
											margin="1rem"
											borderRadius="6px"
											flexDirection="column"
											wrap="wrap"
										>
											<Flex
												width="100%"
												justifyContent="flex-end"
												alignItems="flex-end"
											>
												<Btn
													type="button"
													setOnClick={() => handleRemoveHability(index)}
													border={false}
												>
													<RiCloseLine fontSize="1.5rem" />
												</Btn>
											</Flex>
											<Text fontSize="1.5rem" key={index}>
												{hability}
											</Text>
										</Flex>
									))}
								</Flex>
								<Btn
									type="button"
									setOnClick={() => handleHabilitys(habilitys)}
									justifyContent="start"
									alingItems="start"
									border={true}
								>
									Salvar Habilidade
								</Btn>

								<TextArea
									placeholder={
										descriptionError ? msgDescriptionError : undefined
									}
									label="Sua Descrição"
									description={description}
									setDescription={setDescription}
									error={descriptionError && true}
								/>
							</Box>
							<InputRadio
								label="Qual tipo de vaga você busca?"
								value={level}
								setValue={setLevel}
								error={levelError && true}
							/>
							<InputTel
								label="Digite seu número"
								value={tel}
								setValue={setTel}
								helperText={telError ? msgTelError : "exemplo: (00) 00000-0000"}
								error={telError && true}
							/>
							<Btn
								type="submit"
								border={true}
								disabled={showSpinner ? true : undefined}
							>
								{showSpinner ? <Spinner /> : "Enviar"}
							</Btn>
						</form>
					)}
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
				</FormControl>
			</FormModel>
		</Flex>
	);
};

export default RegisterUser;
