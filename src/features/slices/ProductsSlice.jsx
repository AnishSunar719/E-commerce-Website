import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

const productsSlice = createSlice({
	name: "products",
	initialState: {
		filteredProducts:
			JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
		singleProduct: JSON.parse(sessionStorage.getItem("singleProduct")),
	},
	reducers: {
		filterProducts(state, action) {
			try {
				const filter = storeData.filter(
					(product) => product.type === action.payload
				);
				state.filteredProducts = filter;
				const saveState = JSON.stringify(filter);
				sessionStorage.setItem("filteredData", saveState);
			} catch (error) {
				return console.log("Error from filterProduct reducer", error);
			}
		},
		singleProduct(state, action) {
			try {
				const oneProduct = state.filteredProducts.filter(
					(product) => product.id === action.payload
				);
				state.singleProduct = oneProduct;
				const saveState = JSON.stringify(oneProduct);
				sessionStorage.setItem("singleProduct", saveState);
			} catch (error) {
				return error;
			}
		},
	},
});

export default productsSlice.reducer;
export const {
	filterProducts,
	singleProduct,
} = productsSlice.actions;
