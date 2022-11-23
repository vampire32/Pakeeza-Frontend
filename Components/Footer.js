import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
		<div>
			<footer class="body-font bg-red-500  ">
				<div class="container px-5 py-24 mx-auto ">
					<div class="flex flex-wrap md:text-left justify-between text-center -mb-10 -mx-4">
						<div class="lg:w-1/4 md:w-1/2 w-full px-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								class="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
								viewBox="0 0 24 24"
							>
								<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
							</svg>
							<h3 class="title-font font-bold text-[32px] text-black tracking-widest text-sm mb-3">
								Pakeeza Electronics
							</h3>
							<p className="text-justify text-white">
								Culpa aliquip amet labore ut. Labore duis ullamco eu ex sunt
								mollit do amet commodo irure eiusmod ex. Qui nulla tempor
								proident minim aliquip magna ut elit ullamco qui dolore
								consequat non eiusmod. Est minim laboris laboris cupidatat culpa
								ut.
							</p>
						</div>

						<div class="lg:w-1/6 md:w-1/2 w-full px-4">
							<h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
								Important Link
							</h2>
							<nav class="list-none mb-10 leading-[3rem]">
								<li>
									<a class="text-white hover:text-white">
										<Link href="/">Home</Link>
									</a>
								</li>
								<li>
									<a class="text-white hover:text-white">
										<Link href="/About">About</Link>
									</a>
								</li>
								<li>
									<a class="text-white hover:text-white">
										<Link href="/Contactus">Contact</Link>
									</a>
								</li>
								<li>
									<a class="text-white hover:text-white">
										<Link href="/Login">Login</Link>
									</a>
								</li>
								<li>
									<a class="text-white hover:text-white">
										<Link href="/SignUp">Signup</Link>
									</a>
								</li>
							</nav>
						</div>
						<div class="lg:w-1/5 md:w-1/2 w-full px-4">
							<h2 class="title-font font-medium  text-white tracking-widest text-sm mb-3">
								CATEGORIES
							</h2>
							<nav class="list-none mb-10 text-justify leading-[3rem]">
								<li>
									<a class="text-white hover:text-white">
										<Link href="/AirCooler">AIR CON & AirCooler</Link>
									</a>
								</li>
								<li>
									<a class="text-white hover:text-white">
										<Link href="/Freezer">REFRIGERATOR & FREEZERS</Link>
									</a>
								</li>
								<li>
									<a class="text-white hover:text-white">
										<Link href="/LEDSystem">LED TV & SOUND SYSTEM</Link>
									</a>
								</li>
								<li>
									<a class="text-white hover:text-white">
										<Link href="/HomeApp">HOME APPLIANCES</Link>
									</a>
								</li>
								<li>
									<a class="text-white hover:text-white">
										<Link href="/Kitchen">BUILT-IN KITCHEN</Link>
									</a>
								</li>
								<li>
									<a class="text-white hover:text-white">
										<Link href="/Washing">WASHING SOLUTIONS</Link>
									</a>
								</li>
							</nav>
						</div>
						<div class="lg:w-1/5 md:w-1/2 w-full px-4">
							<h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
								Social Links
							</h2>
							<nav class="list-none mb-10 leading-[3rem]">
								<li>
									<a class="text-white hover:text-white">FaceBook</a>
								</li>
								<li>
									<a class="text-white hover:text-white">Instagram</a>
								</li>
							</nav>
						</div>
						<div class="lg:w-1/4 md:w-1/2 w-full px-4 linear-color ">
							<div class="">
								<div class="container px-5 py-8 flex flex-wrap justify-center mx-auto items-center">
									<div class="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
										<div class="relative sm:w-64 w-40 sm:mr-4 leading-[5rem] mr-2">
											<label
												for="footer-field"
												class="leading-9 text-sm text-[20px] tracking-wide text-yellow-600 "
											>
												Get 25% Discount on your First Purchasing
											</label>
											<label
												for="footer-field"
												class="leading-9 text-sm text-[35px] tracking-wide  text-white"
											>
												Signup For to Our newsletters
											</label>
											<input
												type="text"
												id="footer-field"
												name="footer-field"
												class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-red-200 focus:border-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
											/>
										</div>
										<button class="inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none m-auto  rounded">
											SignUp
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="bg-red-100">
					<div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
						<p class="text-gray-500 text-sm text-center sm:text-left">
							<a
								href="https://twitter.com/knyttneve"
								class="text-black ml-1"
								target="_blank"
								rel="noopener noreferrer"
							>
								2022 © Copyrights All Rights Reserved | Pakeeza Electronics |
							</a>
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer