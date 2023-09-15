import { Flex, Heading, useMediaQuery, Text } from "@chakra-ui/react";
import CandidateComponent from "../../components/CandidateComponent";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiContext } from "../../context/api";
import { IExperience } from "../../interface/IExperiences";

const SingleCandidate = () => {
	const [isLargerThan1000px] = useMediaQuery("(min-width: 1000px)");

	const { userId } = useParams();

	const [data, setData] = useState<IExperience[]>([]);

	const { URL } = useContext(ApiContext);

	useEffect(() => {
		const getExperience = async () => {
			const response = await fetch(`${URL}/experience/${userId}`);
			const result = await response.json();
			setData(result);
		};

		getExperience();
	}, []);

	return (
		<section>
			<Flex
				minHeight="85vh"
				paddingTop="100px"
				direction="column"
				alignItems="center"
				background="#f4f4f4"
			>
				<Heading as="h1" fontSize={isLargerThan1000px ? "3rem" : "2rem"}>
					Experiência do candidato:
				</Heading>
				<Text fontSize={isLargerThan1000px ? "2.7rem" : "1.7rem"}>
					{data.length > 0 && data.map((value) => value.user.name)}
				</Text>
				<Flex
					justifyContent="center"
					alignItems="center"
					direction="column"
					width="100%"
				>
					{data.length > 0 &&
						data.map((value) => (
							<CandidateComponent
								title={value.function}
								name_project={value.project_name}
								habilitys={value.habilitys}
								description={value.description}
								perfil={value.experience_profile}
							/>
						))}
				</Flex>
			</Flex>
		</section>
	);
};

export default SingleCandidate;
