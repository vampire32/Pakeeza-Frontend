import React,{useState,useEffect} from 'react'
import axios from "axios";
import Router, { useRouter } from "next/router";


const Admin = () => {
	
	const router = useRouter();
	const [UserData, setUserData] = useState({
		username: "",
		email: "",
		password: "",
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		axios
			.post(
				"https://pakeeza-backend-railway-production.up.railway.app/api/auth/local",
				{
					identifier: "admin@pakeeza.com",
					password: UserData.password,
				}
			)
			.then((response) => {
				// Handle success.
				
				
				
					router.push("/AdminPage");
					localStorage.setItem("admin","admin@pakeeza.com")
				
			})
			.catch((error) => {
				// Handle error.
				alert(error);
				console.log("An error occurred:", error.response);
			});
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserData({ ...UserData, [name]: value });
	};
  return (
		<div>
			<section class="bg-image">
				<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<a
						href="#"
						class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
					>
						<img
							class="w-8 h-8 mr-2"
							src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
							alt="logo"
						/>
						Pakeeza Electronics
					</a>
					<div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-[#200b52] border-[#4e1280]">
						<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
								Sign in to your account
							</h1>
							<form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
								<div>
									<label
										htmlFor="email"
										class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										username
									</label>
									<span className='text-white text-[22px]'> Admin</span>
									
								</div>
								<div>
									<label
										htmlFor="password"
										class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Password
									</label>
									<input
										type="password"
										name="password"
										onChange={(e) => handleChange(e)}
										required
										id="password"
										placeholder="••••••••"
										class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									/>
								</div>

								<button
									type="submit"
									class="w-full text-white  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#9e7098] dark:hover:bg-primary-700 dark:focus:ring-primary-800"
								>
									Sign in
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Admin
