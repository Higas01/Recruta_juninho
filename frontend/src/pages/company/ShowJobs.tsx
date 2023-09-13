import { useContext, useEffect, useState } from "react";
import { Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import JobComponent from "../../components/Job/JobComponent";
import { ApiContext } from "../../context/api";
import { useNavigate } from "react-router-dom";

const ShowJobs = () => {
	const { URL } = useContext(ApiContext);
	const [callApi, setCallApi] = useState(false);
	const [isLargerThan900px] = useMediaQuery("(min-width: 900px)");
	const navigate = useNavigate();

	const [data, setData] = useState<IJobs[]>([]);

	const handleDeleteJob = async (id: number) => {
		await fetch(`${URL}/job/${id}`, { method: "DELETE" });
		setCallApi(true);
	};

	useEffect(() => {
		const showJobs = async () => {
			const response = await fetch(`${URL}/job/fk`, {
				credentials: "include",
			});
			const result = await response.json();
			setData(result);
		};

		showJobs();
	}, [callApi]);

	const handleShowCandidates = async (id: number) => {
		navigate(`/company/jobs/${id}/candidates`);
	};

	return (
		<section
			style={{
				background: "#f4f4f4",
			}}
		>
			<Flex
				minHeight="35vh"
				backgroundColor="#000"
				alignItems="center"
				justifyContent="center"
				padding="6rem 0 0 0"
				textAlign="center"
				direction="column"
			>
				<Heading
					as="h1"
					color="#fff"
					fontSize={isLargerThan900px ? "3rem" : "2rem"}
				>
					Gerencie suas vagas abaixo
				</Heading>
				<Text
					color="#fff"
					margin="1rem 0.5rem"
					fontSize={isLargerThan900px ? "1.5rem" : "1.4rem"}
				>
					Gerencie suas vagas, veja quem se candidatou para elas!
				</Text>
			</Flex>
			<Flex
				minHeight="70vh"
				justifyContent="center"
				alignItems="center"
				direction="column"
				width="100%"
			>
				{data.length > 0 ? (
					data.map((value: IJobs) => (
						<JobComponent
							key={value.id}
							name={value.name}
							habilitys={value.habilitys}
							responsibilities={value.responsibilities}
							remote={value.remote}
							sallary={value.sallary}
							type_of_contract={value.type_of_contract}
							level={value.level}
							deleteBtn={true}
							btnText="Ver Candidatos"
							funcDeleteBtn={() => handleDeleteJob(value.id)}
							funcBtn={() => handleShowCandidates(value.id)}
						/>
					))
				) : (
					<></>
				)}
			</Flex>
		</section>
	);
};

export default ShowJobs;
