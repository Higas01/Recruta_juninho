import React from "react";
import { FaLocationDot, FaFileContract } from "react-icons/fa6";
import { BsCash } from "react-icons/bs";
import { SiLevelsdotfyi } from "react-icons/si";
import { FaLocationArrow } from "react-icons/fa";

import { Flex, Text } from "@chakra-ui/react";

interface Props {
	remote: boolean;
	sallary: number;
	type_of_contract: string;
	level: string;
}

const Details = (Props: Props) => {
	return (
		<Flex direction="column">
			<Flex wrap="wrap">
				<Flex alignItems="center" margin="1rem">
					<SiLevelsdotfyi fontSize="1.5rem" />
					<Text fontSize="1.5rem" margin="1rem">
						{Props.level}
					</Text>
				</Flex>
				<Flex alignItems="center" margin="1rem">
					<BsCash fontSize="1.5rem" />
					<Text fontSize="1.5rem" margin="1rem">
						R${Props.sallary}
					</Text>
				</Flex>
				<Flex alignItems="center" margin="1rem">
					<FaFileContract fontSize="1.5rem" />
					<Text fontSize="1.5rem" margin="1rem">
						{Props.type_of_contract}
					</Text>
				</Flex>
			</Flex>
			<Flex wrap="wrap">
				<Flex alignItems="center" margin="1rem">
					<FaLocationDot fontSize="1.5rem" />
					<Text fontSize="1.5rem" margin="1rem">
						{Props.remote ? "Remoto" : "Não remoto  "}
					</Text>
				</Flex>
				<Flex alignItems="center" margin="1rem">
					<FaLocationArrow fontSize="1.5rem" />
					<Text fontSize="1.5rem" margin="1rem">
						Maceió, Alagoas
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Details;
