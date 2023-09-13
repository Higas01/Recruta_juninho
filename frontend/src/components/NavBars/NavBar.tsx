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
	Link,
} from "@chakra-ui/react";
import { BiSolidUser, BiSolidBusiness, BiAward } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";

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
					<Link
						href="/"
						_hover={{
							textDecoration: "none",
						}}
					>
						Recruta Juninho
					</Link>
				</Heading>

				{isLargerThan768px && (
					<Flex textAlign="center" alignItems="center">
						<Link
							fontSize="1.5rem"
							fontWeight="bold"
							marginRight="2rem"
							href="/jobs"
						>
							VER VAGAS
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
								<Link
									href="/users/login"
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
								</Link>
								<Link
									href="/company/login"
									_hover={{
										textDecoration: "none",
									}}
								>
									<MenuItem
										padding="1rem"
										icon={<BiSolidBusiness fontSize="2rem" />}
									>
										<Link>Sou Empresa</Link>
									</MenuItem>
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
								<Link
									href="/users/register"
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
								</Link>
								<Link
									href="/company/register"
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
								<Link href="/jobs">
									<MenuItem icon={<BiAward fontSize="2rem" />}>
										Ver Vagas
									</MenuItem>
								</Link>
								<Box borderTop="0.1rem solid #cccc">
									<Link href="/users/login">
										<MenuItem icon={<BiSolidUser fontSize="2rem" />}>
											Login como Candidato
										</MenuItem>
									</Link>
									<Link href="/company/login">
										<MenuItem icon={<BiSolidBusiness fontSize="2rem" />}>
											Login Como Empresa
										</MenuItem>
									</Link>
								</Box>
								<Box borderTop="0.1rem solid #cccc">
									<Link href="/users/register">
										<MenuItem icon={<BiSolidUser fontSize="2rem" />}>
											Cadastre-se como Candidato
										</MenuItem>
									</Link>
									<Link href="/company/register">
										<MenuItem icon={<BiSolidBusiness fontSize="2rem" />}>
											Cadastre-se como Empresa
										</MenuItem>
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
