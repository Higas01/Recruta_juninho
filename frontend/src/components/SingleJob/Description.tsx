import { Heading, Box, Text } from "@chakra-ui/react";

interface Props {
	title: string;
	description: string[];
}

const Description = (Props: Props) => {
	return (
		<Box padding="3rem">
			<Heading as="h3" marginBottom="2rem">
				{Props.title}
			</Heading>
			<Box>
				<Text fontSize="1.7rem" letterSpacing="0.1rem">
					{Props.description}
				</Text>
			</Box>
		</Box>
	);
};

export default Description;
