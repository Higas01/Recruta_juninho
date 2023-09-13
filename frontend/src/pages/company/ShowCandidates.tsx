import { Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import CandidatesCard from "../../components/CandidatesCard";

const ShowCandidates = () => {
	const [isLargerThan950px] = useMediaQuery("(min-width: 950px)");

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
						Todos os candidatos da vaga estão listados abaixo
					</Heading>
					<CandidatesCard
						name="Higor Matheus"
						level="Júnior"
						tel="(82) 99366-9931"
						age={19}
						habilitys="JavaScript, React, NodeJS, SQL, MongoDB, TypeScript, Git"
					/>
					<CandidatesCard
						name="Higor Matheus"
						level="Júnior"
						tel="(82) 99366-9931"
						age={19}
						habilitys="JavaScript, React, NodeJS, SQL, MongoDB, TypeScript, Git"
					/>
					<CandidatesCard
						name="Higor Matheus"
						level="Júnior"
						tel="(82) 99366-9931"
						age={19}
						habilitys="JavaScript, React, NodeJS, SQL, MongoDB, TypeScript, Git"
					/>
				</Flex>
			</Flex>
		</section>
	);
};

export default ShowCandidates;
