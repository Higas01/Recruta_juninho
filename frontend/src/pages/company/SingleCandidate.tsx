import { Flex, Heading, useMediaQuery, Text } from "@chakra-ui/react";
import CandidateComponent from "../../components/CandidateComponent";

const SingleCandidate = () => {
	const habilitys = [
		"React",
		"Node",
		"Sequelize",
		"TDD",
		"PostgreSQL",
		"MongoDB",
		"Ruby on Rails",
	];
	const [isLargerThan1000px] = useMediaQuery("(min-width: 1000px)");
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
					Higor Matheus Rocha Porangaba
				</Text>
				<Flex justifyContent="center" alignItems="center" direction="column">
					<CandidateComponent
						title="Desenvolvedor JavaScript Full Stack"
						name_project="Controle de Estoque"
						habilitys={habilitys}
						perfil="Projeto Pessoal"
						description="Estamos buscando uma pessoa com deficiência para desenvolvedor em Backend e que queira fazer parte do time, que tenha paixão por tecnologia, negócio e pessoas. Seu papel será desenvolver ferramentas, extrair métricas e criar documentações. Codar com eficiência e qualidade, analisando o cenário 360 a fim de evitar impactos negativos em processos já existentes, desenvolver testes unitários, de integração e/ou regressão. Ser proativo e procurar evoluir seus conhecimentos e de seus parceiros de trabalho.
                        Responsabilidades:
                        Desenvolver apps que apoiam o fluxo de desenvolvimento;
                        Se aprofundar em problemas do Labs e propor soluções de forma pragmática;              
                        Propor e ajudar na implementação de melhorias no processo da empresa;
                        Estar disposto a produzir documentação;
                        Estar disposto a se aprofundar em problemas de arquitetura e design de software
						Estamos buscando uma pessoa com deficiência para desenvolvedor em Backend e que queira fazer parte do time, que tenha paixão por tecnologia, negócio e pessoas. Seu papel será desenvolver ferramentas, extrair métricas e criar documentações. Codar com eficiência e qualidade, analisando o cenário 360 a fim de evitar impactos negativos em processos já existentes, desenvolver testes unitários, de integração e/ou regressão. Ser proativo e procurar evoluir seus conhecimentos e de seus parceiros de trabalho.
                        Responsabilidades:
                        Desenvolver apps que apoiam o fluxo de desenvolvimento;
                        Se aprofundar em problemas do Labs e propor soluções de forma pragmática;              
                        Propor e ajudar na implementação de melhorias no processo da empresa;
                        Estar disposto a produzir documentação;
                        Estar disposto a se aprofundar em problemas de arquitetura e design de software
						Estamos buscando uma pessoa com deficiência para desenvolvedor em Backend e que queira fazer parte do time, que tenha paixão por tecnologia, negócio e pessoas. Seu papel será desenvolver ferramentas, extrair métricas e criar documentações. Codar com eficiência e qualidade, analisando o cenário 360 a fim de evitar impactos negativos em processos já existentes, desenvolver testes unitários, de integração e/ou regressão. Ser proativo e procurar evoluir seus conhecimentos e de seus parceiros de trabalho.
                        Responsabilidades:
                        Desenvolver apps que apoiam o fluxo de desenvolvimento;
                        Se aprofundar em problemas do Labs e propor soluções de forma pragmática;              
                        Propor e ajudar na implementação de melhorias no processo da empresa;
                        Estar disposto a produzir documentação;
                        Estar disposto a se aprofundar em problemas de arquitetura e design de software
						Estamos buscando uma pessoa com deficiência para desenvolvedor em Backend e que queira fazer parte do time, que tenha paixão por tecnologia, negócio e pessoas. Seu papel será desenvolver ferramentas, extrair métricas e criar documentações. Codar com eficiência e qualidade, analisando o cenário 360 a fim de evitar impactos negativos em processos já existentes, desenvolver testes unitários, de integração e/ou regressão. Ser proativo e procurar evoluir seus conhecimentos e de seus parceiros de trabalho.
                        Responsabilidades:
                        Desenvolver apps que apoiam o fluxo de desenvolvimento;
                        Se aprofundar em problemas do Labs e propor soluções de forma pragmática;              
                        Propor e ajudar na implementação de melhorias no processo da empresa;
                        Estar disposto a produzir documentação;
                        Estar disposto a se aprofundar em problemas de arquitetura e design de software
						
                        "
					/>
					<CandidateComponent
						title="Desenvolvedor JavaScript Full Stack"
						name_project="Controle de Estoque"
						habilitys={habilitys}
						perfil="Projeto Pessoal"
						description="Estamos buscando uma pessoa com deficiência para desenvolvedor em Backend e que queira fazer parte do time, que tenha paixão por tecnologia, negócio e pessoas. Seu papel será desenvolver ferramentas, extrair métricas e criar documentações. Codar com eficiência e qualidade, analisando o cenário 360 a fim de evitar impactos negativos em processos já existentes, desenvolver testes unitários, de integração e/ou regressão. Ser proativo e procurar evoluir seus conhecimentos e de seus parceiros de trabalho.
                        Responsabilidades:
                        Desenvolver apps que apoiam o fluxo de desenvolvimento;
                        Se aprofundar em problemas do Labs e propor soluções de forma pragmática;              
                        Propor e ajudar na implementação de melhorias no processo da empresa;
                        Estar disposto a produzir documentação;
                        Estar disposto a se aprofundar em problemas de arquitetura e design de software
						Estamos buscando uma pessoa com deficiência para desenvolvedor em Backend e que queira fazer parte do time, que tenha paixão por tecnologia, negócio e pessoas. Seu papel será desenvolver ferramentas, extrair métricas e criar documentações. Codar com eficiência e qualidade, analisando o cenário 360 a fim de evitar impactos negativos em processos já existentes, desenvolver testes unitários, de integração e/ou regressão. Ser proativo e procurar evoluir seus conhecimentos e de seus parceiros de trabalho.
                        Responsabilidades:
                        Desenvolver apps que apoiam o fluxo de desenvolvimento;
                        Se aprofundar em problemas do Labs e propor soluções de forma pragmática;              
                        Propor e ajudar na implementação de melhorias no processo da empresa;
                        Estar disposto a produzir documentação;
                        Estar disposto a se aprofundar em problemas de arquitetura e design de software
						Estamos buscando uma pessoa com deficiência para desenvolvedor em Backend e que queira fazer parte do time, que tenha paixão por tecnologia, negócio e pessoas. Seu papel será desenvolver ferramentas, extrair métricas e criar documentações. Codar com eficiência e qualidade, analisando o cenário 360 a fim de evitar impactos negativos em processos já existentes, desenvolver testes unitários, de integração e/ou regressão. Ser proativo e procurar evoluir seus conhecimentos e de seus parceiros de trabalho.
                        Responsabilidades:
                        Desenvolver apps que apoiam o fluxo de desenvolvimento;
                        Se aprofundar em problemas do Labs e propor soluções de forma pragmática;              
                        Propor e ajudar na implementação de melhorias no processo da empresa;
                        Estar disposto a produzir documentação;
                        Estar disposto a se aprofundar em problemas de arquitetura e design de software
						Estamos buscando uma pessoa com deficiência para desenvolvedor em Backend e que queira fazer parte do time, que tenha paixão por tecnologia, negócio e pessoas. Seu papel será desenvolver ferramentas, extrair métricas e criar documentações. Codar com eficiência e qualidade, analisando o cenário 360 a fim de evitar impactos negativos em processos já existentes, desenvolver testes unitários, de integração e/ou regressão. Ser proativo e procurar evoluir seus conhecimentos e de seus parceiros de trabalho.
                        Responsabilidades:
                        Desenvolver apps que apoiam o fluxo de desenvolvimento;
                        Se aprofundar em problemas do Labs e propor soluções de forma pragmática;              
                        Propor e ajudar na implementação de melhorias no processo da empresa;
                        Estar disposto a produzir documentação;
                        Estar disposto a se aprofundar em problemas de arquitetura e design de software
						
                        "
					/>
					<CandidateComponent
						title="Desenvolvedor JavaScript Full Stack"
						name_project="Controle de Estoque"
						habilitys={habilitys}
						perfil="Projeto Pessoal"
						description="Estamos buscando uma pessoa com deficiência para desenvolvedor em Backend e que queira fazer parte do time, que tenha paixão por tecnologia, negócio e pessoas. Seu papel será desenvolver ferramentas, extrair métricas e criar documentações. Codar com eficiência e qualidade, analisando o cenário 360 a fim de evitar impactos negativos em processos já existentes, desenvolver testes unitários, de integração e/ou regressão. Ser proativo e procurar evoluir seus conhecimentos e de seus parceiros de trabalho.
                        Responsabilidades:
                        Desenvolver apps que apoiam o fluxo de desenvolvimento;
                        Se aprofundar em problemas do Labs e propor soluções de forma pragmática;              
                        Propor e ajudar na implementação de melhorias no processo da empresa;
                        Estar disposto a produzir documentação;
                        Estar disposto a se aprofundar em problemas de arquitetura e design de software
						Estamos buscando uma pessoa com deficiência para desenvolvedor em Backend e que queira fazer parte do time, que tenha paixão por tecnologia, negócio e pessoas. Seu papel será desenvolver ferramentas, extrair métricas e criar documentações. Codar com eficiência e qualidade, analisando o cenário 360 a fim de evitar impactos negativos em processos já existentes, desenvolver testes unitários, de integração e/ou regressão. Ser proativo e procurar evoluir seus conhecimentos e de seus parceiros de trabalho.
                        Responsabilidades:
                        Desenvolver apps que apoiam o fluxo de desenvolvimento;
                        Se aprofundar em problemas do Labs e propor soluções de forma pragmática;              
                        Propor e ajudar na implementação de melhorias no processo da empresa;
                        Estar disposto a produzir documentação;
                        Estar disposto a se aprofundar em problemas de arquitetura e design de software
						Estamos buscando uma pessoa com deficiência para desenvolvedor em Backend e que queira fazer parte do time, que tenha paixão por tecnologia, negócio e pessoas. Seu papel será desenvolver ferramentas, extrair métricas e criar documentações. Codar com eficiência e qualidade, analisando o cenário 360 a fim de evitar impactos negativos em processos já existentes, desenvolver testes unitários, de integração e/ou regressão. Ser proativo e procurar evoluir seus conhecimentos e de seus parceiros de trabalho.
                        Responsabilidades:
                        Desenvolver apps que apoiam o fluxo de desenvolvimento;
                        Se aprofundar em problemas do Labs e propor soluções de forma pragmática;              
                        Propor e ajudar na implementação de melhorias no processo da empresa;
                        Estar disposto a produzir documentação;
                        Estar disposto a se aprofundar em problemas de arquitetura e design de software
						Estamos buscando uma pessoa com deficiência para desenvolvedor em Backend e que queira fazer parte do time, que tenha paixão por tecnologia, negócio e pessoas. Seu papel será desenvolver ferramentas, extrair métricas e criar documentações. Codar com eficiência e qualidade, analisando o cenário 360 a fim de evitar impactos negativos em processos já existentes, desenvolver testes unitários, de integração e/ou regressão. Ser proativo e procurar evoluir seus conhecimentos e de seus parceiros de trabalho.
                        Responsabilidades:
                        Desenvolver apps que apoiam o fluxo de desenvolvimento;
                        Se aprofundar em problemas do Labs e propor soluções de forma pragmática;              
                        Propor e ajudar na implementação de melhorias no processo da empresa;
                        Estar disposto a produzir documentação;
                        Estar disposto a se aprofundar em problemas de arquitetura e design de software
						
                        "
					/>
				</Flex>
			</Flex>
		</section>
	);
};

export default SingleCandidate;
