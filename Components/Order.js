import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";
import Router, { useRouter } from "next/router";
import axios from "axios";

// const parseJSON = (resp) => (resp.json ? resp.json() : resp);

// // Checks if a network request came back fine, and throws an error if not
// const checkStatus = (resp) => {
// 	if (resp.status >= 200 && resp.status < 300) {
// 		return resp;
// 	}

// 	return parseJSON(resp).then((resp) => {
// 		throw resp;
// 	});
// };

// const headers = { "Content-Type": "application/json" };

const Order = (props) => {
	const [Order, setOrder] = useState([]);
	// useEffect(() => {
	// 	let Email = localStorage.getItem("Email");
	// 	console.log(Email);
	// 	fetch(
	// 		"https://pakeeza-backend-railway-production.up.railway.app/api/order-deatails?filters[Email][$eq]=moizabdul320@gmail.com",
	// 		{
	// 			headers,
	// 			method: "GET",
	// 		}
	// 	).then((response) => {
	// 		setOrder(response.data);
	// 	});
	// 	console.log(Order.data);
	// }, []);
   
	return (
        
		<div>
			<Tab.Content>
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
										<th>InvoiceNumber</th>
										<th>Date</th>
										<th>Price</th>
									</tr>
								</thead>
								{/* {Order.data.map((item) => {
                                    console.log(item)
									return (
										<tbody key={item.id}>
											<tr>
												<td>{item.id}</td>
												<td>{item.attributes.InvoiceNumber}</td>
												<td>{item.attributes.InvoiceDate}</td>
												<td>{item.attributes.TotalPaid}</td>
											</tr>
										</tbody>
									);
								})} */}
							</table>
						</div>
					</div>
				</Tab.Pane>
			</Tab.Content>
		</div>
	);
};

export default Order;
