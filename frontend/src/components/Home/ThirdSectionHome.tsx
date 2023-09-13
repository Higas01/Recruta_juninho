import { Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import JobCardHome from "../Job/JobCardHome";

const ThirdSectionHome = () => {
	const [isLargerThan1280px] = useMediaQuery("(min-width: 1280px)");
	const [isLargerThan768px] = useMediaQuery("(min-width: 768px)");

	return (
		<Flex
			alignItems="center"
			flexDirection="column"
			minHeight="30vh"
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
				<JobCardHome
					name="Full-Stack Developer"
					sallary={1500}
					habilitys={["JS", "REACT"]}
					level="Estagiário"
					type_of_contract="Estagiário"
					remote={true}
				/>
				<JobCardHome
					name="Full-Stack Developer"
					sallary={1500}
					habilitys={["Java", "PHP", "POO"]}
					level="Estagiário"
					type_of_contract="Estagiário"
					remote={true}
				/>
				<JobCardHome
					name="Full-Stack Developer"
					sallary={1500}
					habilitys={["JavaScript", "NodeJS", "Express", "ORM"]}
					level="Estagiário"
					type_of_contract="Estagiário"
					remote={false}
				/>
				<JobCardHome
					name="Full-Stack Developer"
					sallary={1500}
					habilitys={[
						"JavaScript",
						"NodeJS",
						"React",
						"Express",
						"ORM",
						"PHP",
						"Docker",
					]}
					level="Júnior"
					type_of_contract="CLT"
					remote={false}
				/>
				<JobCardHome
					name="Full-Stack Developer"
					sallary={1500}
					habilitys={["JS", "REACT"]}
					level="Estagiário"
					type_of_contract="Estagiário"
					remote={true}
				/>
				<JobCardHome
					name="Full-Stack Developer"
					sallary={1500}
					habilitys={["Java", "PHP", "POO"]}
					level="Estagiário"
					type_of_contract="Estagiário"
					remote={true}
				/>
				{isLargerThan1280px && (
					<>
						<JobCardHome
							name="Full-Stack Developer"
							sallary={1500}
							habilitys={["Java", "PHP", "POO"]}
							level="Estagiário"
							type_of_contract="Estagiário"
							remote={true}
						/>
						<JobCardHome
							name="Full-Stack Developer"
							sallary={1500}
							habilitys={["Java", "PHP", "POO"]}
							level="Estagiário"
							type_of_contract="Estagiário"
							remote={true}
						/>
					</>
				)}
			</Flex>
		</Flex>
	);
};

export default ThirdSectionHome;
