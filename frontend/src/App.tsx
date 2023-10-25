import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBars/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import RegisterUser from "./pages/users/RegisterUser";
import LoginUser from "./pages/users/LoginUser";
import RegisterCompany from "./pages/company/RegisterCompany";
import LoginCompany from "./pages/company/LoginCompany";
import Job from "./pages/Job";
import SingleJob from "./pages/SingleJob";
import { UserAuthContext } from "./context/UserAuth";
import { useContext, useEffect } from "react";
import UserAuthenticatedNavBar from "./components/NavBars/UserAuthenticatedNavBar";
import HomeUser from "./pages/users/HomeUser";
import Experience from "./pages/users/Experience";
import { CompanyAuthContext } from "./context/companyAuth";
import CompanyAuthenticatedNavBar from "./components/NavBars/CompanyAuthenticatedNavBar";
import CreateJob from "./pages/company/CreateJob";
import ShowJobs from "./pages/company/ShowJobs";
import ShowCandidates from "./pages/company/ShowCandidates";
import SingleCandidate from "./pages/company/SingleCandidate";
import { Flex } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import ShowExperiences from "./pages/ShowExperience";

function App() {
	const { userAuthenticated, verifyUserToken, userIsLoading } =
		useContext(UserAuthContext);

	const { companyAuthenticated, verifyCompanyToken, companyIsLoading } =
		useContext(CompanyAuthContext);

	useEffect(() => {
		verifyCompanyToken();
		verifyUserToken();
	}, [
		companyAuthenticated,
		companyIsLoading,
		userAuthenticated,
		userIsLoading,
	]);

	return (
		<>
			{companyIsLoading ? (
				<Flex minHeight="85vh" alignItems="center" justifyContent="center">
					<Spinner boxSize="5rem" />
				</Flex>
			) : (
				<>
					{userAuthenticated ? (
						<UserAuthenticatedNavBar />
					) : companyAuthenticated ? (
						<CompanyAuthenticatedNavBar />
					) : (
						<NavBar />
					)}
					<Routes>
						<Route
							path="/"
							element={
								userAuthenticated ? (
									<Navigate to="/users" />
								) : companyAuthenticated ? (
									<Navigate to="/company/jobs" />
								) : (
									<Home />
								)
							}
						></Route>
						{/*Users Routes */}
						<Route
							path="/users"
							element={userAuthenticated ? <HomeUser /> : <Navigate to="/" />}
						/>
						<Route
							path="/users/register"
							element={
								userAuthenticated ? <Navigate to="/jobs" /> : <RegisterUser />
							}
						/>
						<Route
							path="/users/login"
							element={
								userAuthenticated ? <Navigate to="/jobs" /> : <LoginUser />
							}
						/>
						<Route
							path="/users/experience/create"
							element={userAuthenticated ? <Experience /> : <Navigate to="/" />}
						/>
						<Route
							path="/users/experience"
							element={
								userAuthenticated ? <ShowExperiences /> : <Navigate to="/" />
							}
						/>

						{/*Company Routes */}

						<Route
							path="/company/register"
							element={
								companyAuthenticated ? (
									<Navigate to="/jobs" />
								) : (
									<RegisterCompany />
								)
							}
						/>
						<Route
							path="/company/login"
							element={
								companyAuthenticated ? (
									<Navigate to="/jobs" />
								) : (
									<LoginCompany />
								)
							}
						/>
						<Route
							path="/company/create"
							element={
								companyAuthenticated ? <CreateJob /> : <Navigate to="/jobs" />
							}
						/>
						<Route
							path="/company/jobs"
							element={
								companyAuthenticated ? <ShowJobs /> : <Navigate to="/jobs" />
							}
						/>
						<Route
							path="/company/jobs/:id/candidates"
							element={
								companyAuthenticated ? (
									<ShowCandidates />
								) : (
									<Navigate to="/jobs" />
								)
							}
						/>
						<Route
							path="/company/jobs/:jobId/candidates/:userId"
							element={
								companyAuthenticated ? (
									<SingleCandidate />
								) : (
									<Navigate to="/jobs" />
								)
							}
						/>
						{/*Job Routes */}

						<Route
							path="/jobs?"
							element={
								companyAuthenticated ? <Navigate to="company/jobs" /> : <Job />
							}
						/>
						<Route
							path="/jobs/:id"
							element={
								companyAuthenticated ? (
									<Navigate to="company/jobs" />
								) : (
									<SingleJob />
								)
							}
						/>
						<Route path="*" element={<Navigate to="/" />} />
					</Routes>
				</>
			)}
			<Footer />
		</>
	);
}

export default App;
