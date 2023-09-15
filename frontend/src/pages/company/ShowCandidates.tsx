import { Flex, Heading, useMediaQuery, Text } from "@chakra-ui/react";
import CandidatesCard from "../../components/CandidatesCard";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { IUsers } from "../../interface/IUsers";
import { ApiContext } from "../../context/api";

const ShowCandidates = () => {
	const [isLargerThan950px] = useMediaQuery("(min-width: 950px)");

	const [notExistsCandidates, setNotExistsCandidates] =
		useState<boolean>(false);

	const { id } = useParams();

	const { URL } = useContext(ApiContext);

	const [data, setData] = useState<IUsers[]>([]);

	const navigate = useNavigate();

	useEffect(() => {
		const getCandidates = async () => {
			const response = await fetch(`${URL}/application?jobId=${id}`);
			const result = await response.json();
			setData(result);
			console.log(result);
			if (result.statusCode === 404) {
				setNotExistsCandidates(true);
			}
		};

		getCandidates();
	}, []);

	const handleShowExperience = (userId: number) => {
		navigate(`/company/jobs/${id}/candidates/${userId}`);
	};

	return (
		<section>
			<Flex
				minHeight="120vh"
				paddingTop="130px"
				backgroundColor="#f4f4f4"
				alignItems="center"
				justifyContent="center"
			>
				<Flex
					direction="column"
					alignItems="center"
					justifyContent="center"
					width="90%"
				>
					<Heading as="h1" fontSize={isLargerThan950px ? "3rem" : "2rem"}>
						{notExistsCandidates
							? "Nenhum candidato aplicou para sua vaga até o momento"
							: "Todos os candidatos da vaga estão listados abaixo"}
					</Heading>
					{data.length > 0 &&
						data.map((value) => (
							<CandidatesCard
								key={value.id}
								name={value.user.name}
								level={value.user.level}
								age={value.user.age}
								habilitys={value.user.habilitys}
								tel={value.user.tel}
								description={value.user.description}
								email={value.user.email}
								functionShowExperiences={() =>
									handleShowExperience(value.user.id)
								}
							/>
						))}
				</Flex>
			</Flex>
		</section>
	);
};

export default ShowCandidates;
