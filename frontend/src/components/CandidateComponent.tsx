import { Flex, Heading, Text, Box, useMediaQuery } from "@chakra-ui/react";
import { AiFillExperiment } from "react-icons/ai";
import { MdBusinessCenter } from "react-icons/md";
import Btn from "./Btn";

interface Props {
	title: string;
	habilitys: string[];
	description: string;
	perfil: string;
	name_project: string;
	deleteBtn?: boolean;
	deleteBtnFunction?: Function;
}

const CandidateComponent = (Props: Props) => {
	const [isLargerThan835px] = useMediaQuery("(min-width: 835px)");

	return (
		<Flex
			margin={isLargerThan835px ? "2rem" : "1rem"}
			boxShadow="lg"
			flexWrap="wrap"
			direction="column"
			padding="3rem"
			backgroundColor="#ffff"
			width={isLargerThan835px ? "100%" : undefined}
		>
			<Heading as="h2" fontSize="2rem">
				<span
					style={{
						margin: "0.5rem",
					}}
				>
					Cargo:
				</span>
				{Props.title}
			</Heading>
			<Flex direction="column">
				<Flex margin="1rem" wrap="wrap">
					{Props.habilitys.map((hability, index) => (
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
							{hability}
						</Text>
					))}
				</Flex>
				<Flex wrap="wrap">
					<Flex
						margin={isLargerThan835px ? "1rem" : "0.4rem"}
						alignItems="center"
					>
						<AiFillExperiment fontSize="1.5rem" />
						<Text fontSize="1.5rem" margin="0.5rem">
							<span
								style={{
									fontWeight: "bold",
									margin: "0.5rem",
								}}
							>
								Perfil da Experiência:
							</span>
							{Props.perfil}
						</Text>
					</Flex>
					<Flex
						margin={isLargerThan835px ? "1rem" : "0.4rem"}
						alignItems="center"
					>
						<MdBusinessCenter fontSize="1.5rem" />
						<Text fontSize="1.5rem" margin="0.5rem">
							<span
								style={{
									fontWeight: "bold",
									margin: "0.5rem",
								}}
							>
								Nome do projeto ou Empresa:
							</span>
							{Props.name_project}
						</Text>
					</Flex>
				</Flex>
				<Flex margin="1rem">
					<Text fontSize="1.5rem">
						<span
							style={{
								fontWeight: "bold",
							}}
						>
							Relato da experiência:
						</span>
						<br />
						{Props.description.length > 3000
							? `${Props.description.slice(0, 3000)}...`
							: Props.description}
					</Text>
				</Flex>
				{Props.deleteBtn && (
					<Box margin="2rem">
						<Btn
							border={true}
							type="button"
							justifyContent="start"
							alingItems="start"
							setOnClick={Props.deleteBtnFunction}
						>
							Deletar Experiência
						</Btn>
					</Box>
				)}
			</Flex>
		</Flex>
	);
};

export default CandidateComponent;
