import { Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import JobCardHome from "../Job/JobCardHome";
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../context/api";
import { UserAuthContext } from "../../context/UserAuth";
import { useNavigate } from "react-router-dom";

const ThirdSectionHome = () => {
	const [isLargerThan768px] = useMediaQuery("(min-width: 768px)");
	const [data, setData] = useState<IJobs[]>([]);
	const { URL } = useContext(ApiContext);
	const navigate = useNavigate();

	const { userAuthenticated } = useContext(UserAuthContext);

	useEffect(() => {
		const getJobs = async () => {
			const response = await fetch(`${URL}/job`);
			const result = await response.json();
			setData(result);
		};

		getJobs();
	}, []);

	const handleJob = (id: number) => {
		if (userAuthenticated) {
			navigate(`/jobs/${id}`);
		} else {
			navigate(`/jobs`);
		}
	};

	return (
		<Flex
			alignItems="center"
			flexDirection="column"
			minHeight="50vh"
			backgroundColor="#f4f4f4"
		>
			<Heading
				as="h2"
				fontSize={isLargerThan768px ? "3rem" : "2.5rem"}
				margin="3rem"
			>
				Algumas de nossas vagas
			</Heading>
			<Flex justifyContent="space-around" alignItems="center" flexWrap="wrap">
				{data.length > 0 &&
					data
						.slice(0, 4)
						.map((value) => (
							<JobCardHome
								name={value.name}
								habilitys={value.habilitys}
								type_of_contract={value.type_of_contract}
								sallary={value.sallary}
								remote={value.remote}
								level={value.level}
								handleJob={() => handleJob(value.id)}
							/>
						))}
			</Flex>
		</Flex>
	);
};

export default ThirdSectionHome;
