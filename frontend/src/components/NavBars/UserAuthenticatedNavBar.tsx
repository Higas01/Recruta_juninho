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
	Text
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
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
					<Link to="/">
						Recruta Juninho
					</Link>
				</Heading>

				{isLargerThan768px && (
					<Flex textAlign="center" alignItems="center">
						<Link to="jobs">
							<Text
								fontSize="1.5rem"
								fontWeight="bold"
								marginRight="2rem"
								_hover={{
									textDecoration: "underline",
								}}
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
								Menu
							</MenuButton>
							<MenuList fontSize="1.5rem">
								<Link
									to="/users/experience"
								>
									<MenuItem
										padding="1rem"
										icon={<GrValidate fontSize="2rem" />}
									>
										Gerenciar Experiências
									</MenuItem>
								</Link>
								<Link
									to="/users/experience/create"
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
									to="jobs"
								>
									<MenuItem icon={<BiAward fontSize="2rem" />}>
										Ver Vagas
									</MenuItem>
								</Link>
								<Box borderTop="0.1rem solid #cccc">
									<Link
										to="/users/experience"
									>
										<MenuItem icon={<GrValidate fontSize="2rem" />}>
											Gerenciar Experiências
										</MenuItem>
									</Link>
								</Box>
								<Box borderTop="0.1rem solid #cccc">
									<Link
										to="/users/experience/create"
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
