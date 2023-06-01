import React, { useEffect } from "react";
import {
	nextSlide,
	prevSlide,
	dotSlide,
} from "../../features/slices/SliderSlice";
import { sliderData } from "../../assets/data/dummyData";
import { useSelector, useDispatch } from "react-redux";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function Slider() {
	const sliderIndex = useSelector((state) => state.slider.value);
	const dispatch = useDispatch();

	return (
		<>
			<div className="relative">
				{sliderData.map((item) => {
					return (
						<div
							key={item.id}
							className={
								parseInt(item.id) === sliderIndex
									? "opacity-100 duration-700 ease-in scale-100"
									: "opacity-0 duration-700 ease-out scale-95"
							}
						>
							{parseInt(item.id) === sliderIndex && (
								<div>
									<img
										className="w-full h-[800px]"
										src={item.img}
										alt="shoes"
									/>
									<div className="absolute top-20 mx-auto inset-x-1/4">
										<span className="text-white text-4xl text-center font-bold tracking-normal leading-none">
											{item.text}
										</span>
									</div>
								</div>
							)}
						</div>
					);
				})}
				<div className="flex flex-row absolute bottom-4 left-[45%]">
					{sliderData.map((item) => {
						return (
							<div key={parseInt(item.id)} className="mr-4">
								<div
									className={
										parseInt(item.id) === sliderIndex
											? "bg-pink-500 rounded-full p-3 cursor-pointer"
											: "bg-white rounded-full p-3 cursor-pointer"
									}
									onClick={() => dispatch(dotSlide(parseInt(item.id)))}
								></div>
							</div>
						);
					})}
				</div>
				<div>
					<button
						className="absolute top-1/2 bg-white rounded-full right-4 hover:bg-pink-500"
						onClick={() => dispatch(nextSlide(sliderIndex + 1))}
					>
						<IoIosArrowForward size={28} />
					</button>
					<button
						className="absolute top-1/2 bg-white rounded-full left-4 hover:bg-pink-500"
						onClick={() => dispatch(prevSlide(sliderIndex - 1))}
					>
						<IoIosArrowBack size={28} />
					</button>
				</div>
			</div>
		</>
	);
}

export default Slider;
