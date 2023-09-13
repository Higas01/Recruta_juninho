import { Dispatch, SetStateAction } from "react";
import {
	Text,
	Textarea,
	Box,
	FormLabel,
	Flex,
	useMediaQuery,
} from "@chakra-ui/react";

interface Props {
	label: string;
	description: string;
	setDescription: Dispatch<SetStateAction<string>>;
	maxWidth?: boolean;
	placeholder?: string;
	error?: boolean;
}

const TextArea = (Props: Props) => {
	const [isLargerThan800px] = useMediaQuery("(min-width: 800px)");

	return (
		<Box margin="2rem" minWidth="89.2%">
			<FormLabel fontSize={isLargerThan800px ? "2rem" : "1.5rem"}>
				{Props.label}
			</FormLabel>
			<Textarea
				value={Props.description}
				onChange={(e) => Props.setDescription(e.target.value)}
				placeholder={
					Props.placeholder
						? Props.placeholder
						: "Faça uma breve descrição sobre você"
				}
				fontSize="1.5rem"
				size="sm"
				variant="filled"
				maxLength={1000}
				minHeight="15rem"
				resize="none"
				isInvalid={Props.error ? true : undefined}
			/>
			<Flex justifyContent="end" alignItems="end">
				<Text fontSize="1.5rem">
					Contador de caracteres: {Number(Props.description.length)}/1000
				</Text>
			</Flex>
		</Box>
	);
};

export default TextArea;
