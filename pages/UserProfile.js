import  React from "react";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Table from "react-bootstrap/Table";


const UserProfile = () => {
    
	return (
		<section className="my-account" style={{ overflow: "hiiden" }}>
			<Tab.Container id="left-tabs-example" defaultActiveKey="first">
				<Row style={{marginRight:"0"}}>
					<Col sm={3}>
						<Nav variant="pills" className="flex-column">
							<Nav.Item>
								<Nav.Link
									eventKey="first"
									className="font-bold text-[22px] text-[#ffb248]"
								>
									DASHBOARD
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									eventKey="second"
									className="font-bold text-[22px] text-[#ffb248]"
								>
									ORDERS DEATILS
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									eventKey="third"
									className="font-bold text-[22px] text-[#ffb248]"
								>
									PAYMENT METHOD
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									eventKey="fourth"
									className="font-bold text-[22px] text-[#ffb248]"
								>
									ACCOUNT DETAILS
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									eventKey="fiveth"
									className="font-bold text-[22px] text-[#ffb248]"
								>
									DELIVERY ADDRESS
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
					<Col sm={9}>
						<Tab.Content>
							<Tab.Pane eventKey="first">
								<div
									class="tab-pane fade show active"
									id="dashboard-tab"
									role="tabpanel"
									aria-labelledby="dashboard-nav"
								>
									<div className="flex">
										<img
											class="w-32 h-32 rounded-full"
											src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
											alt="Rounded avatar"
										/>
										<h1 style={{marginLeft:"2rem",marginTop:"3rem",fontStyle:"bold",fontSize:"18px"}}>Muskan Fatima</h1>
									</div>

									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
										condimentum quam ac mi viverra dictum. In efficitur ipsum
										diam, at dignissim lorem tempor in. Vivamus tempor hendrerit
										finibus. Nulla tristique viverra nisl, sit amet bibendum
										ante suscipit non. Praesent in faucibus tellus, sed gravida
										lacus. Vivamus eu diam eros. Aliquam et sapien eget arcu
										rhoncus scelerisque.
									</p>
								</div>
							</Tab.Pane>
							<Tab.Pane eventKey="second">
								<div
									class="tab-pane"
									id="orders-tab"
									role="tabpanel"
									aria-labelledby="orders-nav"
								>
                                    <h1>Order Details</h1>
									<div class="table-responsive">
										<table class="table table-bordered">
											<thead class="thead-dark">
												<tr>
													<th>No</th>
													<th>Product</th>
													<th>Date</th>
													<th>Price</th>
													<th>Status</th>
													<th>Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>1</td>
													<td>Product Name</td>
													<td>01 Jan 2020</td>
													<td>$99</td>
													<td>Approved</td>
													<td>
														<button class="btn">View</button>
													</td>
												</tr>
												<tr>
													<td>2</td>
													<td>Product Name</td>
													<td>01 Jan 2020</td>
													<td>$99</td>
													<td>Approved</td>
													<td>
														<button class="btn">View</button>
													</td>
												</tr>
												<tr>
													<td>3</td>
													<td>Product Name</td>
													<td>01 Jan 2020</td>
													<td>$99</td>
													<td>Approved</td>
													<td>
														<button class="btn">View</button>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</Tab.Pane>
							<Tab.Pane eventKey="third">
								<div class="tab-pane ">
									<div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
										<div
											class="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700"
											style={{ maxWidth: "600px" }}
										>
											<div class="w-full pt-1 pb-5">
												<div class="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
													<i class="mdi mdi-credit-card-outline text-3xl"></i>
												</div>
											</div>
											<div class="mb-10">
												<h1 class="text-center font-bold text-xl uppercase">
													Secure payment info
												</h1>
											</div>
											<div class="mb-3 flex -mx-2">
												<div class="px-2">
													<label
														for="type1"
														class="flex items-center cursor-pointer"
													>
														<input
															type="radio"
															class="form-radio h-5 w-5 text-indigo-500"
															name="type"
															id="type1"
															checked
														/>
														<img
															src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
															class="h-8 ml-3"
														/>
													</label>
												</div>
												<div class="px-2">
													<label
														for="type2"
														class="flex items-center cursor-pointer"
													>
														<input
															type="radio"
															class="form-radio h-5 w-5 text-indigo-500"
															name="type"
															id="type2"
														/>
														<img
															src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
															class="h-8 ml-3"
														/>
													</label>
												</div>
											</div>
											<div class="mb-3">
												<label class="font-bold text-sm mb-2 ml-1">
													Name on card
												</label>
												<div>
													<input
														class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
														placeholder="John Smith"
														type="text"
													/>
												</div>
											</div>
											<div class="mb-3">
												<label class="font-bold text-sm mb-2 ml-1">
													Card number
												</label>
												<div>
													<input
														class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
														placeholder="0000 0000 0000 0000"
														type="text"
													/>
												</div>
											</div>
											<div class="mb-3 -mx-2 flex items-end">
												<div class="px-2 w-1/2">
													<label class="font-bold text-sm mb-2 ml-1">
														Expiration date
													</label>
													<div>
														<select class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
															<option value="01">01 - January</option>
															<option value="02">02 - February</option>
															<option value="03">03 - March</option>
															<option value="04">04 - April</option>
															<option value="05">05 - May</option>
															<option value="06">06 - June</option>
															<option value="07">07 - July</option>
															<option value="08">08 - August</option>
															<option value="09">09 - September</option>
															<option value="10">10 - October</option>
															<option value="11">11 - November</option>
															<option value="12">12 - December</option>
														</select>
													</div>
												</div>
												<div class="px-2 w-1/2">
													<select class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
														<option value="2020">2020</option>
														<option value="2021">2021</option>
														<option value="2022">2022</option>
														<option value="2023">2023</option>
														<option value="2024">2024</option>
														<option value="2025">2025</option>
														<option value="2026">2026</option>
														<option value="2027">2027</option>
														<option value="2028">2028</option>
														<option value="2029">2029</option>
													</select>
												</div>
											</div>
											<div class="mb-10">
												<label class="font-bold text-sm mb-2 ml-1">
													Security code
												</label>
												<div>
													<input
														class="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
														placeholder="000"
														type="text"
													/>
												</div>
											</div>
											<div>
												<button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
													<i class="mdi mdi-lock-outline mr-1"></i> PAY NOW
												</button>
											</div>
										</div>
									</div>
								</div>
							</Tab.Pane>
							<Tab.Pane eventKey="fourth">
								<div
									class="tab-pane "
									id="account-tab"
									role="tabpanel"
									aria-labelledby="account-nav"
								>
									<h4>Account Details</h4>
									<div class="row" style={{ overflow: "hiiden" }}>
										<div class="col-md-6">
											<input
												class="form-control"
												type="text"
												placeholder="First Name"
											/>
										</div>
										<div class="col-md-6">
											<input
												class="form-control"
												type="text"
												placeholder="Last Name"
											/>
										</div>
										<div class="col-md-6">
											<input
												class="form-control"
												type="text"
												placeholder="Mobile"
											/>
										</div>
										<div class="col-md-6">
											<input
												class="form-control"
												type="text"
												placeholder="Email"
											/>
										</div>
										<div class="col-md-12">
											<input
												class="form-control"
												type="text"
												placeholder="Address"
											/>
										</div>
										<div class="col-md-12">
											<button class="btn">Update Account</button>
											<br />
											<br />
										</div>
									</div>
									<h4>Password change</h4>
									<div class="row">
										<div class="col-md-12">
											<input
												class="form-control"
												type="password"
												placeholder="Current Password"
											/>
										</div>
										<div class="col-md-6">
											<input
												class="form-control"
												type="text"
												placeholder="New Password"
											/>
										</div>
										<div class="col-md-6">
											<input
												class="form-control"
												type="text"
												placeholder="Confirm Password"
											/>
										</div>
										<div class="col-md-12">
											<button class="btn">Save Changes</button>
										</div>
									</div>
								</div>
							</Tab.Pane>
							<Tab.Pane eventKey="fiveth">
								{" "}
								<div
									class="tab-pane "
									id="address-tab"
									role="tabpanel"
									aria-labelledby="address-nav"
								>
									<h4>Address</h4>
									<div class="row">
										<div class="col-md-6">
											<h5>Payment Address</h5>
											<p>123 Payment Street, Los Angeles, CA</p>
											<p>Mobile: 012-345-6789</p>
											<button class="btn">Edit Address</button>
										</div>
										<div class="col-md-6">
											<h5>Shipping Address</h5>
											<p>123 Shipping Street, Los Angeles, CA</p>
											<p>Mobile: 012-345-6789</p>
											<button class="btn">Edit Address</button>
										</div>
									</div>
								</div>
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</section>
	);
};

export default UserProfile;
