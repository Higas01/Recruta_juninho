import { Heading, Flex, Text, Box, useMediaQuery } from "@chakra-ui/react";
import { TbCashBanknoteOff, TbDeviceDesktopHeart } from "react-icons/tb";
import { BsFillPersonVcardFill } from "react-icons/bs";

const SecondSectionHome = () => {
	const [isLargerThan768px] = useMediaQuery("(min-width: 900px)");

	return (
		<Flex
			minHeight="25vh"
			justifyContent="space-around"
			alignItems="center"
			borderBottom="0.1rem solid #ccc"
			flexWrap="wrap"
		>
			<Box
				boxShadow="lg"
				p="6"
				rounded="md"
				maxWidth={isLargerThan768px ? "25%" : "75%"}
			>
				<TbDeviceDesktopHeart fontSize="4rem" />
				<Heading as="h3">Apenas programadores iniciantes!</Heading>
				<Text fontSize="1.5rem" margin="1rem">
					Apenas vagas para estagiários e desenvolvedores Júniors, perfeito para
					você conseguir o seu primeiro sim!
				</Text>
			</Box>
			<Box
				boxShadow="lg"
				p="6"
				rounded="md"
				bg="#fff"
				maxWidth={isLargerThan768px ? "25%" : "75%"}
			>
				<TbCashBanknoteOff fontSize="4rem" />
				<Heading as="h3">Totalmente gratuito para você!</Heading>
				<Text fontSize="1.5rem" margin="1rem">
					Totalmente gratuito, é so criar a conta e aplicar para as vagas que
					mais se assemelha ao que você busca!
				</Text>
			</Box>
			<Box
				boxShadow="lg"
				p="6"
				rounded="md"
				bg="#fff"
				maxWidth={isLargerThan768px ? "25%" : "75%"}
			>
				<BsFillPersonVcardFill fontSize="4rem" />
				<Heading as="h3">Perfeito para sua primeira vaga!</Heading>
				<Text fontSize="1.5rem" margin="1rem">
					Buscamos inserir novos talentos no mercado de tecnologia, logo, somos
					perfeitos para desenvolvedores!
				</Text>
			</Box>
		</Flex>
	);
};

export default SecondSectionHome;
