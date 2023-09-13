import { Text } from "@chakra-ui/react";

interface Props {
	habilitys: string[];
}

const Paragraph = (Props: Props) => {
	return (
		<>
			{Props.habilitys.map((hability, index) => (
				<Text
					key={index}
					fontSize="1.5rem"
					margin="0.5rem"
					border="0.1rem solid #fff"
					borderRadius="6px"
					color="#fff"
					padding="0.5rem"
					_hover={{
						backgroundColor: "#000",
						color: "#ccc",
						transition: "1s",
					}}
				>
					{hability.toUpperCase()}
				</Text>
			))}
		</>
	);
};

export default Paragraph;
