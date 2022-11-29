import Link from "next/link";

import { FaLuggageCart } from "react-icons/fa";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Cart from "./Cart";
import Image from "next/image";
import { VscLocation } from "react-icons/vsc";
import Script from "next/script";

const NavBar = ({ Carts, addToCart, RemoveFromcart, clearCart, SubTotal }) => {
	const [cart, setcart] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<Transition.Root show={cart} as={Fragment}>
				<Dialog as="div" className="relative z-10 mr-20" onClose={setcart}>
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
										<div className="flex h-full flex-col overflow-y-scroll bg-[#200b52] shadow-xl">
											<div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
												<div className="flex items-start justify-between">
													<Dialog.Title className="text-lg font-medium text-white">
														Shopping cart
													</Dialog.Title>
													<div className="ml-3 flex h-7 items-center">
														<button
															type="button"
															className="-m-2 p-2 text-blackhover:text-gray-500"
															onClick={() => setcart(false)}
														>
															<span className="sr-only">Close panel</span>
															<XMarkIcon
																className="h-6 w-6"
																aria-hidden="true"
																color="#ffff"
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
																			<img
																				src={Carts[k].img}
																				alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
																				class="h-full w-full object-cover object-center"
																			/>
																		</div>
																		<div className="ml-4 flex flex-1 flex-col">
																			<div>
																				<div className="flex justify-between text-base font-medium text-white">
																					<h3>
																						<a>{Carts[k].name}</a>
																					</h3>
																					<h3>
																						<a>{Carts[k].id}</a>
																					</h3>
																					<p className="ml-4">
																						{Carts[k].price}
																					</p>
																				</div>
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
												<div className="flex justify-between text-base font-medium text-white">
													<p>Subtotal</p>
													<p>${SubTotal}</p>
													{console.log(SubTotal)}
												</div>
												<p className="mt-0.5 text-sm text-white">
													Shipping and taxes calculated at checkout.
												</p>
												<div className="mt-6 flex justify-evenly">
													<a className="flex items-center justify-center rounded-md border border-transparent bg-[#ffae42]  px-6 py-3 text-base font-medium text-blackshadow-sm hover:bg-[#ffae42] ">
														<Link href="/CheckoutPage">Checkout</Link>
													</a>
													<button
														onClick={clearCart}
														className="flex items-center justify-center rounded-md border border-transparent bg-[#ffae42]  px-6 py-3 text-base font-medium text-blackshadow-sm hover:bg-[#ffae42] "
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
			<nav class="bg-white">
				<div class="">
					<div class=" flex h-16 items-center ">
						<div class=" inset-y-0 left-0 flex items-center sm:hidden">
							<button
								type="button"
								class="inline-flex items-center justify-center rounded-md p-2 text-gray-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
								onClick={() => setIsOpen(true)}
							>
								<span class="sr-only">Open main menu</span>

								<svg
									class="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								</svg>

								<svg
									class="hidden h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<div class="flex  items-center  sm:items-stretch pt-[5rem]">
							<div class="hidden sm:ml-6 sm:block">
								<div class="flex space-x-4 ml-44 ">
									<a class=" text-black  rounded-md text-[22px] font-medium">
										<Link href="/">Home</Link>
									</a>

									<a class="text-black   rounded-md text-[22px] font-medium">
										<Link href="/About">About</Link>
									</a>

									<li class="nav-item dropdown list-none">
										<a
											class="text-black   rounded-md text-[22px] font-medium"
											id="navbarDropdown"
											role="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											Products
										</a>
										<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
											<li>
												<a class="dropdown-item ">
													<Link href="/AirCooler">AIR CON & AirCooler</Link>
												</a>
											</li>
											<li>
												<hr class="dropdown-divider" />
											</li>
											<li>
												<a class="dropdown-item">
													<Link href="/Freezer">REFRIGERATOR & FREEZERS</Link>
												</a>
											</li>
											<li>
												<hr class="dropdown-divider" />
											</li>
											<li>
												<a class="dropdown-item">
													<Link href="/LEDSystem">LED TV & SOUND SYSTEM</Link>
												</a>
											</li>
											<li>
												<hr class="dropdown-divider" />
											</li>
											<li>
												<a class="dropdown-item">
													<Link href="/HomeApp">HOME APPLIANCES</Link>
												</a>
											</li>
											<li>
												<hr class="dropdown-divider" />
											</li>
											<li>
												<a class="dropdown-item">
													<Link href="/Kitchen">BUILT-IN KITCHEN</Link>
												</a>
											</li>
											<li>
												<hr class="dropdown-divider" />
											</li>
											<li>
												<a class="dropdown-item">
													<Link href="/Washing">WASHING SOLUTIONS</Link>
												</a>
											</li>
										</ul>
									</li>

									<a class="text-black   rounded-md text-[22px] font-medium">
										<Link href="/Contactus">Contact</Link>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-end hide mr-5">
						<a
							style={{ backgroundColor: "rgb(46, 34, 156)" }}
							class="hide lg:inline-block py-2 px-6  hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
						>
							<Link href="/Login">Login</Link>
						</a>
						<button className=" hide ml-5" onClick={() => setcart(true)}>
							<FaLuggageCart size={30} color="#ffae42" />
						</button>
					</div>
				</div>
			</nav>

			<Transition.Root show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10 mr-20" onClose={setIsOpen}>
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
										<div className="flex h-full flex-col overflow-y-scroll bg-[#200b52] shadow-xl">
											<div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
												<div className="flex items-start justify-between">
													<div className="ml-3 flex h-7 items-center">
														<button
															type="button"
															className="-m-2 p-2 text-blackhover:text-gray-500"
															onClick={() => setIsOpen(false)}
														>
															<span className="sr-only">Close panel</span>
															<XMarkIcon
																className="h-6 w-6"
																aria-hidden="true"
																color="#ffff"
															/>
														</button>
													</div>
												</div>

												<div className="mt-8 text-center">
													<div class="space-y-1 px-2 pt-2 pb-3">
														<a class=" text-white block px-3 py-2 rounded-md text-base font-medium">
															<Link href="/">Home</Link>
														</a>

														<a class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
															<Link href="/About">About</Link>
														</a>

														<li class="nav-item dropdown list-none">
															<a
																class="text-white  rounded-md text-sm font-medium"
																id="navbarDropdown"
																role="button"
																data-bs-toggle="dropdown"
																aria-expanded="false"
															>
																Products
															</a>
															<ul
																class="dropdown-menu"
																aria-labelledby="navbarDropdown"
															>
																<li>
																	<a class="dropdown-item ">
																		<Link href="/AirCooler">
																			AIR CON & AirCooler
																		</Link>
																	</a>
																</li>
																<li>
																	<hr class="dropdown-divider" />
																</li>
																<li>
																	<a class="dropdown-item">
																		<Link href="/Freezer">
																			REFRIGERATOR & FREEZERS
																		</Link>
																	</a>
																</li>
																<li>
																	<hr class="dropdown-divider" />
																</li>
																<li>
																	<a class="dropdown-item">
																		<Link href="/LEDSystem">
																			LED TV & SOUND SYSTEM
																		</Link>
																	</a>
																</li>
																<li>
																	<hr class="dropdown-divider" />
																</li>
																<li>
																	<a class="dropdown-item">
																		<Link href="/HomeApp">HOME APPLIANCES</Link>
																	</a>
																</li>
																<li>
																	<hr class="dropdown-divider" />
																</li>
																<li>
																	<a class="dropdown-item">
																		<Link href="/Kitchen">
																			BUILT-IN KITCHEN
																		</Link>
																	</a>
																</li>
																<li>
																	<hr class="dropdown-divider" />
																</li>
																<li>
																	<a class="dropdown-item">
																		<Link href="/Washing">
																			WASHING SOLUTIONS
																		</Link>
																	</a>
																</li>
															</ul>
														</li>

														<a class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
															<Link href="/Contactus">Contact</Link>
														</a>
														<a class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
															<Link href="/Login">Login</Link>
														</a>
														<div>
															<button onClick={() => setcart(true)}>
																<FaLuggageCart size={30} color="#ffff" />
															</button>
														</div>
													</div>
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
		</div>
	);
};

export default NavBar;
