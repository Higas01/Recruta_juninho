import { Flex, Heading, Link, Text, useMediaQuery } from "@chakra-ui/react";
import { FaLocationDot, FaFileContract } from "react-icons/fa6";
import { BsCash } from "react-icons/bs";
import { SiLevelsdotfyi } from "react-icons/si";
import {} from "@chakra-ui/react";

interface Props {
	name: string;
	type_of_contract: string;
	habilitys: string[];
	level: string;
	sallary: number;
	remote: boolean;
}

const JobCardHome = (Props: Props) => {
	const [isLargerThan900px] = useMediaQuery("(min-width: 900px)");
	const [isLargerThan1280px] = useMediaQuery("(min-width: 1280px)");
	return (
		<Flex margin="1.5rem" flexDirection="column" boxShadow="lg" flexWrap="wrap">
			<Heading as="h3" textAlign="center">
				{Props.name}
			</Heading>
			<Flex
				textAlign="center"
				direction="column"
				alignItems="center"
				justifyContent="center"
				flexWrap="wrap"
				minWidth={
					isLargerThan900px ? (isLargerThan1280px ? "20vw" : "30vw") : "80vw"
				}
				padding="1rem"
			>
				<Flex>
					<Flex alignItems="center">
						<FaLocationDot fontSize="1.5rem" />
						<Text fontSize="1.5rem" margin="1rem">
							{Props.remote ? "Remoto" : "Não remoto"}
						</Text>
					</Flex>
					<Flex alignItems="center">
						<BsCash fontSize="1.5rem" />
						<Text fontSize="1.5rem" margin="1rem">
							R${Props.sallary}
						</Text>
					</Flex>
				</Flex>
				<Flex>
					<Flex alignItems="center">
						<FaFileContract fontSize="1.5rem" />
						<Text fontSize="1.5rem" margin="1rem">
							{Props.type_of_contract}
						</Text>
					</Flex>
					<Flex alignItems="center">
						<SiLevelsdotfyi fontSize="1.5rem" />
						<Text fontSize="1.5rem" margin="1rem">
							{Props.level}
						</Text>
					</Flex>
				</Flex>
				<Flex>
					<Flex width="100%" flexWrap="wrap">
						{Props.habilitys.slice(0, 3).map((hability, index) => {
							return (
								<Text
									fontSize="1.5rem"
									key={index}
									margin="0.5rem"
									border="0.1rem solid #000"
									borderRadius="6px"
									color="#000"
									padding="1rem"
									_hover={{
										backgroundColor: "#000",
										color: "#ccc",
										transition: "1s",
									}}
								>
									{hability}
								</Text>
							);
						})}
					</Flex>
				</Flex>
				<Link fontSize="2rem" margin="1rem" color="#000">
					Ver Vaga
				</Link>
			</Flex>
		</Flex>
	);
};

export default JobCardHome;
