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
import { BiAward } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { AiFillExperiment } from "react-icons/ai";
import { useContext } from "react";
import { ApiContext } from "../../context/api";
import { useNavigate } from "react-router-dom";
import { UserAuthContext } from "../../context/UserAuth";
import { GrValidate } from "react-icons/gr";

const UserAuthenticatedNavBar = () => {
	const [isLargerThan768px] = useMediaQuery("(min-width: 768px)");

	const { URL } = useContext(ApiContext);
	const { setUserAuthenticated } = useContext(UserAuthContext);

	const navigate = useNavigate();

	const handleUserLogout = async () => {
		try {
			await fetch(`${URL}/user/logout`, {
				method: "POST",
				credentials: "include",
			});
			setUserAuthenticated(false);
			navigate("/");
		} catch {}
	};

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
							href="jobs"
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
								Menu
							</MenuButton>
							<MenuList fontSize="1.5rem">
								<Link
									href="experience"
									_hover={{
										textDecoration: "none",
									}}
								>
									<MenuItem
										padding="1rem"
										icon={<GrValidate fontSize="2rem" />}
									>
										Gerenciar Experiências
									</MenuItem>
								</Link>
								<Link
									href="users/experience/create"
									_hover={{
										textDecoration: "none",
									}}
								>
									<MenuItem icon={<AiFillExperiment fontSize="2rem" />}>
										Cadastrar Experiência
									</MenuItem>
								</Link>

								<MenuItem
									padding="1rem"
									icon={<RiLogoutBoxRFill fontSize="2rem" />}
									onClick={handleUserLogout}
								>
									Sair
								</MenuItem>
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
								<Link
									href="jobs"
									_hover={{
										textDecoration: "none",
									}}
								>
									<MenuItem icon={<BiAward fontSize="2rem" />}>
										Ver Vagas
									</MenuItem>
								</Link>
								<Box borderTop="0.1rem solid #cccc">
									<Link
										href="users/experience"
										_hover={{
											textDecoration: "none",
										}}
									>
										<MenuItem icon={<GrValidate fontSize="2rem" />}>
											Gerenciar Experiências
										</MenuItem>
									</Link>
								</Box>
								<Box borderTop="0.1rem solid #cccc">
									<Link
										href="users/experience/create"
										_hover={{
											textDecoration: "none",
										}}
									>
										<MenuItem icon={<AiFillExperiment fontSize="2rem" />}>
											Cadastrar Experiência
										</MenuItem>
									</Link>
								</Box>
								<Box borderTop="0.1rem solid #cccc">
									<MenuItem
										icon={<RiLogoutBoxRFill fontSize="2rem" />}
										onClick={handleUserLogout}
									>
										Sair
									</MenuItem>
								</Box>
							</MenuList>
						</Menu>
					</>
				)}
			</Flex>
		</nav>
	);
};

export default UserAuthenticatedNavBar;
