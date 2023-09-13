import { Flex, Text, Link, useMediaQuery } from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
	const [isLargerThan768px] = useMediaQuery("(min-width: 900px)");

	return (
		<footer>
			<Flex
				background="#000"
				minHeight="15vh"
				alignItems="center"
				justifyContent="center"
				width="100vw"
			>
				<Text
					color="#fff"
					textAlign="center"
					fontSize={isLargerThan768px ? "2rem" : "1.5rem"}
					margin={isLargerThan768px ? "3rem" : "1rem"}
				>
					Desenvolvido por: Higor Matheus
				</Text>
				<Link margin={isLargerThan768px ? "1rem" : "0.5rem"}>
					<BsLinkedin
						fontSize={isLargerThan768px ? "3rem" : "2rem"}
						color="#fff"
					/>
				</Link>
				<Link margin={isLargerThan768px ? "1rem" : "0.5rem"}>
					<BsGithub
						fontSize={isLargerThan768px ? "3rem" : "2rem"}
						color="#fff"
					/>
				</Link>
			</Flex>
		</footer>
	);
};

export default Footer;
