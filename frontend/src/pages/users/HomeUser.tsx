import FirstSectionHomeUser from "../../components/Users/FirstSectionHomeUser";
import SecondSectionHome from "../../components/Home/SecondSectionHome";
import ThirdSectionHome from "../../components/Home/ThirdSectionHome";

const HomeUser = () => {
	return (
		<>
			<section>
				<FirstSectionHomeUser />
			</section>
			<section>
				<SecondSectionHome />
			</section>
			<section>
				<ThirdSectionHome />
			</section>
		</>
	);
};

export default HomeUser;
