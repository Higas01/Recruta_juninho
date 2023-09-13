import {
	Flex,
	Image,
	FormControl,
	Box,
	Heading,
	useMediaQuery,
} from "@chakra-ui/react";
import image_login_user from "../../assets/users/login/image_login_user.png";
import Inputs from "../../components/Inputs/Inputs";
import { FormEvent, useState } from "react";
import Btn from "../../components/Btn";
import FormModel from "../../components/FormModel";
const LoginUser = () => {
	// Inputs
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [isLargerThan1100px] = useMediaQuery("(min-width: 1100px)");

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(e);
	};

	return (
		<section>
			<Flex
				minHeight="130vh"
				justifyContent="space-evenly"
				alignItems="center"
				backgroundColor="#f4f4f4"
			>
				{isLargerThan1100px && (
					<Box>
						<Image src={image_login_user} boxSize="50rem" objectFit="contain" />
					</Box>
				)}
				<FormModel>
					<Heading as="h2" fontSize={isLargerThan1100px ? "3rem" : "2rem"}>
						Login
					</Heading>
					<FormControl>
						<form
							style={{
								height: "50%",
							}}
						>
							<Inputs
								label="Digite seu email"
								helperText="exemplo: exemplo@hotmail.com"
								type="email"
								value={email}
								setValue={setEmail}
							/>
							<Inputs
								label="Digite sua senha"
								type="password"
								value={password}
								setValue={setPassword}
							/>
							<Btn type="submit" border={true}>
								Enviar
							</Btn>
						</form>
					</FormControl>
				</FormModel>
			</Flex>
		</section>
	);
};

export default LoginUser;
