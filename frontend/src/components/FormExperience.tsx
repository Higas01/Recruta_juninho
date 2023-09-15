import { Dispatch, SetStateAction } from "react";
import {
	Flex,
	FormControl,
	Text,
	Heading,
	Box,
	useMediaQuery,
	Alert,
	AlertIcon,
	AlertDescription,
} from "@chakra-ui/react";
import Inputs from "./Inputs/Inputs";
import Btn from "./Btn";
import InputSelectExperience from "./Inputs/InputSelectExperience";
import TextArea from "./Inputs/TextArea";
import { RiCloseLine } from "react-icons/ri";

interface Props {
	value: string;
	occupation: string;
	setOccupation: Dispatch<SetStateAction<string>>;
	setValue: Dispatch<SetStateAction<string>>;
	setSelect: Dispatch<SetStateAction<string>>;
	habilitys: string;
	setHabilitys: Dispatch<SetStateAction<string>>;
	arrayHabilitys: string[];
	setArrayHabilitys: Dispatch<SetStateAction<string[]>>;
	description: string;
	setDescription: Dispatch<SetStateAction<string>>;
	error: boolean;
	success: boolean;
}

const FormExperience = (Props: Props) => {
	const [isLargerThan800px] = useMediaQuery("(min-width: 800px)");

	const handleRemoveHabilitys = (indexToRemove: number): void => {
		const newArray = Props.arrayHabilitys.filter(
			(_, index) => index !== indexToRemove
		);
		Props.setArrayHabilitys(newArray);
	};

	const handleHabilitys = (hability: string) => {
		if (!hability) {
			return;
		}
		Props.setArrayHabilitys(Props.arrayHabilitys.concat(hability));
		Props.setHabilitys("");
	};

	return (
		<>
			<Box width="100%" height="8vh"></Box>
			<Box
				textAlign="center"
				boxShadow="lg"
				padding="6rem 1rem 3rem 1rem"
				background="#fff"
				minWidth="75%"
			>
				<Heading fontSize={isLargerThan800px ? "3rem" : "2rem"}>
					Adicionar Experiência
				</Heading>
				<Flex>
					<FormControl>
						<Inputs
							type="text"
							value={Props.value}
							setValue={Props.setValue}
							helperText="exemplo: Empresa X"
							label="Nome da Empresa"
							width={true}
						/>
						<Inputs
							type="text"
							value={Props.occupation}
							setValue={Props.setOccupation}
							helperText="exemplo: Desenvolvedor Full-Stack"
							label="Cargo de ocupação"
							width={true}
						/>

						<InputSelectExperience
							setValue={Props.setSelect}
							helperText="Exemplo: Freelancer"
							width={true}
						/>
						<Inputs
							label="Escreva Suas 7 Principais Habilidades Utilizadas (uma de cada vez)"
							helperText={"exemplo: Java"}
							type="text"
							value={Props.habilitys}
							setValue={Props.setHabilitys}
							disable={Props.arrayHabilitys.length === 7 ? true : false}
							width={true}
						/>
						<Flex height="20%" flexWrap="wrap">
							{Props.arrayHabilitys.map((hability, index) => (
								<Flex
									key={index}
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
											setOnClick={() => handleRemoveHabilitys(index)}
											border={false}
										>
											<RiCloseLine fontSize="1.5rem" />
										</Btn>
									</Flex>
									<Text fontSize="1.5rem">{hability}</Text>
								</Flex>
							))}
							<Btn
								type="button"
								setOnClick={() => handleHabilitys(Props.habilitys)}
								justifyContent="start"
								alingItems="start"
								border={true}
							>
								Salvar Habilidade
							</Btn>
							<Flex width="100%" alignItems="center">
								<TextArea
									label="Conte um pouco mais sobre essa experiência"
									description={Props.description}
									setDescription={Props.setDescription}
									maxWidth={true}
								/>
							</Flex>
						</Flex>
					</FormControl>
				</Flex>
				{Props.success ? (
					<Alert status="success" fontSize="1.5rem" margin="1rem">
						<AlertIcon boxSize="2rem" />
						Experiência cadastrada com sucesso!
					</Alert>
				) : Props.error ? (
					<Alert status="error" fontSize="1.5rem" margin="1rem">
						<AlertIcon boxSize="2rem" />
						<AlertDescription>
							Todos os inputs precisam ser preenchidos!
						</AlertDescription>
					</Alert>
				) : (
					<></>
				)}
			</Box>
		</>
	);
};

export default FormExperience;
