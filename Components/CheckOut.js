import Link from 'next/link';
import React from 'react'

const CheckOut = () => {
  return (
		<div>
			<div class="h-screen grid grid-cols-3">
				<div class="lg:col-span-2 col-span-3 bg-indigo-50 space-y-8 px-12">
					<div class="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
						<div class="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
							<div class="text-yellow-500">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-6 sm:w-5 h-6 sm:h-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<div class="text-sm font-medium ml-3">Checkout</div>
						</div>
						<div class="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">
							Complete your shipping and payment details below.
						</div>
						<div class="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
							<svg
								class="w-4 h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								></path>
							</svg>
						</div>
					</div>
					<div class="rounded-md">
						<form id="payment-form" method="POST" action="">
							<section>
								<h2 class="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
									Shipping & Billing Information
								</h2>
								<fieldset class="mb-3 bg-white shadow-lg rounded text-gray-600">
									<label class="flex border-b border-gray-200 h-12 py-3 items-center">
										<span class="text-right px-2">Name</span>
										<input
											name="name"
											class="focus:outline-none px-3"
											placeholder="Try Odinsson"
											required=""
										/>
									</label>
									<label class="flex border-b border-gray-200 h-12 py-3 items-center">
										<span class="text-right px-2">Email</span>
										<input
											name="email"
											type="email"
											class="focus:outline-none px-3"
											placeholder="try@example.com"
											required=""
										/>
									</label>
									<label class="flex border-b border-gray-200 h-12 py-3 items-center">
										<span class="text-right px-2">Address</span>
										<input
											name="address"
											class="focus:outline-none px-3"
											placeholder="10 Street XYZ 654"
										/>
									</label>
									<label class="flex border-b border-gray-200 h-12 py-3 items-center">
										<span class="text-right px-2">City</span>
										<input
											name="city"
											class="focus:outline-none px-3"
											placeholder="San Francisco"
										/>
									</label>
									<label class="inline-flex w-2/4 border-gray-200 py-3">
										<span class="text-right px-2">State</span>
										<input
											name="state"
											class="focus:outline-none px-3"
											placeholder="CA"
										/>
									</label>
									<label class="xl:w-1/4 xl:inline-flex py-3 items-center flex xl:border-none border-t border-gray-200 py-3">
										<span class="text-right px-2 xl:px-0 xl:text-none">
											ZIP
										</span>
										<input
											name="postal_code"
											class="focus:outline-none px-3"
											placeholder="98603"
										/>
									</label>
									<label class="flex border-t border-gray-200 h-12 py-3 items-center select relative">
										<span class="text-right px-2">Country</span>
										<div
											id="country"
											class="focus:outline-none px-3 w-full flex items-center"
										>
											<select
												name="country"
												class="border-none bg-transparent flex-1 cursor-pointer appearance-none focus:outline-none"
											>
												<option value="AU">Australia</option>
												<option value="BE">Belgium</option>
												<option value="BR">Brazil</option>
												<option value="CA">Canada</option>
												<option value="CN">China</option>
												<option value="DK">Denmark</option>
												<option value="FI">Finland</option>
												<option value="FR">France</option>
												<option value="DE">Germany</option>
												<option value="HK">Hong Kong</option>
												<option value="IE">Ireland</option>
												<option value="IT">Italy</option>
												<option value="JP">Japan</option>
												<option value="LU">Luxembourg</option>
												<option value="MX">Mexico</option>
												<option value="NL">Netherlands</option>
												<option value="PL">Poland</option>
												<option value="PT">Portugal</option>
												<option value="SG">Singapore</option>
												<option value="ES">Spain</option>
												<option value="TN">Tunisia</option>
												<option value="GB">United Kingdom</option>
												<option value="US" selected="selected">
													United States
												</option>
											</select>
										</div>
									</label>
								</fieldset>
							</section>
						</form>
					</div>
					<div class="rounded-md">
						<section>
							<h2 class="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
								Payment Information
							</h2>
							<fieldset class="mb-3 bg-white shadow-lg rounded text-gray-600">
								<label class="flex border-b border-gray-200 h-12 py-3 items-center">
									<span class="text-right px-2">Card</span>
									<input
										name="card"
										class="focus:outline-none px-3 w-full"
										placeholder="Card number MM/YY CVC"
										required=""
									/>
								</label>
								<label class="flex border-b border-gray-200 h-12 py-3 items-center">
									<span class="text-right px-2">Cash on Deliver (COD)</span>
									<input
										id="remember"
										aria-describedby="remember"
										type="checkbox"
										class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
										required=""
									/>
								</label>
							</fieldset>
						</section>
					</div>
					<Link href="/ThankYou">
						<button class="submit-button px-4 py-3 rounded-full bg-[#9e7098]  text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
							Pay €846.98
						</button>
					</Link>
				</div>
				<div class="col-span-1 bg-white lg:block hidden">
					<h1 class="py-6 border-b-2 text-xl text-gray-600 px-8">
						Order Summary
					</h1>
					<ul class="py-6 border-b space-y-6 px-8">
						<li class="grid grid-cols-6 gap-2 border-b-1">
							<div class="col-span-1 self-center">
								<img
									src="https://bit.ly/3oW8yej"
									alt="Product"
									class="rounded w-full"
								/>
							</div>
							<div class="flex flex-col col-span-3 pt-2">
								<span class="text-gray-600 text-md font-semi-bold">
									Studio 2 Headphone
								</span>
								<span class="text-gray-400 text-sm inline-block pt-2">
									Red Headphone
								</span>
							</div>
							<div class="col-span-2 pt-3">
								<div class="flex items-center space-x-2 text-sm justify-between">
									<span class="text-gray-400">2 x €30.99</span>
									<span class="text-[#ffae42] font-semibold inline-block">
										€61.98
									</span>
								</div>
							</div>
						</li>
						<li class="grid grid-cols-6 gap-2 border-b-1">
							<div class="col-span-1 self-center">
								<img
									src="https://bit.ly/3lCyoSx"
									alt="Product"
									class="rounded w-full"
								/>
							</div>
							<div class="flex flex-col col-span-3 pt-2">
								<span class="text-gray-600 text-md font-semi-bold">
									Apple iPhone 13
								</span>
								<span class="text-gray-400 text-sm inline-block pt-2">
									Phone
								</span>
							</div>
							<div class="col-span-2 pt-3">
								<div class="flex items-center space-x-2 text-sm justify-between">
									<span class="text-gray-400">1 x €785</span>
									<span class="text-[#ffae42] font-semibold inline-block">
										€785
									</span>
								</div>
							</div>
						</li>
					</ul>
					<div class="px-8 border-b">
						<div class="flex justify-between py-4 text-gray-600">
							<span>Subtotal</span>
							<span class="font-semibold text-[#ffae42]">€846.98</span>
						</div>
						<div class="flex justify-between py-4 text-gray-600">
							<span>Shipping</span>
							<span class="font-semibold text-[#ffae42]">Free</span>
						</div>
					</div>
					<div class="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
						<span>Total</span>
						<span>€846.98</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CheckOut