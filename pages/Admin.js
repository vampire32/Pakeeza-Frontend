import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";
import Router, { useRouter } from "next/router";
import axios from "axios";
import Order from "../Components/Order";
import {RiDashboardLine} from "react-icons/ri"
import {FaClipboardList} from "react-icons/fa"
import {MdOutlineLogout} from "react-icons/md"

const Admin = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
		let Email = localStorage.getItem("Email");
		let Data;
		axios
			.get(
				`https://pakeeza-backend-railway-production.up.railway.app/api/users/?populate=*`
			)
			.then((res) => {
				setRestaurants(res.data);
			});
	}, []);
	return (
		<section className="my-account" style={{ overflow: "hiiden" }}>
			<Tab.Container id="left-tabs-example" defaultActiveKey="first">
				<Row style={{ marginRight: "0" }}>
					<Col sm={3}>
						<Nav variant="pills" className="flex-column">
							<Nav.Item>
								<Nav.Link
									eventKey="first"
									className="font-bold text-[22px] text-[#ffb248]"
								>
									<div className="flex">
										<RiDashboardLine />
										<span className="ml-2">DASHBOARD</span>
									</div>
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									eventKey="second"
									className="font-bold text-[22px] text-[#ffb248]"
								>
									<div className="flex">
										<FaClipboardList />
										<span className="ml-2">ORDERS DETAILS</span>
									</div>
								</Nav.Link>
							</Nav.Item>

							<Nav.Item>
								<button
									// onClick={Logout}
									eventKey="fiveth"
									className="font-bold text-[22px] text-[#ffb248]"
								>
									<div className="flex">
										<MdOutlineLogout />
										<span className="ml-2">Logout</span>
									</div>
								</button>
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
										<h1
											style={{
												marginLeft: "2rem",
												marginTop: "3rem",
												fontStyle: "bold",
												fontSize: "18px",
											}}
										>
											Admin
										</h1>
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
						</Tab.Content>

						<Tab.Content >
							<Tab.Pane eventKey="second">
								<div
									class="tab-pane"
									id="orders-tab"
									role="tabpanel"
									aria-labelledby="orders-nav"
								>
									<h1>Order Details </h1>
									<div class="table-responsive">
										{props.order_deatails.data.map((item) => {
											return (
												<table class="table table-bordered" key={item.id}>
													<thead class="thead-dark">
														<tr>
															<th>No</th>
															<th>InvoiceNumber</th>
															<th>Date</th>
															<th>Price</th>
															<th>Email</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>{item.id}</td>
															<td>{item.attributes.InvoiceNumber}</td>
															<td>{item.attributes.InvoiceDate}</td>
															<td>{item.attributes.TotalPaid}</td>
															<td>{item.attributes.Email}</td>
														</tr>
													</tbody>
												</table>
											);
										})}
									</div>
									<h1>Checkout Data</h1>
									<div class="table-responsive">
										<table class="table table-bordered">
											<thead class="thead-dark">
												<tr>
													<th>Name</th>
													<th>Address</th>
													<th>COD</th>
													<th>Vist Store</th>
													<th>Email</th>
													<th>Phone Number</th>
													<th>Product Name</th>
													<th>Product Model</th>
												</tr>
											</thead>
											<tbody>
												{props.check_outs.data.map((item3) => {
													console.log(item3);
													return (
														<tr key={item3.id}>
															<td>{item3.attributes.Name}</td>
															<td>{item3.attributes.Address}</td>
															<td>{item3.attributes.COD}</td>
															<td>{item3.attributes.VistStore}</td>
															<td>{item3.attributes.Email}</td>
															<td>{item3.attributes.PhoneNumber}</td>
															<td>{item3.attributes.ProductName}</td>
															<td>{item3.attributes.Model}</td>
														</tr>
													);
												})}
											</tbody>
										</table>
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
export async function getServerSideProps(context) {
	let headers = {
		Authorization:
			"9ad861e7d9919e881e8b92dfda4c896c1bac63a983dc0acc82727073cc2692d137929ebae6d3242d3a30f1988bc4b8d59faf909d74751f2d4a4f2ab6e4451fa6b1df48774c83cd3646a9a4fed0c45f2716ffd1fc18fd649ecdeea1107ec31a6762073d70cf6f0baa9e063ddd36cbe04bab635baed591742cba412e3ad64cf1ec",
	};
	let a = await fetch(
		"https://pakeeza-backend-railway-production.up.railway.app/api/check-outs?populate=*",
		(headers = headers)
	);
  let b = await fetch(
		"https://pakeeza-backend-railway-production.up.railway.app/api/order-deatails?populate=*",
		(headers = headers)
	);
	let check_outs = await a.json();
  let order_deatails=await b.json();
	console.log(check_outs);
	return {
		props: { check_outs: check_outs, order_deatails: order_deatails },
		// will be passed to the page component as props
	};
}
export default Admin;
