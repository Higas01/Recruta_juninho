import { Flex, Heading, Text, Box, useMediaQuery } from "@chakra-ui/react";
import { FaLocationDot, FaFileContract } from "react-icons/fa6";
import { SiLevelsdotfyi } from "react-icons/si";

import { BsCash } from "react-icons/bs";

import Btn from "../Btn";

interface Props {
	name: string;
	habilitys: string[];
	description: string;
	remote: boolean;
	sallary: string;
	type_of_contract: string;
	level: string;
	btnText: string;
	deleteBtn?: boolean;
	funcDeleteBtn?: Function;
}

const JobComponent = (Props: Props) => {
	const [isLargerThan835px] = useMediaQuery("(min-width: 835px)");

	return (
		<Flex
			margin={isLargerThan835px ? "2rem" : "1rem"}
			boxShadow="lg"
			flexWrap="wrap"
			direction="column"
			padding="3rem"
			backgroundColor="#ffff"
			width="100%"
		>
			<Heading as="h2" fontSize="2rem">
				{Props.name}
			</Heading>
			<Flex direction="column">
				<Flex margin="1rem" wrap="wrap">
					{Props.habilitys.slice(0, 5).map((hability, index) => (
						<Text
							key={index}
							fontSize="1.5rem"
							margin="0.5rem"
							border="0.1rem solid #000"
							borderRadius="6px"
							color="#000"
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
				</Flex>
				<Flex wrap="wrap">
					<Flex
						margin={isLargerThan835px ? "1rem" : "0.4rem"}
						alignItems="center"
					>
						<FaLocationDot fontSize="1.5rem" />
						<Text fontSize="1.5rem" margin="0.5rem">
							{Props.remote ? "Remoto" : "Não Remoto"}
						</Text>
					</Flex>
					<Flex
						margin={isLargerThan835px ? "1rem" : "0.4rem"}
						alignItems="center"
					>
						<BsCash fontSize="1.5rem" />
						<Text fontSize="1.5rem" margin="0.5rem">
							R${Props.sallary}
						</Text>
					</Flex>
					<Flex
						margin={isLargerThan835px ? "1rem" : "0.4rem"}
						alignItems="center"
					>
						<FaFileContract fontSize="1.5rem" />
						<Text fontSize="1.5rem" margin="0.5rem">
							{Props.type_of_contract}
						</Text>
					</Flex>
					<Flex
						margin={isLargerThan835px ? "1rem" : "0.4rem"}
						alignItems="center"
					>
						<SiLevelsdotfyi fontSize="1.5rem" />
						<Text fontSize="1.5rem" margin="0.5rem">
							{Props.level}
						</Text>
					</Flex>
				</Flex>
				<Flex margin="1rem">
					<Text fontSize="1.5rem">
						{Props.description.length > 600
							? `${Props.description.slice(0, 600)}...`
							: Props.description}
					</Text>
				</Flex>

				{Props.deleteBtn ? (
					<Flex width="100%" justifyContent="space-between" alignItems="center">
						<Box marginTop="2rem">
							<Btn
								type="button"
								border={true}
								alingItems="start"
								justifyContent="start"
								setOnClick={Props.funcDeleteBtn}
							>
								Excluir Vaga
							</Btn>
						</Box>
						<Box marginTop="2rem">
							<Btn
								type="button"
								border={true}
								alingItems="end"
								justifyContent="end"
							>
								{Props.btnText}
							</Btn>
						</Box>
					</Flex>
				) : (
					<Box margin="2rem">
						<Btn
							type="button"
							border={true}
							alingItems="end"
							justifyContent="end"
						>
							{Props.btnText}
						</Btn>
					</Box>
				)}
			</Flex>
		</Flex>
	);
};

export default JobComponent;
