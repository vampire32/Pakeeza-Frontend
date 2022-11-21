import Link from 'next/link';
import React,{useState,useEffect} from 'react'
import axios from "axios";
import Router, { useRouter } from "next/router";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import getConfig from 'next/config';
import { redirect } from 'next/dist/server/api-utils';
import UserProfile from '../Components/UserProfile';
import Cookies from "js-cookie";

const {publicRuntimeConfig}=getConfig();
	const Authorization=
			"9ad861e7d9919e881e8b92dfda4c896c1bac63a983dc0acc82727073cc2692d137929ebae6d3242d3a30f1988bc4b8d59faf909d74751f2d4a4f2ab6e4451fa6b1df48774c83cd3646a9a4fed0c45f2716ffd1fc18fd649ecdeea1107ec31a6762073d70cf6f0baa9e063ddd36cbe04bab635baed591742cba412e3ad64cf1ec";
	
const Login = () => {
	const router = useRouter();
	const [isLogged, setIsLogged] = useState(false);
	useEffect(() => {
    if(!localStorage.getItem('jwt')){
		router.push('/Login')
	}
	else if(localStorage.getItem('jwt')){
		router.push('/UserProfile')
	}
}, []);
	const [UserData, setUserData] = useState({
		username: "",
		email: "",
		password: "",
	});
	const [Alert, setAlert] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		axios
			.post("https://pakeeza-backend-railway-production.up.railway.app/api/auth/local", {
				identifier: UserData.email,
				password: UserData.password,
			})
			.then((response) => {
				// Handle success.
				console.log("Well done!");
				console.log("User profile", response.data.user);
				console.log("User token", response.data.jwt);
				localStorage.setItem("jwt", response.data.jwt);
				Cookies.set("jwt", response.data.jwt);
				Cookies.set("Email", UserData.email);
				localStorage.setItem("Email",UserData.email)
				

				setAlert(true);
				setTimeout(() => {
					router.push("/UserProfile");
				}, 1500);
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
			{Alert ? (
				<div
					class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
					role="alert"
				>
					<span class="font-medium">Success alert!</span> Change a few things up
					and try submitting again.
				</div>
			) : (
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
										Sign in
									</button>
									<p class="text-sm font-light text-gray-500 dark:text-gray-400">
										Don’t have an account yet?{" "}
										<a class="font-medium text-primary-600 hover:underline dark:text-primary-500">
											<Link href="/SignUp">Sign up</Link>
										</a>
									</p>
								</form>
							</div>
						</div>
					</div>
				</section>
			)}
		</div>
	);
}



export default Login
