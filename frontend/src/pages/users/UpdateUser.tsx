import {
	Flex,
	Heading,
	Box,
	FormControl,
	Image,
	Text,
	useMediaQuery,
} from "@chakra-ui/react";
import { RiCloseLine } from "react-icons/ri";
import image_register_user from "../../assets/users/register/image_register_user.png";
import { BsArrowReturnLeft } from "react-icons/bs";
import { useState, useEffect } from "react";
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

const UpdateUser = () => {
	const [habilitys, setHabilitys] = useState<string>("text");
	const [arrayHabilitys, setArrayHabilitys] = useState<string[]>([]);
	const [description, setDescription] = useState<string>("");
	const [level, setLevel] = useState<string>("");
	const [tel, setTel] = useState<string>("");
	const [page, setPage] = useState(1);
	const [arrayStates, setArrayStates] = useState<State[]>([]);
	const [arrayCity, setArrayCitys] = useState<City[]>([]);
	const [state, setState] = useState<string>("");
	const [city, setCity] = useState<string>("");

	const [isLargerThan1100px] = useMediaQuery("(min-width: 1100px)");
	const [isHeightThan775px] = useMediaQuery("(min-height: 775px)");
	const [isHeightThan500px] = useMediaQuery("(min-height: 500px)");

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
		console.log(city);
	};
	const handleRemoveHability = (indexToRemove: number) => {
		const newArray = arrayHabilitys.filter(
			(_, index) => index !== indexToRemove
		);
		setArrayHabilitys(newArray);
	};
	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log("enviando formulário");
	};

	const nextPage = () => {
		setPage((prevPage) => prevPage + 1);
	};

	const prevPage = () => {
		setPage((prevPage) => prevPage - 1);
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
						Atualize seus dados abaixo
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
								helperText="exemplo: Higor Matheus Rocha Porangaba"
								type="text"
								value={habilitys}
								setValue={setHabilitys}
							/>
							<Inputs
								label="Seu Email"
								helperText="exemplo: exemplo@gmail.com"
								type="email"
								value={habilitys}
								setValue={setHabilitys}
							/>
							<Inputs
								label="Sua Senha"
								type="password"
								value={habilitys}
								setValue={setHabilitys}
							/>
							<Inputs
								label="Repita Sua Senha"
								type="password"
								value={habilitys}
								setValue={setHabilitys}
							/>
							<Inputs
								label="Sua idade"
								type="number"
								value={habilitys}
								setValue={setHabilitys}
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
									helperText="exemplo: Java"
									type="text"
									value={habilitys}
									setValue={setHabilitys}
									disable={arrayHabilitys.length === 7 ? true : false}
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
									label="Sua Descrição"
									description={description}
									setDescription={setDescription}
								/>
							</Box>
							<InputRadio
								label="Qual tipo de vaga você busca?"
								value={level}
								setValue={setLevel}
							/>
							<InputTel
								label="Digite seu número"
								value={tel}
								setValue={setTel}
								helperText="exemplo: (00) 00000-0000"
							/>
							<Btn type="submit" border={true}>
								Enviar
							</Btn>
						</form>
					)}
					<Flex
						width="100%"
						justifyContent="center"
						alignItems="center"
						marginBottom="2rem"
					></Flex>
				</FormControl>
			</FormModel>
		</Flex>
	);
};

export default UpdateUser;
