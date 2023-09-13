import FirstSectionHome from "../components/Home/FirstSectionHome";
import SecondSectionHome from "../components/Home/SecondSectionHome";
import ThirdSectionHome from "../components/Home/ThirdSectionHome";

const Home = () => {
	return (
		<>
			<section>
				<FirstSectionHome />
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

export default Home;
