import React from 'react'
import Image from "next/image";
import Avatar1 from "../styles/Images/avatar1.jpeg";
import Avatar2 from "../styles/Images/avatar2.jpeg";
import Avatar3 from "../styles/Images/avatar3.jpeg";

export const Testimonials = () => {
  return (
		<div>
			<div
				className="container my-24 px-6 margin-mobile  "
				data-aos="zoom-in-up"
			>
				{" "}
				<section class="mb-32 text-gray-800 text-center">
					<h2 class="text-3xl font-bold mb-12">What Our Clients Says</h2>

					<div
						id="carouselExampleCaptions"
						class="carousel slide relative carousel-dark"
						data-bs-ride="carousel"
					>
						<div class="carousel-inner relative w-full overflow-hidden">
							<div class="carousel-item active relative float-left w-full">
								<div class="">
									<Image
										style={{
											borderRadius: "9999px",
											marginLeft: "auto",
											marginRight: "auto",
										}}
										src={Avatar1}
										alt="avatar"
										width={150}
										height={150}
									/>
								</div>
								<div class="flex flex-wrap justify-center">
									<div class="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
										<h5 class="text-lg font-bold mb-3">Hassan Tariq</h5>

										<p class="text-gray-500 mb-6">
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="quote-left"
												class="w-6 pr-2 inline-block"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
											>
												<path
													fill="currentColor"
													d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
												></path>
											</svg>
											I think this is a fantastic farm in our area, with
											excellent work being done.
										</p>
										<ul class="flex justify-center mb-0">
											<li>
												<svg
													aria-hidden="true"
													focusable="false"
													data-prefix="fas"
													data-icon="star"
													class="w-4 text-yellow-500"
													role="img"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 576 512"
												>
													<path
														fill="currentColor"
														d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
													></path>
												</svg>
											</li>
											<li>
												<svg
													aria-hidden="true"
													focusable="false"
													data-prefix="fas"
													data-icon="star"
													class="w-4 text-yellow-500"
													role="img"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 576 512"
												>
													<path
														fill="currentColor"
														d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
													></path>
												</svg>
											</li>
											<li>
												<svg
													aria-hidden="true"
													focusable="false"
													data-prefix="fas"
													data-icon="star"
													class="w-4 text-yellow-500"
													role="img"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 576 512"
												>
													<path
														fill="currentColor"
														d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
													></path>
												</svg>
											</li>
											<li>
												<svg
													aria-hidden="true"
													focusable="false"
													data-prefix="fas"
													data-icon="star"
													class="w-4 text-yellow-500"
													role="img"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 576 512"
												>
													<path
														fill="currentColor"
														d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
													></path>
												</svg>
											</li>
											<li>
												<svg
													aria-hidden="true"
													focusable="false"
													data-prefix="far"
													data-icon="star"
													class="w-4 text-yellow-500"
													role="img"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 576 512"
												>
													<path
														fill="currentColor"
														d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
													></path>
												</svg>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="carousel-item relative float-left w-full">
								<Image
									style={{
										borderRadius: "9999px",
										marginLeft: "auto",
										marginRight: "auto",
									}}
									src={Avatar2}
									alt="avatar"
									width={150}
									height={150}
								/>
								<div class="flex flex-wrap justify-center">
									<div class="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
										<h5 class="text-lg font-bold mb-3">Mujeeb Khan</h5>

										<p class="text-gray-500 mb-6">
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="quote-left"
												class="w-6 pr-2 inline-block"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
											>
												<path
													fill="currentColor"
													d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
												></path>
											</svg>
											Excellent service, good quality and amount of oranges.
										</p>
										<ul class="flex justify-center mb-0">
											<li>
												<svg
													aria-hidden="true"
													focusable="false"
													data-prefix="fas"
													data-icon="star"
													class="w-4 text-yellow-500"
													role="img"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 576 512"
												>
													<path
														fill="currentColor"
														d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
													></path>
												</svg>
											</li>
											<li>
												<svg
													aria-hidden="true"
													focusable="false"
													data-prefix="fas"
													data-icon="star"
													class="w-4 text-yellow-500"
													role="img"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 576 512"
												>
													<path
														fill="currentColor"
														d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
													></path>
												</svg>
											</li>
											<li>
												<svg
													aria-hidden="true"
													focusable="false"
													data-prefix="fas"
													data-icon="star"
													class="w-4 text-yellow-500"
													role="img"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 576 512"
												>
													<path
														fill="currentColor"
														d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
													></path>
												</svg>
											</li>
											<li>
												<svg
													aria-hidden="true"
													focusable="false"
													data-prefix="fas"
													data-icon="star"
													class="w-4 text-yellow-500"
													role="img"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 576 512"
												>
													<path
														fill="currentColor"
														d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
													></path>
												</svg>
											</li>
											<li>
												<svg
													aria-hidden="true"
													focusable="false"
													data-prefix="fas"
													data-icon="star-half-alt"
													class="w-4 text-yellow-500"
													role="img"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 536 512"
												>
													<path
														fill="currentColor"
														d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"
													></path>
												</svg>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="carousel-item relative float-left w-full">
								<Image
									style={{
										borderRadius: "9999px",
										marginLeft: "auto",
										marginRight: "auto",
									}}
									src={Avatar3}
									alt="avatar"
									width={150}
									height={150}
								/>
								<div class="flex flex-wrap justify-center">
									<div class="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
										<h5 class="text-lg font-bold mb-3">Shoaib Khan</h5>

										<p class="text-gray-500 mb-6">
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="quote-left"
												class="w-6 pr-2 inline-block"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
											>
												<path
													fill="currentColor"
													d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
												></path>
											</svg>
											They are delivering this excellent product to peoples
											homes.
										</p>
										<ul class="flex justify-center mb-0">
											<li>
												<svg
													aria-hidden="true"
													focusable="false"
													data-prefix="fas"
													data-icon="star"
													class="w-4 text-yellow-500"
													role="img"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 576 512"
												>
													<path
														fill="currentColor"
														d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
													></path>
												</svg>
											</li>
											<li>
												<svg
													aria-hidden="true"
													focusable="false"
													data-prefix="fas"
													data-icon="star"
													class="w-4 text-yellow-500"
													role="img"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 576 512"
												>
													<path
														fill="currentColor"
														d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
													></path>
												</svg>
											</li>
											<li>
												<svg
													aria-hidden="true"
													focusable="false"
													data-prefix="fas"
													data-icon="star"
													class="w-4 text-yellow-500"
													role="img"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 576 512"
												>
													<path
														fill="currentColor"
														d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
													></path>
												</svg>
											</li>
											<li>
												<svg
													aria-hidden="true"
													focusable="false"
													data-prefix="fas"
													data-icon="star"
													class="w-4 text-yellow-500"
													role="img"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 576 512"
												>
													<path
														fill="currentColor"
														d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
													></path>
												</svg>
											</li>
											<li>
												<svg
													aria-hidden="true"
													focusable="false"
													data-prefix="fas"
													data-icon="star"
													class="w-4 text-yellow-500"
													role="img"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 576 512"
												>
													<path
														fill="currentColor"
														d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
													></path>
												</svg>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<button
							class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide="prev"
						>
							<span
								class="carousel-control-prev-icon inline-block bg-no-repeat"
								aria-hidden="true"
							></span>
							<span class="visually-hidden">Previous</span>
						</button>
						<button
							class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide="next"
						>
							<span
								class="carousel-control-next-icon inline-block bg-no-repeat"
								aria-hidden="true"
							></span>
							<span class="visually-hidden">Next</span>
						</button>
					</div>
				</section>
			</div>
		</div>
	);
}
