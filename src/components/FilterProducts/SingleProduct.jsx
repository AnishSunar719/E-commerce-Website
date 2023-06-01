import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Tooltip, Button } from "@material-tailwind/react";
import { TiShoppingCart } from "react-icons/ti";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { addToCart } from "../../features/slices/CartSlice";
import { VscHeart, VscHeartFilled } from "react-icons/vsc";
import {
	addToWishList,
	removeFromWishList,
} from "../../features/slices/wishSlice";

function SingleProduct() {
	const product = useSelector((state) => state.products.singleProduct);
	const { id } = useParams();
	const dispatch = useDispatch();
	const defaultSize = product[0].size ? product[0].size[0] : "";
	const defaultColor = product[0].color[0];
	const [size, setSize] = useState(defaultSize);
	const [color, setColor] = useState(defaultColor);
	const [count, setCount] = useState(1);
	const wishList = useSelector((state) => state.wishList.wishList);

	return (
		<div>
			{product
				.filter((p) => p.id === id)
				.map((p, idx) => {
					return (
						<div
							key={idx}
							className="flex justify-center items-center py-10 gap-12"
						>
							<div className="pl-44 grow-[2]">
								<img
									className="rounded-lg h-[550px]"
									src={p.img}
									alt={p.name}
								/>
							</div>
							<div className="grow-[3]">
								<div className="max-w-lg">
									<h3 className="text-4xl tracking-normal leading-none font-bold pb-4">
										{p.name}
									</h3>
									<span className="text-2xl text-pink-600 tracking-normal leading-none font-bold">
										${p.price}
									</span>
									<p className="pb-4 pt-2">
										<span className="text-base tracking-normal leading-none font-bold pb-2 line-through mr-2">
											${p.price + p.price * 0.2}
										</span>
										<span className=" text-base leading-none font-bold tracking-normal pb-4">
											-20%
										</span>
									</p>
									<p className="text-gray-600 font-base tracking-normal leading-none pb-4">
										{p.text}
									</p>
									{p.size[0] !== "None" && (
										<div className="pb-4">
											<label
												htmlFor="size"
												className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
											>
												Pick a size
											</label>
											<select
												id="size"
												name="size"
												onClick={(e) => setSize(e.target.value)}
												className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											>
												{" "}
												{p.size.map((size, idx) => {
													return (
														<option value={size} key={idx}>
															{size}
														</option>
													);
												})}
											</select>
										</div>
									)}
									<div className="pb-4">
										<label
											htmlFor="color"
											className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
										>
											Pick a color
										</label>
										<select
											id="color"
											name="color"
											onClick={(e) => setColor(e.target.value)}
											className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										>
											{p.color.map((color, idx) => {
												return (
													<option value={color} key={idx}>
														{color}
													</option>
												);
											})}
										</select>
									</div>
									<div>
										<label
											htmlFor="count"
											className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
										>
											Quatity
										</label>
										<div className="flex pb-4">
											<Button
												color="red"
												ripple={false}
												size="sm"
												onClick={() => {
													return count < 2 ? setCount(1) : setCount(count - 1);
												}}
											>
												<AiOutlineMinus />
											</Button>
											<input
												type="text"
												name="count"
												id="count"
												value={count}
												onChange={(e) => e.target.value}
												className="text-center w-1/6 border-2 border-gray-300 rounded-sm"
											/>
											<Button
												color="green"
												ripple={false}
												size="sm"
												onClick={() => {
													return setCount(count + 1);
												}}
											>
												<AiOutlinePlus />
											</Button>
										</div>
									</div>
									<div className="py-4 flex gap-4">
										<div className="wishList">
											{wishList.some((item) => item.id === p.id) ? (
												<Tooltip
													content="Remove from Wishlist"
													animate={{
														mount: { scale: 1, y: 0 },
														unmount: { scale: 0, y: 25 },
													}}
													placement="bottom"
												>
													<Button
														variant="filled"
														color="pink"
														size="md"
														onClick={() => {
															dispatch(removeFromWishList(p));
														}}
													>
														<VscHeartFilled size={24} />
													</Button>
												</Tooltip>
											) : (
												<Tooltip
													content="Add to Wishlist"
													animate={{
														mount: { scale: 1, y: 0 },
														unmount: { scale: 0, y: 25 },
													}}
													placement="bottom"
												>
													<Button
														variant="outlined"
														color="gray"
														size="md"
														onClick={() => {
															dispatch(addToWishList(p));
														}}
													>
														<VscHeart size={24} />
													</Button>
												</Tooltip>
											)}
										</div>
										<div className="cart">
											<Tooltip
												content="Add to Cart"
												animate={{
													mount: { scale: 1, y: 0 },
													unmount: { scale: 0, y: 25 },
												}}
												placement="bottom"
											>
												<Button
													variant="gradient"
													color="red"
													size="md"
													onClick={() =>
														dispatch(
															addToCart({
																id: p.id,
																name: p.name,
																size: size,
																color: color,
																qty: count,
																price: p.price,
																img: p.img,
																text: p.text,
															})
														)
													}
												>
													<TiShoppingCart size={24} />
												</Button>
											</Tooltip>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				})}
		</div>
	);
}

export default SingleProduct;
