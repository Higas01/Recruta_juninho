import {
	Box,
	FormLabel,
	Input,
	FormHelperText,
	InputLeftElement,
	InputGroup,
	useMediaQuery,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { IMaskInput } from "react-imask";
import { BsFillTelephoneFill } from "react-icons/bs";

interface Props {
	label: string;
	helperText?: string;
	value?: string | string[];
	setValue: Dispatch<SetStateAction<string>>;
	disable?: boolean;
	error?: boolean;
}

const InputTel = (Props: Props) => {
	const [isLargerThan800px] = useMediaQuery("(min-width: 800px)");

	return (
		<Box margin="2rem">
			<FormLabel fontSize={isLargerThan800px ? "2rem" : "1.5rem"}>
				{Props.label}
			</FormLabel>
			<InputGroup>
				<InputLeftElement marginTop="0.2rem" fontSize="1.5rem">
					<BsFillTelephoneFill />
				</InputLeftElement>
				<Input
					border="0.1rem solid #000"
					as={IMaskInput}
					mask="(00) 00000-0000"
					size="lg"
					type="tel"
					value={Props.value}
					fontSize="1.5rem"
					onChange={(e) => Props.setValue(e.target.value)}
					disabled={Props.disable && Props.disable}
					isInvalid={Props.error ? true : undefined}
				/>
			</InputGroup>
			<FormHelperText
				fontSize="1.2rem"
				color={Props.error ? "#FF0000" : undefined}
			>
				{Props.helperText}
			</FormHelperText>
		</Box>
	);
};

export default InputTel;
