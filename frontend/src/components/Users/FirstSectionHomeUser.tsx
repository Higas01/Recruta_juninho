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

const FirstSectionHomeUser = () => {
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
					Bem-vindo Desenvolvedor!
				</Heading>
				<Text color="#fff" fontSize="2rem">
					Dê uma olhada em alguma das nossas oportunidades!
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
						href="/jobs"
					>
						Ver Vagas
					</Link>
				</Button>
			</Box>
			{isLargerThan900px && (
				<Image src={image_home} boxSize="45rem" objectFit="cover" />
			)}
		</Flex>
	);
};

export default FirstSectionHomeUser;
