import Link from "next/link";


import { FaLuggageCart } from "react-icons/fa";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Cart from "./Cart";
import Image from "next/image";
import {VscLocation} from "react-icons/vsc"




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
																			<img
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
														<Link href="/CheckoutPage">Checkout</Link>
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
			<nav class="navbar navbar-expand-lg navbar-light bg-[#ffff]">
				<div class="container-fluid">
					<button
						class="navbar-toggler "
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div
						class=" navbar-collapse justify-content-around"
						id="navbarSupportedContent"
					>
						<ul class="navbar-nav text-[20px]">
							<li class="nav-item">
								<a class="nav-link text-black " aria-current="page">
									<Link href="/">Home</Link>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link text-black">
									<Link href="/About">About</Link>
								</a>
							</li>
							<li class="nav-item dropdown">
								<a
									class="nav-link dropdown-toggle text-black"
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
							<li class="nav-item">
								<a class="nav-link text-black">
									<Link href="/Contactus">Contact</Link>
								</a>
							</li>
						</ul>
						<div class="d-flex ">
							<button className=" btn   cursor-pointer  text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
								<Link activeClass="Home" href="/Login">
									Login
								</Link>
							</button>
							<button
								className="cursor-pointer  text-yellow-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								onClick={() => setcart(true)}
							>
								<FaLuggageCart size={30} />
							</button>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
