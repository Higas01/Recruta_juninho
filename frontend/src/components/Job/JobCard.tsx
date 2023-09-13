import { Box, Flex, Image, Heading } from "@chakra-ui/react";
import Btn from "../Btn";
import Details from "../SingleJob/Details";
import { ISingleJob } from "../../interface/ISingleJob";

interface Props {
	title: string[];
	image: string;
	btnText: string;
	setOnClick: Function;
	data: ISingleJob[];
	disabled: boolean;
}

const JobCard = (Props: Props) => {
	return (
		<Box textAlign="center" padding="2rem" minHeight="20vh">
			<Heading as="h2" fontSize="3rem">
				{Props.title}
			</Heading>
			<Flex alignItems="center" justifyContent="space-around">
				<Box margin="0.5rem">
					<Image
						src={Props.image}
						boxSize="20rem"
						objectFit="contain"
						objectPosition="center"
					/>
				</Box>
				<Flex margin="0.5rem">
					<Details
						remote={Props.data.map((value) => value.remote)}
						level={Props.data.map((value) => value.level)}
						type_of_contract={Props.data.map((value) => value.type_of_contract)}
						sallary={Props.data.map((value) => value.sallary)}
						state={Props.data.map((value) => value.company.state)}
						city={Props.data.map((value) => value.company.city)}
					/>
				</Flex>
			</Flex>
			<Btn
				type="submit"
				border={true}
				justifyContent="end"
				alingItems="end"
				setOnClick={Props.setOnClick}
				disabled={Props.disabled && true}
			>
				{Props.btnText}
			</Btn>
		</Box>
	);
};

export default JobCard;
