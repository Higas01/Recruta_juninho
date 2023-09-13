import { Text } from "@chakra-ui/react";

interface Props {
	text: string;
}

const Paragraph = (Props: Props) => {
	return (
		<Text
			fontSize="1.5rem"
			margin="2rem 1rem 0rem 1rem"
			color="#fff"
			border="1px solid #fff"
			borderRadius="12px"
			padding="1rem"
			_hover={{
				background: "#fff",
				color: "#000",
				transition: "1s",
				cursor: "pointer",
			}}
		>
			{Props.text}
		</Text>
	);
};

export default Paragraph;
