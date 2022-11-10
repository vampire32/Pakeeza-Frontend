import React from 'react'
import b1 from "../styles/Images/brand-1.png";
import b2 from "../styles/Images/brand-2.png";
import b3 from "../styles/Images/brand-3.png";
import b4 from "../styles/Images/brand-4.png";
import b5 from "../styles/Images/brand-5.png";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const Brands = () => {
  return (
		<div>
			<section class="bg-light py-5 mt-10">
				<div class="container my-4">
					<div class="row text-center py-3">
						<div class="col-lg-6 m-auto">
							<h1 class="h1">Our Brands</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod Lorem ipsum dolor sit amet.
							</p>
						</div>
						<div class="col-lg-9 m-auto tempaltemo-carousel">
							<div class="row d-flex flex-row">
								<div class="col-1 align-self-center">
									<a
										class="h1"
										href="#templatemo-slide-brand"
										role="button"
										data-bs-slide="prev"
									>
										<FaChevronLeft />
									</a>
								</div>

								<div class="col">
									<div
										class="carousel slide carousel-multi-item pt-2 pt-md-0"
										id="templatemo-slide-brand"
										data-bs-ride="carousel"
									>
										<div
											class="carousel-inner product-links-wap"
											role="listbox"
										>
											<div class="carousel-item active">
												<div class="row">
													<div class="col-3 p-md-5">
														<a href="#">
															<div className="img-fluid brand-img">
																<Image
																	class="img-fluid brand-img"
																	src={b1}
																	alt="Brand Logo"
																/>
															</div>
														</a>
													</div>
													<div class="col-3 p-md-5">
														<a href="#">
															<div className="img-fluid brand-img">
																<Image
																	class="img-fluid brand-img"
																	src={b2}
																	alt="Brand Logo"
																/>
															</div>
														</a>
													</div>
													<div class="col-3 p-md-5">
														<a href="#">
															<div className="img-fluid brand-img">
																<Image
																	class="img-fluid brand-img"
																	src={b3}
																	alt="Brand Logo"
																/>
															</div>
														</a>
													</div>
													<div class="col-3 p-md-5">
														<a href="#">
															<div className="img-fluid brand-img">
																<Image
																	class="img-fluid brand-img"
																	src={b4}
																	alt="Brand Logo"
																/>
															</div>
														</a>
													</div>
												</div>
											</div>

											<div class="carousel-item">
												<div class="row">
													<div class="col-3 p-md-5">
														<a href="#">
															<div className="img-fluid brand-img">
																<Image
																	class="img-fluid brand-img"
																	src={b4}
																	alt="Brand Logo"
																/>
															</div>
														</a>
													</div>
													<div class="col-3 p-md-5">
														<a href="#">
															<div className="img-fluid brand-img">
																<Image
																	class="img-fluid brand-img"
																	src={b5}
																	alt="Brand Logo"
																/>
															</div>
														</a>
													</div>
													<div class="col-3 p-md-5">
														<a href="#">
															<div className="img-fluid brand-img">
																<Image
																	class="img-fluid brand-img"
																	src={b3}
																	alt="Brand Logo"
																/>
															</div>
														</a>
													</div>
													<div class="col-3 p-md-5">
														<a href="#">
															<div className="img-fluid brand-img">
																<Image
																	class="img-fluid brand-img"
																	src={b2}
																	alt="Brand Logo"
																/>
															</div>
														</a>
													</div>
												</div>
											</div>

											<div class="carousel-item">
												<div class="row">
													<div class="col-3 p-md-5">
														<a href="#">
															<div className="img-fluid brand-img">
																<Image
																	class="img-fluid brand-img"
																	src={b2}
																	alt="Brand Logo"
																/>
															</div>
														</a>
													</div>
													<div class="col-3 p-md-5">
														<a href="#">
															<div className="img-fluid brand-img">
																<Image
																	class="img-fluid brand-img"
																	src={b2}
																	alt="Brand Logo"
																/>
															</div>
														</a>
													</div>
													<div class="col-3 p-md-5">
														<a href="#">
															<div className="img-fluid brand-img">
																<Image
																	class="img-fluid brand-img"
																	src={b2}
																	alt="Brand Logo"
																/>
															</div>
														</a>
													</div>
													<div class="col-3 p-md-5">
														<a href="#">
															<div className="img-fluid brand-img">
																<Image
																	class="img-fluid brand-img"
																	src={b2}
																	alt="Brand Logo"
																/>
															</div>
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="col-1 align-self-center">
									<a
										class="h1"
										href="#templatemo-slide-brand"
										role="button"
										data-bs-slide="next"
									>
										<FaChevronRight />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Brands