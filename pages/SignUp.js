import Link from 'next/link';
import React,{useEffect, useState} from 'react'



import { useRouter } from 'next/router';

const Alert =()=>{
	return (
		<div
			class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
			role="alert"
		>
			<span class="font-medium">Success alert!</span> Change a few things up and
			try submitting again.
		</div>
	);
}
const SignUp = () => {
	const router=useRouter();
	const [UserData, setUserData] = useState({
		username:"",
		email:"",
		password:"",
	})
	const handleSubmit= async (e)=>{
		e.preventDefault();
		try {
			const response = await fetch(
				"https://glacial-woodland-47482.herokuapp.com/api/auth/local/register",
				{
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						username: UserData.username,
						email: UserData.email,
						password: UserData.password,
					}),
					method: "POST",
				}
			);
			alert("User Sucessful registerd")
			 setToken(response);
				router.push("/Login")
		} catch (error) {
			console.error(error);
		}
	}
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
						Flowbite
					</a>
					<div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-[#200b52] border-[#4e1280]">
						<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
								Create and account
							</h1>
							<form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
								<div>
									<label
										htmlFor="username"
										class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Your UserName
									</label>
									<input
										type="text"
										name="username"
										onChange={(e) => handleChange(e)}
										required
										id="email"
										class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="name@company.com"
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Your email
									</label>
									<input
										type="email"
										name="email"
										onChange={(e) => handleChange(e)}
										required
										id="email"
										class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="name@company.com"
									/>
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
									Create an account
								</button>
								<p class="text-sm font-light text-gray-500 dark:text-gray-400">
									Already have an account?{" "}
									<a class="font-medium text-primary-600 hover:underline dark:text-primary-500">
										<Link href="/Login">Login here</Link>
									</a>
								</p>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default SignUp
