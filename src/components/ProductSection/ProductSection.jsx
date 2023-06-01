import React from "react";
import { storeData } from "../../assets/data/dummyData";
import ProductSectionCard from "./ProductSectionCard";

function ProductSection() {
	return (
		<div>
			<div className="bg-black w-[60%] mx-auto rounded-md p-2 mb-8">
				<p className="text-pink-600 font-bold text-center tracking-normal leading-none text-lg">
					20% OFF IN ALL PRODUCTS
				</p>
			</div>
			<div className="grid grid-cols-3 gap-4 py-8 grid-rows-2 mx-auto max-w-7xl">
				{storeData.slice(0, 6).map((item, idx) => {
					const { id, img, name, text, type, size, color, gender, price } =
						item;
					return (
						<div key={idx}>
							<ProductSectionCard
								id={id}
								img={img}
								name={name}
								text={text}
								type={type}
								size={size}
								color={color}
								gender={gender}
								price={price}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ProductSection;
