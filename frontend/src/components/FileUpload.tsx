import React, { useState } from "react";
import {
	FormControl,
	FormLabel,
	Input,
	FormHelperText,
	Box,
	useMediaQuery,
} from "@chakra-ui/react";

interface Props {
	onFileSelect: (file: File | null) => void; // Função de retorno de chamada que leva um arquivo como argumento
}

const FileUpload: React.FC<Props> = ({ onFileSelect }) => {
	const [isLargerThan800px] = useMediaQuery("(min-width: 800px)");
	const [invalidFile, setInvalidFile] = useState<boolean>(false);

	const allowedExtensions = ["jpg", "jpeg", "png"];

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFiles = Array.from(event.target.files || []);

		const isValidFileType = selectedFiles.every((file) =>
			isFileTypeValid(file, allowedExtensions)
		);

		setInvalidFile(!isValidFileType);

		if (isValidFileType) {
			setInvalidFile(false);
			// Chame a função de retorno de chamada com o arquivo selecionado
			onFileSelect(selectedFiles[0]);
		} else {
			event.target.value = "";
			// Chame a função de retorno de chamada com null para indicar que nenhum arquivo foi selecionado
			onFileSelect(null);
		}
	};

	const isFileTypeValid = (file: File, allowedExtensions: string[]) => {
		const extension = file.name.split(".").pop()?.toLowerCase();
		return allowedExtensions.includes(extension || "");
	};

	return (
		<Box margin="2rem">
			<FormControl>
				<FormLabel fontSize={isLargerThan800px ? "2rem" : "1.5rem"}>
					Logo da sua empresa (Opcional)
				</FormLabel>
				<Input
					border="1px solid #000"
					type="file"
					multiple
					accept=".jpg, .jpeg, .png"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						handleFileChange(e)
					}
					sx={{
						"::file-selector-button": {
							height: 10,
							padding: 0,
							mr: 5,
							background: "none",
							fontWeight: "bold",
							border: "none",
							fontSize: "1rem",
						},
					}}
				/>
				<FormHelperText
					fontSize={isLargerThan800px ? "1.2rem" : "1rem"}
					color={invalidFile ? "#FF0000" : undefined}
				>
					Por favor, selecione apenas arquivos de imagem (JPG, JPEG, PNG).
				</FormHelperText>
			</FormControl>
		</Box>
	);
};

export default FileUpload;
