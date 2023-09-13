import { Dispatch, SetStateAction } from "react";
import { City } from "../interface/ICity";

export default async function getCitys(
	setArrayCitys: Dispatch<SetStateAction<City[]>>,
	state: string
) {
	const response = await fetch(
		`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`
	);

	const data = await response.json();
	setArrayCitys(data);
}
