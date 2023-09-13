import { Box, Select, useMediaQuery, FormLabel } from "@chakra-ui/react";
import { State } from "../../interface/IState";
import { Dispatch, SetStateAction } from "react";
import { City } from "../../interface/ICity";

interface Props {
	stateValue?: State[];
	cityValue?: City[];
	label: string;
	setValue: Dispatch<SetStateAction<string>>;
	disable?: boolean;
	error?: boolean;
}

const InputSelect = (Props: Props) => {
	const [isLargerThan800px] = useMediaQuery("(min-width: 800px)");

	return (
		<Box margin="2rem">
			<FormLabel fontSize={isLargerThan800px ? "2rem" : "1.5rem"}>
				{Props.label}
			</FormLabel>
			<Select
				fontSize="1.5rem"
				onChange={(event) => Props.setValue(event.target.value)}
				border="1px solid #000"
				disabled={Props.disable && Props.disable}
				isInvalid={Props.error ? true : undefined}
			>
				{Props.stateValue &&
					Props.stateValue.map((value: State) => (
						<option key={value.id} value={value.sigla}>
							{value.sigla}
						</option>
					))}
				{Props.cityValue &&
					Props.cityValue.map((value: City) => (
						<option key={value.id} value={value.nome}>
							{value.nome}
						</option>
					))}
			</Select>
		</Box>
	);
};

export default InputSelect;
