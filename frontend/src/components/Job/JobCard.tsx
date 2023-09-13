import { Box, Flex, Image, Heading } from "@chakra-ui/react";
import Btn from "../Btn";
import Details from "../SingleJob/Details";

interface Props {
	title: string;
	image: string;
	btnText: string;
	setOnClick: Function;
}

const JobCard = (Props: Props) => {
	return (
		<Box
			minWidth="50%"
			textAlign="center"
			padding="2rem"
			boxShadow="lg"
			minHeight="20vh"
		>
			<Heading as="h2" fontSize="3rem">
				{Props.title}
			</Heading>
			<Flex alignItems="center" justifyContent="space-around">
				<Box>
					<Image
						src={Props.image}
						boxSize="20rem"
						objectFit="contain"
						objectPosition="center"
					/>
				</Box>
				<Flex>
					<Details
						remote={true}
						level="Júnior"
						type_of_contract="CLT"
						sallary={3500}
					/>
				</Flex>
			</Flex>
			<Btn
				type="submit"
				border={true}
				justifyContent="end"
				alingItems="end"
				setOnClick={Props.setOnClick}
			>
				{Props.btnText}
			</Btn>
		</Box>
	);
};

export default JobCard;
