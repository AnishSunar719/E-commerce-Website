import React from "react";
import { Button } from "@material-tailwind/react";
import Clothes from "../../assets/images/clothes.jpg";
import { filterProducts } from "../../features/slices/ProductsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function NavigateButtons({ buttons }) {
	const dispatch = useDispatch();

	return (
		<>
			<div className="flex py-6 justify-center items-center">
				{buttons.map((button, idx) => {
					return (
						<div key={idx} className="mr-4">
							<Link to={"/filterProducts/" + button}>
								<Button
									size="md"
									variant="filled"
									color="pink"
									ripple={true}
									className="hover:scale-110"
									component = "span"
									onClick={() => dispatch(filterProducts(button))}
								>
									{button}
								</Button>
							</Link>
						</div>
					);
				})}
			</div>
			<div className=" pb-4 p-2 h-8 w-[60%] bg-black mx-auto rounded-md">
				<p className="text-pink-600 text-center text-lg font-bold tracking-normal leading-none">
					SAVE UPTO 50%
				</p>
			</div>
			<div className="py-4 w-full">
				<img
					className="w-[80%] h-[28rem] mx-auto rounded-md shadow-lg shadow-gray-600"
					src={Clothes}
					alt="clothes"
				/>
			</div>
			{/* <div className="flex items-center py-4 p-2 h-8 w-[60%] bg-black mx-auto rounded-md">
				<span className="text-pink-600 text-center text-lg font-bold mx-auto tracking-normal leading-none">
					SUMMER T-SHIRT SALE 30 %
				</span>
			</div> */}
		</>
	);
}

export default NavigateButtons;
