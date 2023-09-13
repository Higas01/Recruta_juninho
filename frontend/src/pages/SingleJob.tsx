import {
	Flex,
	Box,
	Heading,
	AlertIcon,
	Alert,
	AlertDescription,
	Text,
} from "@chakra-ui/react";
import Paragraph from "../components/SingleJob/Paragraph";
import company from "../assets/company.png";
import Description from "../components/SingleJob/Description";
import JobCard from "../components/Job/JobCard";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../context/api";
import { ISingleJob } from "../interface/ISingleJob";
import { IResponse } from "../interface/IResponse";

const SingleJob = () => {
	const { id } = useParams();
	const { URL } = useContext(ApiContext);

	const [data, setData] = useState<ISingleJob[]>([]);

	const [success, setSuccess] = useState<boolean>(false);

	const [error, setError] = useState<boolean>(false);
	const [msgError, setMsgError] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const [notExistingID, setNotExistingID] = useState<boolean>(false);

	useEffect(() => {
		const getJob = async () => {
			const response = await fetch(`${URL}/job/${id}`, {
				credentials: "include",
			});
			const result = await response.json();
			if (result.message === "Vaga não existe") {
				setIsLoading(false);
				setNotExistingID(true);
			}
			setData(result);
			setIsLoading(false);
		};
		getJob();
	}, [id]);

	const handleCandidacy = async () => {
		setSuccess(false);
		setError(false);
		try {
			const response = await fetch(`${URL}/application?jobId=${id}`, {
				method: "POST",
				credentials: "include",
			});
			const result: IResponse = await response.json();

			if (result.message === "Você já se candidatou nesta vaga") {
				setError(true);
				setMsgError("Você já se candidatou para esta vaga");
			}
			if (result.message === "Candidatura efetuada com sucesso") {
				setSuccess(true);
			}
		} catch {
			setError(true);
			setMsgError(
				"Ocorreu algum erro, já estamos trabalhando na solução! Tente novamente mais tarde"
			);
		}
	};

	return (
		<section>
			{!isLoading &&
				(notExistingID ? (
					<Flex
						width="100%"
						background="#FFF"
						minHeight="85vh"
						padding="8rem 0 3rem 0"
						justifyContent="center"
						alignItems="center"
						direction="column"
					>
						<Text fontSize="5rem">Error 404 - Página não existente.</Text>
					</Flex>
				) : (
					<>
						<Flex
							width="100%"
							background="#000"
							minHeight="40vh"
							padding="8rem 0 3rem 0"
							justifyContent="center"
							alignItems="center"
							direction="column"
						>
							<Heading as="h1" color="#fff" fontSize="3rem" marginTop="3rem">
								{data.map((value) => value.name)}
							</Heading>
							<Flex
								flexWrap="wrap"
								justifyContent="center"
								alignItems="center"
								margin="2rem"
							>
								{data.length > 0 &&
									data.map((value) => (
										<Paragraph key={value.id} habilitys={value.habilitys} />
									))}
							</Flex>
						</Flex>
						<Flex
							minHeight="120vh"
							direction="column"
							backgroundColor="#f4f4f4"
							alignItems="center"
						>
							<Box minHeight="10vh"></Box>
							<Box boxShadow="lg" minWidth="70%">
								<JobCard
									title={data.map((value) => value.company.name)}
									image={
										data.length > 0 && data[0].company.photo
											? data[0].company.photo
											: company
									}
									data={data}
									btnText="Candidate-se"
									disabled={error && true}
									setOnClick={handleCandidacy}
								/>
								{success ? (
									<Alert
										status="success"
										fontSize="1.5rem"
										width="100%"
										justifyContent="center"
										alignItems="center"
									>
										<AlertIcon boxSize="2rem" />
										Candidatura realizada com sucesso
									</Alert>
								) : error ? (
									<Alert status="error" fontSize="1.5rem">
										<AlertIcon boxSize="2rem" />
										<AlertDescription>{msgError}</AlertDescription>
									</Alert>
								) : (
									<></>
								)}
							</Box>
							<Box
								minWidth="100%"
								padding="2rem"
								minHeight="30vh"
								margin="3rem"
							>
								<Description
									title="Descrição da Empresa"
									description={data.map((value) => value.company.description)}
								/>
								<Description
									title="Responsabilidades"
									description={data.map((value) => value.responsibilities)}
								/>
								<Description
									title="Requisitos"
									description={data.map((value) => value.requirements)}
								/>
							</Box>
						</Flex>
					</>
				))}
		</section>
	);
};

export default SingleJob;
