import {
	Box,
	FormLabel,
	Input,
	FormHelperText,
	InputGroup,
	InputLeftElement,
	useMediaQuery,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";

interface Props {
	label: string;
	helperText?: string;
	type: string;
	value: string | string[] | number | undefined;
	setValue: Dispatch<SetStateAction<any>>;
	disable?: boolean;
	maxLenght?: number;
	width?: boolean;
	error?: boolean;
}

const Inputs = (Props: Props) => {
	const [isLargerThan800px] = useMediaQuery("(min-width: 800px)");

	return (
		<Box margin="2rem" width={Props.width ? "89.2%" : undefined}>
			<FormLabel fontSize={isLargerThan800px ? "2rem" : "1.5rem"}>
				{Props.label}
			</FormLabel>
			<InputGroup>
				<InputLeftElement marginTop="0.2rem" fontSize="1.7rem">
					{Props.type === "email" && <MdEmail />}
					{Props.type === "password" && <RiLockPasswordFill />}
					{(Props.type === "text" || Props.type === "number") && (
						<AiFillFileText />
					)}
				</InputLeftElement>
				<Input
					border="0.1rem solid #000"
					size="lg"
					type={Props.type}
					value={Props.value}
					fontSize="1.5rem"
					onChange={(e) => Props.setValue(e.target.value)}
					disabled={Props.disable && Props.disable}
					maxLength={Props.maxLenght && Props.maxLenght}
					isInvalid={Props.error ? true : undefined}
				/>
			</InputGroup>
			<FormHelperText
				fontSize={isLargerThan800px ? "1.2rem" : "1rem"}
				color={Props.error ? "#FF0000" : undefined}
				alignItems="start"
				display="flex"
				width="100%"
			>
				{Props.helperText}
			</FormHelperText>
		</Box>
	);
};

export default Inputs;
