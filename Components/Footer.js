import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
		<div>
			<footer class="body-font bg-blue-900  ">
				<div class="container px-5 py-24 mx-auto ">
					<div class="flex flex-wrap md:text-left justify-between text-center -mb-10 -mx-4">
						<div class="lg:w-1/4 md:w-1/2 w-full px-4">
							<h3 class="title-font font-bold text-[32px] text-yellow-600 tracking-widest text-sm mb-3">
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
							<h2 class="title-font font-medium text-yellow-400 tracking-widest text-sm mb-3">
								Important Link
							</h2>
							<nav class="list-none mb-10 leading-[3rem]">
								<li>
									<a class="text-white hover:text-yellow-400">
										<Link href="/">Home</Link>
									</a>
								</li>
								<li>
									<a class="text-white hover:text-yellow-400">
										<Link href="/About">About</Link>
									</a>
								</li>
								<li>
									<a class="text-white hover:text-yellow-400">
										<Link href="/Contactus">Contact</Link>
									</a>
								</li>
								<li>
									<a class="text-white hover:text-yellow-400">
										<Link href="/Login">Login</Link>
									</a>
								</li>
								<li>
									<a class="text-white hover:text-yellow-400">
										<Link href="/SignUp">Signup</Link>
									</a>
								</li>
							</nav>
						</div>
						<div class="lg:w-1/5 md:w-1/2 w-full px-4">
							<h2 class="title-font font-medium  text-yellow-400 tracking-widest text-sm mb-3">
								CATEGORIES
							</h2>
							<nav class="list-none mb-10 text-center leading-[3rem]">
								<li className="text-white">
									<a class="text-white hover:text-yellow-400">
										<Link href="/AirCooler">AIR CON & AirCooler</Link>
									</a>
								</li>
								<li>
									<a class="text-white hover:text-yellow-400">
										<Link href="/Freezer">REFRIGERATOR & FREEZERS</Link>
									</a>
								</li>
								<li>
									<a class="text-white hover:text-yellow-400">
										<Link href="/LEDSystem">LED TV & SOUND SYSTEM</Link>
									</a>
								</li>
								<li>
									<a class="text-white hover:text-yellow-400">
										<Link href="/HomeApp">HOME APPLIANCES</Link>
									</a>
								</li>
								<li>
									<a class="text-white t hover:text-yellow-400">
										<Link href="/Kitchen">BUILT-IN KITCHEN</Link>
									</a>
								</li>
								<li>
									<a class="text-white hover:text-yellow-400">
										<Link href="/Washing">WASHING SOLUTIONS</Link>
									</a>
								</li>
							</nav>
						</div>

						<div class="lg:w-1/5 md:w-1/2 w-full px-4">
							<h2 class="title-font font-medium text-yellow-400 tracking-widest text-sm mb-3">
								Social Links
							</h2>
							<nav class="list-none mb-10 leading-[3rem]">
								<li>
									<a class="text-yellow-400 hover:text-yellow-400">FaceBook</a>
								</li>
								<li>
									<a class="text-yellow-400 hover:text-yellow-400">Instagram</a>
								</li>
							</nav>
						</div>
					</div>
				</div>

				<div class="bg-white">
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