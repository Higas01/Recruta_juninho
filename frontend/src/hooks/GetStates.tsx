import { Dispatch, SetStateAction } from "react";
import { State } from "../interface/IState";

export default async function getStates(
	setArrayStates: Dispatch<SetStateAction<State[]>>
) {
	const response = await fetch(
		"https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
	);

	const data = await response.json();
	setArrayStates(data);
}
