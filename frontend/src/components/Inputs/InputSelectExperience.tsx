import {
	Box,
	Select,
	useMediaQuery,
	FormLabel,
	FormHelperText,
	Flex,
} from "@chakra-ui/react";
import { State } from "../../interface/IState";
import { Dispatch, SetStateAction } from "react";
import { City } from "../../interface/ICity";

interface Props {
	setValue: Dispatch<SetStateAction<string>>;
	helperText: string;
	width?: boolean;
}

const InputSelectExperience = (Props: Props) => {
	const [isLargerThan800px] = useMediaQuery("(min-width: 800px)");

	return (
		<Box margin="2rem" width={Props.width ? "89.2%" : undefined}>
			<FormLabel fontSize={isLargerThan800px ? "2rem" : "1.5rem"}>
				Perfil da Experiência
			</FormLabel>
			<Select
				fontSize="1.5rem"
				onChange={(event) => Props.setValue(event.target.value)}
				border="1px solid #000"
			>
				<option value="Freelancer">Freelancer</option>
				<option value="Empresa">Empresa</option>
				<option value="Projeto Pessoal">Projeto Pessoal</option>
			</Select>
			<Flex alignItems="start" width="100%" justifyContent="start">
				<FormHelperText fontSize={isLargerThan800px ? "1.2rem" : "1rem"}>
					{Props.helperText}
				</FormHelperText>
			</Flex>
		</Box>
	);
};

export default InputSelectExperience;
