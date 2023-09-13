import { Button, Flex } from "@chakra-ui/react";
import React from "react";

interface Props {
	children: React.ReactNode;
	type: "submit" | "button";
	setOnClick?: Function;
	alingItems?: "end" | "start";
	justifyContent?: "end" | "start";
	border: boolean;
	disabled?: boolean;
	background?: boolean;
	padding?: true;
	margin?: true;
	noWidth?: true;
}

const Btn = (Props: Props) => {
	const buttonStyle = {
		cursor: Props.disabled ? "not-allowed" : "pointer",
	};

	return (
		<Flex
			width={Props.noWidth ? undefined : "100%"}
			alignItems={Props.alingItems ? Props.alingItems : "center"}
			justifyContent={Props.justifyContent ? Props.justifyContent : "center"}
			backgroundColor={Props.background ? "#fff" : undefined}
			padding={Props.padding ? "1.2rem" : undefined}
			margin={Props.margin ? "1rem" : undefined}
		>
			<Button
				colorScheme="gray"
				variant="outline"
				border={Props.border ? "1px solid #000" : ""}
				padding="1.5rem"
				fontSize="1.7rem"
				_hover={{
					color: "#fff",
					backgroundColor: "#000",
					transition: "1s",
				}}
				type={Props.type}
				onClick={() => {
					if (!Props.disabled) {
						Props.setOnClick && Props.setOnClick();
					}
				}}
				disabled={Props.disabled}
				style={buttonStyle}
			>
				{Props.children}
			</Button>
		</Flex>
	);
};

export default Btn;
