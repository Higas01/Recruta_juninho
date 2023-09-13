import { Flex, Box, Heading, Image } from "@chakra-ui/react";
import Paragraph from "../components/SingleJob/Paragraph";
import download from "../assets/download.png";
import Details from "../components/SingleJob/Details";
import Btn from "../components/Btn";
import Description from "../components/SingleJob/Description";
import JobCard from "../components/Job/JobCard";

const SingleJob = () => {
	return (
		<section>
			<Flex
				width="100%"
				background="#000"
				minHeight="40vh"
				padding="8rem 0 3rem 0"
				justifyContent="center"
				alignItems="center"
				direction="column"
			>
				<Heading as="h1" color="#fff" fontSize="4rem" marginTop="3rem">
					Desenvolvedor Full-Stack
				</Heading>
				<Flex flexWrap="wrap" justifyContent="center" alignItems="center">
					<Paragraph text="JavaScript" />
					<Paragraph text="NodeJS" />
					<Paragraph text="PostgreSQL" />
					<Paragraph text="NoSQL" />
					<Paragraph text="AWS" />
				</Flex>
			</Flex>
			<Flex
				minHeight="120vh"
				direction="column"
				backgroundColor="#f4f4f4"
				alignItems="center"
			>
				<Box minHeight="10vh"></Box>
				<JobCard
					title="Senior Sitemas LTDA"
					image={download}
					btnText="Candidate-se"
					setOnClick={() => console.log("hello word")}
				/>
				<Box minWidth="50%" padding="2rem" minHeight="30vh" margin="3rem">
					<Description
						title="Descrição da Empresa"
						description="A Senior é referência brasileira de softwares e soluções para gestão de empresas. Com 12 mil clientes e mais de 35 anos de história, a companhia traz premiações internacionais como por exemplo a inteligência artificial SARA – que foi reconhecida pela IBM. Possui fábrica de software com tecnologia de ponta, localizada na matriz, localizada em Blumenau/SC. Atua com um inovador e amplo portfólio de produtos e serviços, atendendo segmentos como agronegócio, varejo, indústria e construção.

O compromisso com a inovação é constante dentro da empresa e está presente em cada um dos projetos que são desenvolvidos pelos colaboradores. Por isso, todos são colocados em contato diário com tecnologias de ponta, estimulando assim a criatividade, a ousadia e evolução dos profissionais. Na Senior a carreira dos colaboradores é muito importante, por isso, há uma série de oportunidades que são oferecidas para promover o crescimento pessoal e profissional dentro da organização. Além disso, a empresa proporciona uma série de benefícios para que o dia a dia seja agradável e para potencializar a evolução dos talentos. Com isso, está entre as melhores empresas de tecnologia para se trabalhar de acordo com o Great Place to Work. Atualmente a Senior possui cerca de 2.800 colaboradores, distribuídos em mais de 20 operações próprias.

"
					/>
					<Description
						title="Responsabilidades"
						description="Essa oportunidade é para atuar em uma equipe ágil, focada em entregar soluções de valor para o mercado, utilizando metodologias ágeis (scrum) e com alto desempenho, engajamento e comprometimento.
                        Buscamos pessoas com perfil para inovação e com desejo de crescimento pessoal e profissional. Nosso desafio é desenvolver e entregar soluções inovadoras que proporcionarão aos nossos clientes uma excelente experiência e impulsionamento de seus negócios.
                        
                        "
					/>
					<Description
						title="Requisitos"
						description="O que precisamos?

                        - Superior completo ou cursando em Ciências da Computação, Sistemas da Informação ou áreas afins;
                        - Conhecimento na linguagem Java com Angular;
                        - Conhecimento em versionamento de código utilizando Git;
                        - Conhecimento na linguagem SQL;
                        - Vivência em banco de dados Oracle / SQL Server / PostgreSQL;
                        - Vivência na metodologia de desenvolvimento Ágil com Scrum;
                        - Conhecimentos de TDD com jUnit.
                        
                        O que pode diferenciar você?
                        
                        - Vivência com sistemas de Gestão Empresarial | Agronegócio;
                        - Vivência com desenvolvimento de API's;
                        - Vivência com desenvolvimento de sistemas distribuídos;
                        - Vivência com desenvolvimento mobile com linguagem Flutter.
                        - Vivência com desenvolvimento em Analytics Studio
                        
                        
                        
                        "
					/>
				</Box>
			</Flex>
		</section>
	);
};

export default SingleJob;
