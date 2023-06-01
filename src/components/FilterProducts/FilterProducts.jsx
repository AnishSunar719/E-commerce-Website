import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

function FilterProducts() {
	const products = useSelector((state) => state.products.filteredProducts);
	const { type } = useParams();
	const wishList = useSelector((state) => state.wishList.wishList);
	return (
		<div className=" pt-10 ">
			<div className="pl-10">
				<h1 className="text-pink-600 text-xl tracking-normal leading-none">
					{type}
				</h1>
			</div>
			<div className="grid grid-cols-3 justify-items-center py-8 gap-12">
				{products
					.filter((product) => product.type === type)
					.map((product, idx) => {
						const { id, img, name, text, color, price, gender } = product;
						return (
							<div key={idx}>
								<ProductCard
									id={id}
									img={img}
									name={name}
									text={text}
									colors={color}
									price={price}
									gender={gender}
									liked={wishList.some((item) => item.id === id)}
								/>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default FilterProducts;
