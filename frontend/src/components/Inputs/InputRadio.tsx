import {
	Radio,
	RadioGroup,
	Stack,
	FormLabel,
	Text,
	Box,
	useMediaQuery,
} from "@chakra-ui/react";
import { SetStateAction, Dispatch } from "react";

interface Props {
	value: string;
	firstOption?: string;
	secondOption?: string;
	thirdOption?: string;
	setValue: Dispatch<SetStateAction<string>>;
	label: string;
	schema?: "white";
	error?: boolean;
}

const InputRadio = (Props: Props) => {
	const [isLargerThan800px] = useMediaQuery("(min-width: 800px)");

	return (
		<Box margin="2rem">
			<FormLabel
				fontSize={isLargerThan800px ? "2rem" : "1.5rem"}
				color={Props.schema && "#fff"}
			>
				{Props.label}
			</FormLabel>
			<RadioGroup onChange={Props.setValue} value={Props.value}>
				<Stack direction="row" color={Props.schema && "#fff"}>
					<Radio
						value={Props.firstOption ? Props.firstOption : "Estágio"}
						size="lg"
						colorScheme="gray"
						isInvalid={Props.error ? true : undefined}
					>
						<Text fontSize="1.5rem">
							{Props.firstOption ? Props.firstOption : "Estágio"}
						</Text>
					</Radio>
					<Radio
						value={Props.secondOption ? Props.secondOption : "Júnior"}
						size="lg"
						colorScheme="gray"
						isInvalid={Props.error ? true : undefined}
					>
						<Text fontSize="1.5rem">
							{Props.secondOption ? Props.secondOption : "Júnior"}
						</Text>
					</Radio>
					{Props.thirdOption && (
						<Radio
							value={Props.thirdOption}
							size="lg"
							colorScheme="gray"
							isInvalid={Props.error ? true : undefined}
						>
							<Text fontSize="1.5rem">{Props.thirdOption}</Text>
						</Radio>
					)}
				</Stack>
			</RadioGroup>
		</Box>
	);
};

export default InputRadio;
