import {
	Box,
	Button,
	Flex,
	Heading,
	Text,
	Link,
	useMediaQuery,
} from "@chakra-ui/react";
import image_home from "../../assets/home/image_home.png";
import { Image } from "@chakra-ui/react";

const FirstSectionHome = () => {
	const [isLargerThan900px] = useMediaQuery("(min-width: 900px)");

	return (
		<Flex
			backgroundColor="#000"
			minHeight="75vh"
			justifyContent="center"
			alignItems="center"
			lineHeight="4rem"
		>
			<Box
				width={isLargerThan900px ? "35%" : "100%"}
				textAlign={isLargerThan900px ? undefined : "center"}
			>
				<Heading
					as="h1"
					color="#fff"
					fontSize={isLargerThan900px ? "3.6rem" : "2.5rem"}
					letterSpacing="0.2rem"
				>
					Oportunidade para desenvolvedores!
				</Heading>
				<Text color="#fff" fontSize="2rem">
					Cadastre-se e inicie sua carreira!
				</Text>
				<Button
					colorScheme="gray"
					size="lg"
					fontSize="2rem"
					padding="2rem"
					margin="1rem"
					border="0.01rem solid #fff"
					_hover={{
						transition: "1s",
						backgroundColor: "#000",
						color: "#fff",
					}}
					zIndex="1"
				>
					<Link
						_hover={{
							color: "#fff",
						}}
						href="/users/register"
					>
						Criar Perfil
					</Link>
				</Button>
				<Text color="#fff" fontSize="1.5rem">
					É empresa?
					<Link
						textDecoration="underline"
						margin="0.5rem"
						href="/company/register"
					>
						Registre-se por aqui!
					</Link>
				</Text>
			</Box>
			{isLargerThan900px && (
				<Image src={image_home} boxSize="45rem" objectFit="cover" />
			)}
		</Flex>
	);
};

export default FirstSectionHome;
