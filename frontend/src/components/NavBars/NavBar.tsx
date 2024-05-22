import {
	Button,
	Flex,
	Heading,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	useMediaQuery,
	Box,
	Text,
} from "@chakra-ui/react";
import { BiSolidUser, BiSolidBusiness, BiAward } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

const NavBar = () => {
	const [isLargerThan768px] = useMediaQuery("(min-width: 768px)");

	return (
		<nav>
			<Flex
				alignItems="center"
				padding={isLargerThan768px ? "1rem" : "2rem"}
				justifyContent="space-between"
				borderBottom="1px solid #cccc"
				width="100vw"
				position="fixed"
				background="#fff"
				zIndex="2"
			>
				<Heading
					as="h2"
					textTransform="uppercase"
					fontSize={isLargerThan768px ? "2rem" : "1.5rem"}
				>
					<Link to="/">
					<Text
						_hover={{
							textDecoration: "none",
						}}
					>
						Recruta Juninho
					</Text>
					</Link>
				</Heading>
				{isLargerThan768px && (
					<Flex textAlign="center" alignItems="center">
						<Link to="/jobs">
						<Text
							fontSize="1.5rem"
							fontWeight="bold"
							marginRight="2rem"
						>
							VER VAGAS
						</Text>
						</Link>
						<Menu>
							<MenuButton
								as={Button}
								fontSize="1.5rem"
								padding="2rem"
								margin="1rem"
								border="1px solid #cccc"
								background="none"
							>
								Login
							</MenuButton>
							<MenuList fontSize="1.5rem">
								<Link to="/users/login">
								<Text
									_hover={{
										textDecoration: "none",
									}}
								>
									<MenuItem
										padding="1rem"
										icon={<BiSolidUser fontSize="2rem" />}
									>
										Sou Candidato
									</MenuItem>
								</Text>
								</Link>
								<Link to="/company/login">
								<Text
									_hover={{
										textDecoration: "none",
									}}
								>
									<MenuItem
										padding="1rem"
										icon={<BiSolidBusiness fontSize="2rem" />}
									>
										<Text>Sou Empresa</Text>
									</MenuItem>
								</Text>
								</Link>
							</MenuList>
						</Menu>
						<Menu>
							<MenuButton
								as={Button}
								fontSize="1.5rem"
								padding="2rem"
								margin="1rem"
								background="none"
								border="1px solid #cccc"
							>
								Registre-se
							</MenuButton>
							<MenuList fontSize="1.5rem">
								<Link to="/users/register">
								<Text
									_hover={{
										textDecoration: "none",
									}}
								>
									<MenuItem
										padding="1rem"
										icon={<BiSolidUser fontSize="2rem" />}
									>
										Sou Candidato
									</MenuItem>
								</Text>
								</Link>
								<Link to="/company/register">
								<Text
									_hover={{
										textDecoration: "none",
									}}
								>
									<MenuItem
										padding="1rem"
										icon={<BiSolidBusiness fontSize="2rem" />}
									>
										Sou Empresa
									</MenuItem>
								</Text>
								</Link>
							</MenuList>
						</Menu>
					</Flex>
				)}
				{!isLargerThan768px && (
					<>
						<Menu>
							<MenuButton
								as={Button}
								aria-label="Options"
								variant="outline"
								fontSize="2rem"
								padding="1rem"
								border="none"
							>
								<HiMenu />
							</MenuButton>
							<MenuList fontSize="1.5rem" position="static">
								<Link to="/jobs">
								<Text>
									<MenuItem icon={<BiAward fontSize="2rem" />}>
										Ver Vagas
									</MenuItem>
								</Text>
								</Link>
								<Box borderTop="0.1rem solid #cccc">
									<Link to="/users/login">
									<Text>
										<MenuItem icon={<BiSolidUser fontSize="2rem" />}>
											Login como Candidato
										</MenuItem>
									</Text>
									</Link>
									<Link to="/company/login">
									<Text>
										<MenuItem icon={<BiSolidBusiness fontSize="2rem" />}>
											Login Como Empresa
										</MenuItem>
									</Text>
									</Link>
								</Box>
								<Box borderTop="0.1rem solid #cccc">
									<Link to="/users/register">
									<Text>
										<MenuItem icon={<BiSolidUser fontSize="2rem" />}>
											Cadastre-se como Candidato
										</MenuItem>
									</Text>
									</Link>
									<Link to="/company/register">
									<Text>
										<MenuItem icon={<BiSolidBusiness fontSize="2rem" />}>
											Cadastre-se como Empresa
										</MenuItem>
									</Text>
									</Link>
								</Box>
							</MenuList>
						</Menu>
					</>
				)}
			</Flex>
		</nav>
	);
};

export default NavBar;
