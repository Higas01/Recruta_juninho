import { Flex, Box, useMediaQuery } from "@chakra-ui/react";
import Btn from "../../components/Btn";
import { Dispatch, SetStateAction, useState } from "react";
import FormExperience from "../../components/FormExperience";
import { BsTrashFill } from "react-icons/bs";

const Experience = () => {
	const [value, setValue] = useState("");
	const [habilitys, setHabilitys] = useState("");
	const [arrayHabilitys, setArrayHabilitys] = useState<string[]>([]);
	const [secondExperience, setSecondExperience] = useState(false);
	const [thirdExperience, setThirdExperience] = useState(false);
	const [isLargerThan1000px] = useMediaQuery("(min-width: 1000px)");
	const [isLargerThan800px] = useMediaQuery("(min-width: 800px)");

	const handleAddForm = (setExperience: Dispatch<SetStateAction<boolean>>) => {
		setExperience(true);
	};

	const handleRemoveForm = (
		setExperience: Dispatch<SetStateAction<boolean>>
	) => {
		setExperience(false);
	};

	return (
		<section>
			<Flex
				minHeight="120vh"
				justifyContent="center"
				alignItems="center"
				background="#f4f4f4"
				padding=" 25px 15px"
				direction="column"
			>
				<Box width={isLargerThan1000px ? "50%" : "100%"}>
					<FormExperience
						value={value}
						setValue={setValue}
						habilitys={habilitys}
						setHabilitys={setHabilitys}
						setArrayHabilitys={setArrayHabilitys}
						arrayHabilitys={arrayHabilitys}
						description={value}
						setDescription={setValue}
						setSelect={setValue}
					/>
					<Btn
						type="button"
						justifyContent="end"
						alingItems="end"
						background={true}
						border={true}
						padding={true}
						setOnClick={() => handleAddForm(setSecondExperience)}
					>
						Registrar Nova Experiência
					</Btn>
				</Box>
				{secondExperience && (
					<Box width={isLargerThan1000px ? "50%" : "100%"}>
						<FormExperience
							value={value}
							setValue={setValue}
							habilitys={habilitys}
							setHabilitys={setHabilitys}
							setArrayHabilitys={setArrayHabilitys}
							arrayHabilitys={arrayHabilitys}
							description={value}
							setDescription={setValue}
							setSelect={setValue}
						/>
						<Btn
							type="button"
							justifyContent="end"
							alingItems="end"
							background={true}
							border={true}
							padding={true}
							setOnClick={() => handleAddForm(setThirdExperience)}
						>
							Registrar Nova Experiência
						</Btn>
						<Btn
							type="button"
							setOnClick={() => handleRemoveForm(setSecondExperience)}
							border={false}
							justifyContent="start"
							alingItems="start"
						>
							<BsTrashFill />
						</Btn>
					</Box>
				)}
				{thirdExperience && (
					<Box width={isLargerThan1000px ? "50%" : "100%"}>
						<FormExperience
							value={value}
							setValue={setValue}
							habilitys={habilitys}
							setHabilitys={setHabilitys}
							setArrayHabilitys={setArrayHabilitys}
							arrayHabilitys={arrayHabilitys}
							description={value}
							setDescription={setValue}
							setSelect={setValue}
						/>
						<Btn
							type="button"
							justifyContent="end"
							alingItems="end"
							background={true}
							border={true}
							padding={true}
							disabled={true}
						>
							Registrar Nova Experiência
						</Btn>
						<Btn
							type="button"
							setOnClick={() => handleRemoveForm(setThirdExperience)}
							border={false}
							justifyContent="start"
							alingItems="start"
						>
							<BsTrashFill />
						</Btn>
					</Box>
				)}
				<Box margin="5rem">
					<Btn type="submit" border={true}>
						Salvar
					</Btn>
				</Box>
			</Flex>
		</section>
	);
};

export default Experience;
