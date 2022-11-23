import React,{useState,useEffect} from 'react'
import { useRouter } from "next/router";
import Link from "next/link";
import Script from 'next/script';

const CheckoutPage = (props) => {
	
		

	
	let ProductName;
	let ProductPrice;
	let ProductImg;
	let ProductModel;
	
	let InvoiceNumber=(Math.random() *6)
	let InvoiceDate=new Date();
	const router = useRouter();
	const { slug } = router.query;
	const [checkBox, setcheckBox] = useState(false)
	const Easypaisa=()=>{
		if(checkBox==false){
			setcheckBox(true)
		}
		else if(checkBox==true){
			setcheckBox(false)
		}
	}
	
	
	
	const [UserData, setUserData] = useState({
		Name: "",
		Email: "",
		Address: "",
		City: "",
		COD: "",
		PhoneNumber: "",
		VistStore: "",
		users_permissions_users: "",
		TID:""
	});
	 const handleChange = (e) => {
			const { name, value } = e.target;
			setUserData({ ...UserData, [name]: value });
		};
		
const [Alert, setAlert] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		
		try {
			const responseOrder = await fetch(
				"https://pakeeza-backend-railway-production.up.railway.app/api/order-deatails",
				{
					headers: {
						"Content-Type": "application/json",
						Authorization:
							"9ad861e7d9919e881e8b92dfda4c896c1bac63a983dc0acc82727073cc2692d137929ebae6d3242d3a30f1988bc4b8d59faf909d74751f2d4a4f2ab6e4451fa6b1df48774c83cd3646a9a4fed0c45f2716ffd1fc18fd649ecdeea1107ec31a6762073d70cf6f0baa9e063ddd36cbe04bab635baed591742cba412e3ad64cf1ec",
					},

					body: JSON.stringify({
						data: {
							InvoiceNumber: InvoiceNumber,
							InvoiceDate: InvoiceDate,
							Total: props.SubTotal,
							TotalPaid: props.SubTotal,
							Email: UserData.Email,
							users_permissions_users: localStorage.getItem('userid') ,
						},
					}),
					method: "POST",
				}
			);
			const responsePayment = await fetch(
				"https://pakeeza-backend-railway-production.up.railway.app/api/payment-methods",
				{
					headers: {
						"Content-Type": "application/json",
						Authorization:
							"9ad861e7d9919e881e8b92dfda4c896c1bac63a983dc0acc82727073cc2692d137929ebae6d3242d3a30f1988bc4b8d59faf909d74751f2d4a4f2ab6e4451fa6b1df48774c83cd3646a9a4fed0c45f2716ffd1fc18fd649ecdeea1107ec31a6762073d70cf6f0baa9e063ddd36cbe04bab635baed591742cba412e3ad64cf1ec",
					},

					body: JSON.stringify({
						data: {
							AccountTitle: "Syed Abdul Moiz Shah",
							BankName: "EasyPasia",
							AccountNumber: 3169089872,
							TID: UserData.TID,
							
						},
					}),
					method: "POST",
				}
			);
			const response = await fetch(
				"https://pakeeza-backend-railway-production.up.railway.app/api/check-outs",
				{
					headers: {
						"Content-Type": "application/json",
						Authorization:
							"9ad861e7d9919e881e8b92dfda4c896c1bac63a983dc0acc82727073cc2692d137929ebae6d3242d3a30f1988bc4b8d59faf909d74751f2d4a4f2ab6e4451fa6b1df48774c83cd3646a9a4fed0c45f2716ffd1fc18fd649ecdeea1107ec31a6762073d70cf6f0baa9e063ddd36cbe04bab635baed591742cba412e3ad64cf1ec",
					},

					body: JSON.stringify({
						data: {
							Name: UserData.Name,
							Email: UserData.Email,
							Address: UserData.Address,
							City: UserData.City,
							ProductName: ProductName,
							ProductPrice: ProductPrice,
							COD: UserData.COD,
							VistStore: UserData.VistStore,
							SubTotal: props.SubTotal,
							Model: ProductImg,
							PhoneNumber: UserData.PhoneNumber,
							users_permissions_users: localStorage.getItem("userid"),
						},
					}),
					method: "POST",
				}
			);
			localStorage.setItem("InvoiceNumber",InvoiceNumber)
			localStorage.setItem("InvoiceDate",InvoiceDate)
			localStorage.setItem("TotalPaid", props.SubTotal);
			localStorage.setItem("Total", props.SubTotal);
			setAlert(true);
			
			setTimeout(() => {
				router.push("/ThankYou");
			}, 3000);

			const addResponse=await response.json()
			const OrderResponse = await response.json();
			console.log(addResponse)
			console.log(OrderResponse);
			localStroge.remove("Carts")
			alert("Data Send");
		} catch (error) {
			console.error(error);
			alert(error)
		}
	};
	let data = [
		{
			invoicenumber: InvoiceNumber,
			invoicedate: InvoiceDate,
			total: props.SubTotal,
			titalpaid: props.SubTotal,
		},
	];
	return (
		<div>
			{Alert ? (
				<div
					class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
					role="alert"
				>
					<span class="font-medium">Success alert!</span> Change a few things up
					and try submitting again.
				</div>
			) : (
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
								<form id="payment-form" onSubmit={handleSubmit}>
									<section>
										<h2 class="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
											Shipping & Billing Information
										</h2>
										<fieldset class="mb-3 bg-white shadow-lg rounded text-gray-600">
											<label
												htmlFor="Name"
												class="flex border-b border-gray-200 h-12 py-3 items-center"
											>
												<span class="text-right px-2">Name</span>
												<input
													onChange={(e) => handleChange(e)}
													name="Name"
													class="focus:outline-none px-3"
													placeholder="Try Odinsson"
													required=""
												/>
											</label>
											<label
												htmlFor="Email"
												class="flex border-b border-gray-200 h-12 py-3 items-center"
											>
												<span class="text-right px-2">Email</span>
												<input
													onChange={(e) => handleChange(e)}
													name="Email"
													type="Email"
													class="focus:outline-none px-3"
													placeholder="try@example.com"
													required=""
												/>
											</label>
											
											<label class="flex border-b border-gray-200 h-12 py-3 items-center">
												<span class="text-right px-2">Phone Number</span>
												<input
													onChange={(e) => handleChange(e)}
													name="PhoneNumber"
													type="Number"
													class="focus:outline-none px-3"
													placeholder="+92-31688222"
													required=""
												/>
											</label>
											<label
												htmlFor="Address"
												class="flex border-b border-gray-200 h-12 py-3 items-center"
											>
												<span class="text-right px-2">Address</span>
												<input
													onChange={(e) => handleChange(e)}
													name="Address"
													class="focus:outline-none px-3"
													placeholder="10 Street XYZ 654"
												/>
											</label>
											<label
												htmlFor="City"
												class="flex border-b border-gray-200 h-12 py-3 items-center"
											>
												<span class="text-right px-2">City</span>
												<input
													onChange={(e) => handleChange(e)}
													name="City"
													class="focus:outline-none px-3"
													placeholder="San Francisco"
												/>
											</label>
										</fieldset>
									</section>
									<div class="rounded-md">
										<section>
											<h2 class="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
												Payment Information
											</h2>
											<fieldset class="mb-3 bg-white shadow-lg rounded text-gray-600">
												<label class="flex border-b border-gray-200 h-12 py-3 items-center">
													<span class="text-right px-2">
														Cash on Deliver (COD)
													</span>
													<input
														onChange={(e) => handleChange(e)}
														name="COD"
														id="remember"
														aria-describedby="remember"
														type="checkbox"
														class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
														required=""
													/>
												</label>
												<label class="flex border-b border-gray-200 h-12 py-3 items-center">
													<span class="text-right px-2">Vist Store</span>
													<input
														name="VistStore"
														id="remember"
														aria-describedby="remember"
														type="checkbox"
														class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
														required=""
													/>
												</label>
												<label
													htmlFor="Easypaisa"
													class="flex border-b border-gray-200 h-12 py-3 items-center"
												>
													<span class="text-right px-2">Easypaisa</span>
													<input
														name="Easypaisa"
														id="Easypaisa"
														aria-describedby="remember"
														type="checkbox"
														class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
														required=""
														onChange={Easypaisa}
													/>
												</label>
												{checkBox ? (
													<div id="easypaisa-form">
														<label class="flex border-b border-gray-200 h-12 py-3 items-center">
															<span class="text-right px-2">Account Title</span>
															<span>Syed Abdul Moiz Shah</span>
														</label>
														<label class="flex border-b border-gray-200 h-12 py-3 items-center">
															<span class="text-right px-2">
																Account Number
															</span>
															<span>03169089872</span>
														</label>
														<label class="flex border-b border-gray-200 h-12 py-3 items-center">
															<span class="text-right px-2">Bank Name</span>
															<span>EasyPaisa</span>
														</label>
														<label class="flex border-b border-gray-200 h-12 py-3 items-center">
															<span class="text-right px-2">TID</span>
															<input
																onChange={(e) => handleChange(e)}
																name="TID"
																class="focus:outline-none px-3"
																placeholder="TID"
															/>
														</label>
													</div>
												) : (
													<div></div>
												)}
											</fieldset>
										</section>
									</div>
									<button
										type="submit"
										class="submit-button px-4 py-3 rounded-full bg-[#9e7098]  text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors"
									>
										Pay RS {props.SubTotal}
									</button>
								</form>
							</div>
						</div>
						<div class="col-span-1 bg-white lg:block hidden">
							<h1 class="py-6 border-b-2 text-xl text-gray-600 px-8">
								Order Summary
							</h1>
							<ul class="py-6 border-b space-y-6 px-8">
								{Object.keys(props.Carts).map((k) => {
									ProductName = props.Carts[k].name;
									ProductPrice = props.Carts[k].price;
									ProductImg = props.Carts[k].itemCode;

									return (
										<li key={k} class="grid grid-cols-6 gap-2 border-b-1">
											<div class="col-span-1 self-center">
												<img
													src={props.Carts[k].img}
													alt="Product"
													class="rounded w-full"
												/>
											</div>
											<div class="flex flex-col col-span-3 pt-2">
												<span class="text-gray-600 text-md font-semi-bold">
													{ProductName}
												</span>
												<span class="text-gray-400 text-sm inline-block pt-2">
													{props.Carts[k].qty}
												</span>
												<span class="text-gray-400 text-sm inline-block pt-2">
													Model{props.Carts[k].itemCode}
												</span>
											</div>
											<div class="col-span-2 pt-3">
												<div class="flex items-center space-x-2 text-sm justify-between">
													<span class="text-gray-400">{ProductPrice}</span>
													<span class="text-[#ffae42] font-semibold inline-block">
														{ProductPrice}
													</span>
												</div>
											</div>
										</li>
									);
								})}
							</ul>
							<div class="px-8 border-b">
								<div class="flex justify-between py-4 text-gray-600">
									<span>Subtotal</span>
									<span class="font-semibold text-[#ffae42]">
										RS.{props.SubTotal}
									</span>
								</div>
								<div class="flex justify-between py-4 text-gray-600">
									<span>Shipping</span>
									<span class="font-semibold text-[#ffae42]">Free</span>
								</div>
							</div>
							<div class="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
								<span>Total</span>
								<span>RS.{props.SubTotal}</span>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CheckoutPage