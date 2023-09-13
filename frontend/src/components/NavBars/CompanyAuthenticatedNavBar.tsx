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
import { HiMenu } from "react-icons/hi";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { TiBusinessCard } from "react-icons/ti";
import { MdBusinessCenter } from "react-icons/md";
import { useContext } from "react";
import { ApiContext } from "../../context/api";
import { useNavigate } from "react-router-dom";
import { CompanyAuthContext } from "../../context/companyAuth";

const CompanyAuthenticatedNavBar = () => {
	const [isLargerThan768px] = useMediaQuery("(min-width: 768px)");
	const { URL } = useContext(ApiContext);
	const { setCompanyAuthenticated } = useContext(CompanyAuthContext);
	const navigate = useNavigate();

	const handleCompanyLogout = async () => {
		try {
			await fetch(`${URL}/company/logout`, {
				method: "POST",
				credentials: "include",
			});
			setCompanyAuthenticated(false);
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
							href="/company/jobs"
						>
							VER MINHAS VAGAS
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
									href="/company/create"
									_hover={{
										textDecoration: "none",
									}}
								>
									<MenuItem
										padding="1rem"
										icon={<TiBusinessCard fontSize="2rem" />}
									>
										Cadastrar Vaga
									</MenuItem>
								</Link>
								<MenuItem
									padding="1rem"
									icon={<RiLogoutBoxRFill fontSize="2rem" />}
									onClick={handleCompanyLogout}
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
								<Box borderTop="0.1rem solid #cccc">
									<Link href="/company/create">
										<MenuItem icon={<TiBusinessCard fontSize="2rem" />}>
											Cadastra Vaga
										</MenuItem>
									</Link>
									<Link href="/company/jobs">
										<MenuItem icon={<MdBusinessCenter fontSize="2rem" />}>
											Ver Minhas Vagas
										</MenuItem>
									</Link>
								</Box>
								<Box borderTop="0.1rem solid #cccc">
									<MenuItem
										icon={<RiLogoutBoxRFill fontSize="2rem" />}
										onClick={handleCompanyLogout}
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

export default CompanyAuthenticatedNavBar;
