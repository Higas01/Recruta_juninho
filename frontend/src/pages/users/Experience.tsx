import { Flex, Box, useMediaQuery } from "@chakra-ui/react";
import Btn from "../../components/Btn";
import { FormEvent, useContext, useState } from "react";
import FormExperience from "../../components/FormExperience";
import { ApiContext } from "../../context/api";

const Experience = () => {
	// Inputs
	const [company, setCompany] = useState<string>("");
	const [habilitys, setHabilitys] = useState<string>("");
	const [arrayHabilitys, setArrayHabilitys] = useState<string[]>([]);
	const [description, setDescription] = useState<string>("");
	const [select, setSelect] = useState<string>("");
	const [occupation, setOccupation] = useState<string>("");
	const [isLargerThan1000px] = useMediaQuery("(min-width: 1000px)");

	const { URL } = useContext(ApiContext);

	const [error, setError] = useState<boolean>(false);
	const [success, setSuccess] = useState<boolean>(false);

	const handleValidationFirstForm = (): boolean => {
		setError(false);
		if (!company) {
			setError(true);
			return false;
		}

		if (!occupation) {
			setError(true);
			return false;
		}

		if (arrayHabilitys.length === 0) {
			setError(true);
			return false;
		}

		if (!description) {
			setError(true);
			return false;
		}

		if (!setSelect) {
			setError(true);
			return false;
		}

		return true;
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const isValid = handleValidationFirstForm();

		if (!isValid) {
			return;
		}

		const value = {
			project_name: company,
			function: occupation,
			experience_profile: select,
			description,
			habilitys: arrayHabilitys,
		};

		const response = await fetch(`${URL}/experience`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify(value),
		});

		const result = await response.json();

		if (result.message === "Experiência registrada com sucesso") {
			setSuccess(true);
			setOccupation("");
			setCompany("");
			setDescription("");
			setArrayHabilitys([]);
		}
	};

	return (
		<section>
			<Flex
				minHeight="120vh"
				justifyContent="center"
				alignItems="center"
				background="#f4f4f4"
				alignContent="center"
				padding=" 25px 15px"
				direction="column"
			>
				<form
					style={{
						width: "100%",
					}}
					onSubmit={handleSubmit}
				>
					<Flex justifyContent="center" alignItems="center" direction="column">
						<Box width={isLargerThan1000px ? "50%" : "100%"}>
							<FormExperience
								value={company}
								setValue={setCompany}
								habilitys={habilitys}
								setHabilitys={setHabilitys}
								setArrayHabilitys={setArrayHabilitys}
								arrayHabilitys={arrayHabilitys}
								description={description}
								setDescription={setDescription}
								setSelect={setSelect}
								occupation={occupation}
								setOccupation={setOccupation}
								error={error && true}
								success={success}
							/>
						</Box>
						<Box margin="5rem">
							<Btn type="submit" border={true}>
								Salvar
							</Btn>
						</Box>
					</Flex>
				</form>
			</Flex>
		</section>
	);
};

export default Experience;
