import Link from "next/link";


import { FaLuggageCart } from "react-icons/fa";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Cart from "./Cart";
import Image from "next/image";




const NavBar = ({ Carts, addToCart, RemoveFromcart, clearCart, SubTotal }) => {
	
	const [cart, setcart] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<Transition.Root show={cart} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={setcart}>
					<Transition.Child
						as={Fragment}
						enter="ease-in-out duration-500"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in-out duration-500"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-hidden">
						<div className="absolute inset-0 overflow-hidden">
							<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
								<Transition.Child
									as={Fragment}
									enter="transform transition ease-in-out duration-500 sm:duration-700"
									enterFrom="translate-x-full"
									enterTo="translate-x-0"
									leave="transform transition ease-in-out duration-500 sm:duration-700"
									leaveFrom="translate-x-0"
									leaveTo="translate-x-full"
								>
									<Dialog.Panel className="pointer-events-auto w-screen max-w-md">
										<div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
											<div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
												<div className="flex items-start justify-between">
													<Dialog.Title className="text-lg font-medium text-gray-900">
														Shopping cart
													</Dialog.Title>
													<div className="ml-3 flex h-7 items-center">
														<button
															type="button"
															className="-m-2 p-2 text-gray-400 hover:text-gray-500"
															onClick={() => setcart(false)}
														>
															<span className="sr-only">Close panel</span>
															<XMarkIcon
																className="h-6 w-6"
																aria-hidden="true"
															/>
														</button>
													</div>
												</div>

												<div className="mt-8">
													<div className="flow-root">
														<ul
															role="list"
															className="-my-6 divide-y divide-gray-200"
														>
															{Object.keys(Carts).map((k) => {
																return (
																	<li key={k} className="flex py-6">
																		<div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
																			<Image
																				src={Carts[k].img}
																				alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
																				class="h-full w-full object-cover object-center"
																			/>
																		</div>
																		<div className="ml-4 flex flex-1 flex-col">
																			<div>
																				<div className="flex justify-between text-base font-medium text-gray-900">
																					<h3>
																						<a href="#">{Carts[k].name}</a>
																					</h3>
																					<h3>
																						<a href="#">{Carts[k].id}</a>
																					</h3>
																					<p className="ml-4">
																						{Carts[k].price}
																					</p>
																				</div>
																				<p className="mt-1 text-sm text-gray-500">
																					Blue
																				</p>
																			</div>
																			<div className="flex flex-1 items-end justify-between text-sm">
																				<p className="text-gray-500">
																					{Carts[k].qty}
																				</p>
																			</div>
																		</div>
																		
																	</li>
															
																);
															})}
														</ul>
													</div>
												</div>
											</div>

											<div className="border-t border-gray-200 py-6 px-4 sm:px-6">
												<div className="flex justify-between text-base font-medium text-gray-900">
													<p>Subtotal</p>
													<p>${SubTotal}</p>
													{console.log(SubTotal)}
												</div>
												<p className="mt-0.5 text-sm text-gray-500">
													Shipping and taxes calculated at checkout.
												</p>
												<div className="mt-6 flex justify-evenly">
													<a
														href="#"
														className="flex items-center justify-center rounded-md border border-transparent bg-[#9e7098]  px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#9e7098] "
													>
														Checkout
													</a>
													<button
														onClick={clearCart}
														className="flex items-center justify-center rounded-md border border-transparent bg-[#9e7098]  px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#9e7098] "
													>
														Clear Cart
													</button>
												</div>
												<div className="mt-6 flex justify-center text-center text-sm text-[#ffae42]">
													<p>
														or
														<button
															type="button"
															className="font-medium text-[#ffae42] hover:text-[#ffae42]"
															onClick={() => setcart(false)}
														>
															Continue Shopping
															<span aria-hidden="true"> &rarr;</span>
														</button>
													</p>
												</div>
											</div>
										</div>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
			<nav className=" shadow-sm  w-full z-10 navbar-design ">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center  mx-20  justify-evenly w-full">
							<div className="flex justify-center items-center flex-shrink-0 ">
								<span className=" font-bold text-xl cursor-pointer">
									Pakeeza<span className="text-[#ffae42]">Electronics</span>
								</span>
							</div>
							<div className="hidden res3 md:block">
								<div className=" ml-10 flex items-baseline space-x-4">
									<a className="cursor-pointer text-[#ffae42] font-semibold px-3 py-2 text-md hover:font-black">
										<Link activeClass="Home" href="/">
											Home
										</Link>
									</a>

									<a className="cursor-pointer text-[#ffae42] font-semibold px-3 py-2 text-md hover:font-black">
										<Link activeClass="Home" href="/About">
											About
										</Link>
									</a>
									<a className="cursor-pointer text-[#ffae42] font-semibold px-3 py-2 text-md hover:font-black">
										<Link activeClass="Home" href="/Services">
											Services
										</Link>
									</a>

									<a class="dropdown cursor-pointer text-[#ffae42] font-semibold px-3 py-2 text-md hover:font-black">
										<a
											class=" dropdown-toggle"
											id="navbarDropdown"
											role="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											Categories
										</a>
										<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
											<li>
												<Link href="/AirCooler">
													<a class="dropdown-item">AIR-CON & AIR COOLER</a>
												</Link>
											</li>
											<Link href="/Freezer">
												<a class="dropdown-item">REFRIGERATOR & FREEZERS</a>
											</Link>

											<Link href="/LEDSystem">
												<a class="dropdown-item">LED TV & SOUND SYSTEM</a>
											</Link>
											<Link href="/HomeApp">
												<a class="dropdown-item">HOME APPLIANCES</a>
											</Link>
											<Link href="/Kitchen">
												<a class="dropdown-item">BUILT-IN KITCHEN</a>
											</Link>
											<Link href="/Washing">
												<a class="dropdown-item">WASHING SOLUTIONS</a>
											</Link>
										</ul>
									</a>

									<a className=" text-[#ffae42] hover:text-[#ffae42]  font-semibold px-3 py-2 text-md hover:font-black">
										<Link activeClass="Home" href="/Contact">
											Contact
										</Link>
									</a>
								</div>
							</div>
						</div>
						<div className="flex res">
							<button className=" btn bg-[#200b52] hover:bg-[#ffae42] cursor-pointer text-[#ffae42] font-semibold px-3 py-2 text-md hover:font-black">
								<Link activeClass="Home" href="/Login">
									Login
								</Link>
							</button>
							<button
								className="cursor-pointer  text-[#ffae42] font-semibold px-3 py-2 text-md hover:font-black"
								onClick={() => setcart(true)}
							>
								<FaLuggageCart size={30} />
							</button>
						</div>
						<div className="mr-10 flex lg:hidden justify-end ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="lg:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-white px-2 pt-2 pb-[5rem] space-y-1 sm:px-3"
							>
								<a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
									<Link href="/">Home</Link>
								</a>
								<a class="dropdown cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
									<a
										class=" dropdown-toggle"
										id="navbarDropdown"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										Categories
									</a>
									<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
										<li>
											<Link href="/AirCooler">
												<a class="dropdown-item">AIR-CON & AIR COOLER</a>
											</Link>
										</li>
										<Link href="/Freezer">
											<a class="dropdown-item">REFRIGERATOR & FREEZERS</a>
										</Link>

										<Link href="/LEDSystem">
											<a class="dropdown-item">LED TV & SOUND SYSTEM</a>
										</Link>
										<Link href="/HomeApp">
											<a class="dropdown-item">HOME APPLIANCES</a>
										</Link>
										<Link href="/Kitchen">
											<a class="dropdown-item">BUILT-IN KITCHEN</a>
										</Link>
										<Link href="/Washing">
											<a class="dropdown-item">WASHING SOLUTIONS</a>
										</Link>
									</ul>
								</a>

								<a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
									<Link href="/home">About</Link>
								</a>

								<a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
									<Link href="/home">Services</Link>
								</a>

								<a className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
									<Link href="/home">Contact</Link>
								</a>
								<button className=" btn bg-[#200b52] hover:bg-[#ffae42] cursor-pointer  text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium">
									<Link activeClass="Home" href="/Login">
										Login
									</Link>
								</button>
								<button
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
									onClick={() => setcart(true)}
								>
									<FaLuggageCart size={30} />
								</button>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
};

export default NavBar;
