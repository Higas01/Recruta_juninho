import { Flex, useMediaQuery } from "@chakra-ui/react";
import React from "react";

interface Props {
	children: React.ReactNode;
}

const FormModel = (Props: Props) => {
	const [isLargerThan800px] = useMediaQuery("(min-width: 800px)");

	return (
		<Flex
			flexDirection="column"
			alignItems="center"
			minWidth={isLargerThan800px ? "35%" : "100%"}
			boxShadow="xl"
			background="#fff"
			padding="1.5rem"
			borderRadius="0.6rem"
			justifyContent="center"
		>
			{Props.children}
		</Flex>
	);
};

export default FormModel;
