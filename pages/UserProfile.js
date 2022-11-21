import  React,{useEffect,useState} from "react";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Table from "react-bootstrap/Table";
import Router, { useRouter } from "next/router";
import axios from "axios";
import Order from "../Components/Order";



const UserProfile = (props) => {
	const [restaurants, setRestaurants] = useState([]);
	const [order, setorder] = useState([])
	 const [error, setError] = useState(null);
	useEffect(() => {
		let Email=localStorage.getItem("Email")
		let Data;
		axios
			.get(
				`https://pakeeza-backend-railway-production.up.railway.app/api/users/?filters[email][$eq]=${Email}&populate=*`
			)
			.then((res) => {
				setRestaurants(res.data);
			});
			
			
	}, []);
	

	
	

	const Logout=()=>{
		localStorage.removeItem('jwt')
		localStorage.removeItem('Email')
		Router.push('/')

	}
	 
    
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
								<button
									onClick={Logout}
									eventKey="fiveth"
									className="font-bold text-[22px] text-[#ffb248]"
								>
									LOGOUT
								</button>
							</Nav.Item>
						</Nav>
					</Col>
					<Col sm={9}>
						{restaurants.map((item) => {
							
							return (
								<Tab.Content key={item.id}>
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
													{item.username}
												</h1>
											</div>

											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												In condimentum quam ac mi viverra dictum. In efficitur
												ipsum diam, at dignissim lorem tempor in. Vivamus tempor
												hendrerit finibus. Nulla tristique viverra nisl, sit
												amet bibendum ante suscipit non. Praesent in faucibus
												tellus, sed gravida lacus. Vivamus eu diam eros. Aliquam
												et sapien eget arcu rhoncus scelerisque.
											</p>
										</div>
									</Tab.Pane>

									<Tab.Pane  eventKey="second">
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
															<th>InvoiceNumber</th>
															<th>Date</th>
															<th>Price</th>
														</tr>
													</thead>
													{item.order_deatails.map((item2) => {
														console.log(item2);
														return (
															<tbody key={item2.id}>
																<tr>
																	<td>{item2.id}</td>
																	<td>{item2.InvoiceNumber}</td>
																	<td>{item2.InvoiceDate}</td>
																	<td>{item2.TotalPaid}</td>
																</tr>
															</tbody>
														);
													})}
												</table>
											</div>
										</div>
									</Tab.Pane>
								</Tab.Content>
							);
						})}
					</Col>
				</Row>
			</Tab.Container>
		</section>
	);
};
// export async function getServerSideProps(context) {
// 	let Email = localStorage.getItem("Email");
// 	console.log(Email);

// 	let headers = {
// 		Authorization:
// 			"9ad861e7d9919e881e8b92dfda4c896c1bac63a983dc0acc82727073cc2692d137929ebae6d3242d3a30f1988bc4b8d59faf909d74751f2d4a4f2ab6e4451fa6b1df48774c83cd3646a9a4fed0c45f2716ffd1fc18fd649ecdeea1107ec31a6762073d70cf6f0baa9e063ddd36cbe04bab635baed591742cba412e3ad64cf1ec",
// 	};

// 	let b = await fetch(
// 		`https://pakeeza-backend-railway-production.up.railway.app/api/products?filters[Category][$eq]=AC&populate=*`,
// 		(headers = headers)
// 	);

// 	let OrderData = await b.json();
// 	console.log(OrderData);

// 	return {
// 		props: { OrderData: b ,Email:Email},
// 		// will be passed to the page component as props
// 	};
// }
export default UserProfile;
