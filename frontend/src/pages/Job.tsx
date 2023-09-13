import {
	Flex,
	Heading,
	Text,
	FormControl,
	useMediaQuery,
	Box,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	Button,
	ModalCloseButton,
	useDisclosure,
} from "@chakra-ui/react";
import JobComponent from "../components/Job/JobComponent";
import Inputs from "../components/Inputs/Inputs";
import { useState, useEffect, useContext, FormEvent } from "react";
import InputRadio from "../components/Inputs/InputRadio";
import Btn from "../components/Btn";
import { City } from "../interface/ICity";
import { State } from "../interface/IState";
import getStates from "../hooks/GetStates";
import getCitys from "../hooks/GetCitys";
import InputSelect from "../components/Inputs/InputSelect";
import { ApiContext } from "../context/api";
import { useNavigate } from "react-router-dom";
import { UserAuthContext } from "../context/UserAuth";

const Job = () => {
	const [habilitysSearch, setHabilitysSearch] = useState<string>("");
	const [levelSearch, setLevelSearch] = useState<string>("");
	const [arrayStates, setArrayStates] = useState<State[]>([]);
	const [arrayCity, setArrayCitys] = useState<City[]>([]);
	const [state, setState] = useState<string>("");
	const [city, setCity] = useState<string>("");
	const [isLargerThan980px] = useMediaQuery("(min-width: 980px)");
	const [isLargerThan835px] = useMediaQuery("(min-width: 835px)");
	const [filter, setFilter] = useState(false);
	const { URL } = useContext(ApiContext);
	const [data, setData] = useState<IJobs[]>([]);

	const { isOpen, onOpen, onClose } = useDisclosure();

	const navigate = useNavigate();
	const { userAuthenticated } = useContext(UserAuthContext);

	useEffect(() => {
		if (arrayStates.length === 0) {
			getStates(setArrayStates);
		}
	}, []);

	useEffect(() => {
		getCitys(setArrayCitys, state);
	}, [state]);

	useEffect(() => {
		const getJobs = async () => {
			const response = await fetch(`${URL}/job`);
			const result = await response.json();
			console.log(result);
			setData(result);
		};

		getJobs();
	}, []);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (habilitysSearch && !city && !levelSearch && !state) {
			const response = await fetch(`${URL}/job?search=-${habilitysSearch}`);
			const result = await response.json();
			setData(result);
		}

		if (habilitysSearch && levelSearch && !city && !state) {
			const response = await fetch(
				`${URL}/job?search=-${habilitysSearch}&level=${levelSearch}`
			);

			const result = await response.json();
			setData(result);
		}

		if (habilitysSearch && levelSearch && city && state) {
			const response = await fetch(
				`${URL}/job?search=-${habilitysSearch}&level=${levelSearch}&city=${city}&state=${state}`
			);
			const result = await response.json();
			setData(result);
		}
		if (habilitysSearch && !levelSearch && city && state) {
			const response = await fetch(
				`${URL}/job?search=-${habilitysSearch}&city=${city}&state=${state}`
			);
			const result = await response.json();
			setData(result);
		}
		if (!habilitysSearch && levelSearch && city && state) {
			const response = await fetch(
				`${URL}/job?city=${city}&state=${state}&level=${levelSearch}`
			);
			const result = await response.json();
			setData(result);
		}
		if (!habilitysSearch && !levelSearch && city && state) {
			const response = await fetch(`${URL}/job?city=${city}&state=${state}`);
			const result = await response.json();
			setData(result);
		}
		if (!habilitysSearch && levelSearch && !city && !state) {
			const response = await fetch(`${URL}/job?level=${levelSearch}`);
			const result = await response.json();
			setData(result);
		}
	};

	const showUniqueJob = (id: number) => {
		if (!userAuthenticated) {
			onOpen();
			return;
		}
		navigate(`/jobs/${id}`);
	};

	return (
		<section>
			<Modal isOpen={isOpen} onClose={onClose} size="6xl">
				<ModalOverlay />
				<ModalContent>
					<ModalHeader fontSize="3rem">cadastre-se</ModalHeader>
					<ModalCloseButton />
					<ModalBody fontSize="2rem">
						Você precisa se autenticar para verificar a vaga!
					</ModalBody>
					<ModalFooter></ModalFooter>
				</ModalContent>
			</Modal>
			<Flex minHeight="100vh" backgroundColor="#f4f4f4" direction="column">
				<Flex
					marginTop="2rem"
					minHeight="35vh"
					justifyContent="center"
					alignItems="center"
					flexDirection="column"
					width="100%"
					background="#000"
					textAlign="center"
				>
					<Heading
						as="h1"
						fontSize={isLargerThan835px ? "3rem" : "2rem"}
						color="#fff"
					>
						Vagas Para {habilitysSearch ? habilitysSearch : "Desenvolvedores"}
					</Heading>
					<Text
						fontSize={isLargerThan835px ? "1.5rem" : "1.3rem"}
						marginTop="2rem"
						color="#fff"
					>
						Deseja conseguir sua primeira vaga no mercado de TI? de uma olhada
						nas vagas abaixo e encontre a que mais te faz sentido!
					</Text>
				</Flex>
				<Flex justifyContent="space-around">
					<Flex
						direction="column"
						wrap="wrap"
						margin={isLargerThan835px ? "2rem" : undefined}
						minWidth="65%"
					>
						{!isLargerThan980px && (
							<Box margin="2rem">
								<Btn
									type="button"
									border={true}
									setOnClick={
										filter ? () => setFilter(false) : () => setFilter(true)
									}
								>
									Filtrar
								</Btn>
								{filter && (
									<>
										<FormControl>
											<form onSubmit={handleSubmit}>
												<InputRadio
													label="Nível de Experiência"
													value={levelSearch}
													setValue={setLevelSearch}
												/>
												<Inputs
													label="Habilidade"
													value={habilitysSearch}
													setValue={setHabilitysSearch}
													helperText="exemplo: JavaScript"
													type="text"
													maxLenght={25}
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
												/>
												<Btn type="submit" border={true}>
													Enviar
												</Btn>
											</form>
										</FormControl>
									</>
								)}
							</Box>
						)}
						{data &&
							data.length > 0 &&
							data.map((value) => (
								<JobComponent
									key={value.id}
									name={value.name}
									habilitys={value.habilitys}
									remote={value.remote}
									sallary={value.sallary}
									responsibilities={value.responsibilities}
									type_of_contract={value.type_of_contract}
									level={value.level}
									btnText="Ver Vaga"
									funcBtn={() => showUniqueJob(value.id)}
								/>
							))}
					</Flex>
					{isLargerThan980px && (
						<Flex
							minWidth="30%"
							backgroundColor="#fff"
							direction="column"
							height="20%"
							padding="3rem"
							boxShadow="lg"
							margin="3rem"
						>
							<Heading as="h2" fontSize="2.5rem">
								Filtro de Busca
							</Heading>
							<FormControl>
								<form onSubmit={handleSubmit}>
									<InputRadio
										label="Nível de Experiência"
										value={levelSearch}
										setValue={setLevelSearch}
									/>
									<Inputs
										label="Habilidade"
										value={habilitysSearch}
										setValue={setHabilitysSearch}
										helperText="exemplo: JavaScript"
										type="text"
										maxLenght={25}
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
									/>
									<Btn type="submit" border={true}>
										Enviar
									</Btn>
								</form>
							</FormControl>
						</Flex>
					)}
				</Flex>
			</Flex>
		</section>
	);
};

export default Job;
