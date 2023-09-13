import {
	Flex,
	Image,
	Box,
	Text,
	Heading,
	useMediaQuery,
} from "@chakra-ui/react";
import image_candidate from "../assets/company/show_candidates/image_candidate.png";
import Btn from "./Btn";
import { useState } from "react";

interface Props {
	name: string;
	level: string;
	tel: string;
	habilitys: string;
	age: number;
}

const CandidatesCard = (Props: Props) => {
	const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
	const [isLargerThan800px] = useMediaQuery("(min-width: 800px)");
	const [isLargerThan900px] = useMediaQuery("(min-width: 900px)");

	const handleShowDescription = () => {
		setIsDescriptionVisible(!isDescriptionVisible);
	};
	return (
		<Box
			padding="2rem"
			background="#fff"
			boxShadow="lg"
			margin="1rem"
			width="100%"
		>
			<Flex
				justifyContent="center"
				alignItems="center"
				wrap="wrap"
				width="100%"
				direction="column"
			>
				<Box>
					<Image src={image_candidate} objectFit="contain" boxSize="10rem" />
				</Box>
				<Flex wrap="wrap" justifyContent="center" alignItems="center">
					<Box margin="1rem">
						<Heading as="h2" fontSize="1.5rem">
							Nome do candidato
						</Heading>
						<Text fontSize="1.3rem">{Props.name}</Text>
					</Box>
					<Box margin="1rem">
						<Heading as="h2" fontSize="1.5rem">
							Level do candidato
						</Heading>
						<Text fontSize="1.5rem">{Props.level}</Text>
					</Box>

					<Flex
						wrap="wrap"
						width={isLargerThan900px ? undefined : "60%"}
						direction="column"
						margin="1rem"
					>
						<Heading as="h2" fontSize="1.5rem">
							Habilidades do candidato
						</Heading>
						<Text fontSize="1.3rem">{Props.habilitys}</Text>
					</Flex>
					<Box margin="1rem">
						<Heading as="h2" fontSize="1.5rem">
							telefone do candidato
						</Heading>
						<Text fontSize="1.3rem">{Props.tel}</Text>
					</Box>
					<Box margin="1rem">
						<Heading as="h2" fontSize="1.5rem">
							Idade do candidato
						</Heading>
						<Text fontSize="1.3rem">{Props.age}</Text>
					</Box>
					<Flex
						width="100%"
						justifyContent={isLargerThan900px ? "space-between" : "center"}
						wrap="wrap"
					>
						<Btn
							type="button"
							border={true}
							setOnClick={handleShowDescription}
							margin={true}
							noWidth={true}
						>
							{isDescriptionVisible
								? "Ocultar Descrição do candidato"
								: "Exibir Descrição do candidato"}
						</Btn>
						<Btn type="button" border={true} margin={true} noWidth={true}>
							Exibir Experiências
						</Btn>
					</Flex>
				</Flex>
			</Flex>
			{isDescriptionVisible && (
				<Box fontSize="1.5rem" margin="2rem">
					<Heading as="h2" margin="1rem">
						Um pouco mais sobre o candidato
					</Heading>
					<Text fontSize="1.3rem">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptatibus explicabo facilis excepturi neque quos. Dolores
						eligendi amet aliquid, aliquam earum illum nostrum assumenda sit eos
						iusto accusamus cumque ipsum necessitatibus. Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Voluptatibus explicabo facilis
						excepturi neque quos. Dolores eligendi amet aliquid, aliquam earum
						illum nostrum assumenda sit eos iusto accusamus cumque ipsum
						necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Voluptatibus explicabo facilis excepturi neque quos. Dolores
						eligendi amet aliquid, aliquam earum illum nostrum assumenda sit eos
						iusto accusamus cumque ipsum necessitatibus.
					</Text>
				</Box>
			)}
		</Box>
	);
};

export default CandidatesCard;
