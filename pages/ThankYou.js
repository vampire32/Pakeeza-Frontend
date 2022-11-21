import React,{useEffect} from "react";



const ThankYou = (props) => {
let InvoiceNumber=localStorage.getItem("InvoiceNumber")
let InvoiceDate = localStorage.getItem("InvoiceDate");
let TOtalPaid = localStorage.getItem("TotalPaid");
let Total = localStorage.getItem("Total");
useEffect(() => {
 setTimeout(()=>{
	localStorage.removeItem("InvoiceNumber")
	localStorage.removeItem("InvoiceDate");
	localStorage.removeItem("TotalPaid");
	localStorage.removeItem("Total");
	localStorage.removeItem("Carts")
	

 },10000)
}, [])


	
	
	return (
		<div>
			<section class="h-100 gradient-custom">
				<div class="container py-5 h-100">
					<div class="row d-flex justify-content-center align-items-center h-100">
						<div class="col-lg-10 col-xl-8">
							<div class="card" style={{ borderRadius: "10px;" }}>
								<div class="card-header px-4 py-5">
									<h5 class="text-muted mb-0">
										Thanks for your Order,{" "}
										<span style={{ color: "#a8729a" }}></span>!
									</h5>
								</div>
								<div class="card-body p-4">
									<div class="d-flex justify-content-between align-items-center mb-4">
										<p class="lead fw-normal mb-0" style={{ color: "#a8729a" }}>
											Receipt
										</p>
									</div>
									
									<div >
										<div class="d-flex justify-content-between pt-2">
											<p class="fw-bold mb-0">Order Details</p>
											<p class="text-muted mb-0">
												<span class="fw-bold me-4">Total RS</span>{" "}
												{TOtalPaid}
											</p>
										</div>
										<div class="d-flex justify-content-between pt-2">
											<p class="text-muted mb-0">
												Invoice Number : {InvoiceNumber}
											</p>
											<p class="text-muted mb-0">
												<span class="fw-bold me-4">Discount</span> Rs.0
											</p>
										</div>
										<div class="d-flex justify-content-between">
											<p class="text-muted mb-0">
												Invoice Date : {InvoiceDate}
											</p>
											<p class="text-muted mb-0">
												<span class="fw-bold me-4">GST 0%</span>
											</p>
										</div>
										<div class="d-flex justify-content-between mb-5">
											<p class="text-muted mb-0">
												<span class="fw-bold me-4">Delivery Charges</span>
												Free
											</p>
										</div>
										<div
											class="card-footer border-0 px-4 py-5"
											style={{
												backgroundColor: "#a8729a",
												borderBottomLeftRadius: "10px",
												borderBottomRightRadius: "10px",
											}}
										>
											<h5 class="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">
												Total paid:{" "}
												<span class="h2 mb-0 ms-2">
													{Total}
												</span>
											</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
	
	
};
export async function getServerSideProps(context) {
	
	let headers = {
		Authorization:
			"9ad861e7d9919e881e8b92dfda4c896c1bac63a983dc0acc82727073cc2692d137929ebae6d3242d3a30f1988bc4b8d59faf909d74751f2d4a4f2ab6e4451fa6b1df48774c83cd3646a9a4fed0c45f2716ffd1fc18fd649ecdeea1107ec31a6762073d70cf6f0baa9e063ddd36cbe04bab635baed591742cba412e3ad64cf1ec",
	};
	
	
	
	
	
	
	
	let a = await fetch(
		`https://pakeeza-backend-railway-production.up.railway.app/api/order-deatails`,
		(headers = headers)
	);
	
	let productsData = await a.json();
	
	return {
		props: { productsData: productsData },
		// will be passed to the page component as props
	};
}
export default ThankYou;
