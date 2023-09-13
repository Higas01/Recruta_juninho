import { FormEvent, useContext, useState } from "react";
import {
	Flex,
	FormControl,
	Heading,
	Text,
	useMediaQuery,
	Alert,
	AlertIcon,
	AlertDescription,
	Spinner,
} from "@chakra-ui/react";
import Inputs from "../../components/Inputs/Inputs";
import TextArea from "../../components/Inputs/TextArea";
import Btn from "../../components/Btn";
import { RiCloseLine } from "react-icons/ri";
import InputRadio from "../../components/Inputs/InputRadio";
import InputSallary from "../../components/Inputs/InputSallary";
import { ApiContext } from "../../context/api";
import { IResponse } from "../../interface/IResponse";

const CreateJob = () => {
	const [isLargerThan800px] = useMediaQuery("(min-width: 800px)");

	// Inputs
	const [occupation, setOccupation] = useState<string>("");
	const [sallary, setSallary] = useState<string>("");
	const [level, setLevel] = useState<string>("");
	const [remote, setRemote] = useState<string>("");
	const [habilitys, setHabilitys] = useState<string>("");
	const [arrayHabilitys, setArrayHabilitys] = useState<string[]>([]);
	const [responsibilities, setResponsibilities] = useState<string>("");
	const [requirements, setRequirements] = useState<string>("");

	// errors
	const [occupationError, setOccupationError] = useState<boolean>(false);
	const [msgOccupationError, setMsgOccupationError] = useState<string>("");
	const [sallaryError, setSallaryError] = useState<boolean>(false);
	const [msgSallaryError, setMsgSallaryError] = useState<string>("");
	const [levelError, setLevelError] = useState<boolean>(false);
	const [remoteError, setRemoteError] = useState<boolean>(false);
	const [habilitysError, setHabilitysError] = useState<boolean>(false);
	const [msgHabilitysError, setMsgHabilitysError] = useState<string>("");
	const [typeOfContract, setTypeOfContract] = useState("");
	const [responsibilitiesError, setResponsibilitiesError] =
		useState<boolean>(false);
	const [msgResponsibilitiesError, setMsgResponsibilitiesError] =
		useState<string>("");
	const [requirementsError, setRequirementsError] = useState<boolean>(false);
	const [msgRequirementsError, setMsgRequirementsError] = useState<string>("");
	const [typeOfContractError, setTypeOfContractError] =
		useState<boolean>(false);
	const [unknownError, setUnknownError] = useState<boolean>(false);

	//success
	const [success, setSuccess] = useState<boolean>(false);

	// Api URL
	const { URL } = useContext(ApiContext);

	// Spinner
	const [showSpinner, setShowSpinner] = useState<boolean>(false);

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

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			setOccupationError(false);
			setSallaryError(false);
			setLevelError(false);
			setRemoteError(false);
			setHabilitysError(false);
			setTypeOfContractError(false);
			setSuccess(false);

			if (!occupation) {
				setOccupationError(true);
				setMsgOccupationError("Campo Cargo precisa ser preenchido!");
				return;
			}
			if (!sallary) {
				setSallaryError(true);
				setMsgSallaryError("Campo Salário precisa ser preenchido!");
				return;
			}
			if (!level) {
				setLevelError(true);
				return;
			}

			if (!remote) {
				setRemoteError(true);
				return;
			}

			if (!typeOfContract) {
				setTypeOfContractError(true);
				return;
			}
			if (arrayHabilitys.length === 0) {
				setHabilitysError(true);
				setMsgHabilitysError("Campo Habilidades precisa ser preenchido");
				return;
			}

			if (!responsibilities) {
				setResponsibilitiesError(true);
				setMsgResponsibilitiesError(
					"Campo Responsabilidades precisa ser preenchido"
				);
				return;
			}
			if (!requirements) {
				setRequirementsError(true);
				setMsgRequirementsError("Campo Requerimentos precisa ser preenchido");
				return;
			}

			let remoteBool: boolean;

			if (remote === "Remota") {
				remoteBool = true;
			} else {
				remoteBool = false;
			}

			const value = {
				name: occupation,
				sallary,
				level,
				remote: remoteBool,
				habilitys: arrayHabilitys,
				type_of_contract: typeOfContract,
				responsibilities,
				requirements,
			};

			setShowSpinner(true);
			const response = await fetch(`${URL}/job`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(value),
				credentials: "include",
			});

			const data: IResponse = await response.json();
			if (data.message === "Vaga cadastrada com sucesso") {
				setSuccess(true);
				setShowSpinner(false);
			}
		} catch {
			setUnknownError(true);
			setShowSpinner(false);
		}
	};

	return (
		<section>
			<Flex
				width="100%"
				alignItems="center"
				justifyContent="center"
				minHeight="135vh"
				background="#f4f4f4"
				paddingTop="100px"
			>
				<Flex
					flexDirection="column"
					alignItems="center"
					maxWidth={isLargerThan800px ? "80%" : "100%"}
					boxShadow="lg"
					background="#fff"
					padding="2rem"
					borderRadius="18px"
					justifyContent="center"
					marginBottom="3rem"
				>
					<Heading as="h1">Cadastre sua vaga abaixo</Heading>
					<FormControl>
						<form onSubmit={handleSubmit}>
							{isLargerThan800px ? (
								<Flex justifyContent="space-between">
									<Inputs
										value={occupation}
										setValue={setOccupation}
										type="text"
										label="Qual o cargo?"
										error={occupationError && true}
										helperText={
											occupationError
												? msgOccupationError
												: "exemplo: Desenvolvedor Android"
										}
									/>
									<InputSallary
										label="Qual o salário?"
										value={sallary}
										setValue={setSallary}
										error={sallaryError && true}
										helperText={
											sallaryError ? msgSallaryError : "exemplo: R$ 1500,00"
										}
									/>
								</Flex>
							) : (
								<>
									<Inputs
										value={occupation}
										setValue={setOccupation}
										type="text"
										label="Qual o cargo?"
										error={occupationError && true}
										helperText={
											occupationError
												? msgOccupationError
												: "exemplo: Desenvolvedor Android"
										}
									/>
									<InputSallary
										label="Qual o salário?"
										value={sallary}
										setValue={setSallary}
										error={sallaryError && true}
										helperText={
											sallaryError ? msgSallaryError : "exemplo: R$ 1500,00"
										}
									/>
								</>
							)}

							<InputRadio
								value={level}
								setValue={setLevel}
								label="Qual o nível?"
								error={levelError && true}
							/>
							<InputRadio
								value={remote}
								setValue={setRemote}
								label="A vaga é remota?"
								firstOption="Remota"
								secondOption="Não Remota"
								error={remoteError && true}
							/>
							<InputRadio
								value={typeOfContract}
								setValue={setTypeOfContract}
								label="Qual o tipo de contrato?"
								firstOption="CLT"
								secondOption="Estágio"
								thirdOption="PJ"
								error={typeOfContractError && true}
							/>
							<Inputs
								label="Escreva As 7 Principais Habilidades necessárias (uma de cada vez)"
								helperText={
									habilitysError ? msgHabilitysError : "exemplo: Java"
								}
								type="text"
								value={habilitys}
								setValue={setHabilitys}
								disable={arrayHabilitys.length === 7 ? true : false}
								error={habilitysError && true}
							/>
							<Flex maxHeight="20%" flexWrap="wrap">
								{arrayHabilitys.map((hability, index) => (
									<Flex
										margin="1rem"
										borderRadius="6px"
										flexDirection="column"
										wrap="wrap"
										key={index}
									>
										<Flex
											width="100%"
											justifyContent="flex-end"
											alignItems="flex-end"
											flexWrap="wrap"
										>
											<Btn
												type="button"
												setOnClick={() => handleRemoveHability(index)}
												border={false}
											>
												<RiCloseLine fontSize="1.5rem" />
											</Btn>
										</Flex>
										<Text fontSize="1.5rem">{hability}</Text>
									</Flex>
								))}
							</Flex>
							<Btn
								type="button"
								setOnClick={() => handleHabilitys(habilitys)}
								justifyContent="start"
								alingItems="start"
								border={true}
								padding={true}
							>
								Salvar Habilidade
							</Btn>
							<TextArea
								label="Quais as responsabilidades da função?"
								description={responsibilities}
								setDescription={setResponsibilities}
								placeholder={
									requirementsError
										? msgResponsibilitiesError
										: "Exemplo: Você vai atuar como desenvolvedor Android, também sera responsável pela criação de testes unitários... "
								}
								error={responsibilitiesError && true}
							/>
							<TextArea
								label="Quais os requisitos da vaga?"
								description={requirements}
								setDescription={setRequirements}
								placeholder={
									requirementsError
										? msgRequirementsError
										: "Exemplo: Kotlin, Git, TDD, Clean Architecture, SOLID"
								}
								error={requirementsError && true}
							/>
							<Btn type="submit" border={true}>
								{showSpinner ? <Spinner /> : "Enviar"}
							</Btn>
						</form>
					</FormControl>
					{success ? (
						<Alert status="success" fontSize="1.5rem" margin="1rem">
							<AlertIcon boxSize="2rem" />
							Vaga Registrada criada com sucesso!
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
				</Flex>
			</Flex>
		</section>
	);
};

export default CreateJob;
