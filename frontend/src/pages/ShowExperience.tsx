import { Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import CandidateComponent from "../components/CandidateComponent";
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../context/api";
import { ICandidates } from "../interface/ICandidates";

const ShowExperiences = () => {
	const [isLargerThan1000px] = useMediaQuery("(min-width: 1000px)");

	const [data, setData] = useState<ICandidates[]>([]);
	const [callApi, setCallApi] = useState<boolean>(false);

	const { URL } = useContext(ApiContext);

	useEffect(() => {
		const getExperiences = async () => {
			const response = await fetch(`${URL}/experience`, {
				credentials: "include",
			});
			const result = await response.json();
			setData(result);
		};

		getExperiences();
	}, [callApi]);

	const deleteBtn = async (id: number) => {
		await fetch(`${URL}/experience/${id}`, {
			method: "DELETE",
		});
		setCallApi(true);
	};

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
					Suas experiências estão abaixo:
				</Heading>
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
								habilitys={value.habilitys}
								description={value.description}
								perfil={value.experience_profile}
								name_project={value.project_name}
								deleteBtn={true}
								deleteBtnFunction={() => deleteBtn(value.id)}
								key={value.id}
							/>
						))}
				</Flex>
			</Flex>
		</section>
	);
};

export default ShowExperiences;
