import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: JSON.parse(sessionStorage.getItem("cart")) || {
		cart: [],
		totalQty: 0,
		totalPrice: 0,
	},
	reducers: {
		addToCart(state, action) {
			const productId = action.payload;
			try {
				const exist = state.cart.find((product) => {
					return (
						product.id === productId.id &&
						product.size === productId.size &&
						product.color === productId.color
					);
				});
				if (exist) {
					exist.qty++;
					state.totalQty += 1;
					state.totalPrice += exist.price;
					sessionStorage.setItem("cart", JSON.stringify(state));
				} else {
					state.cart.push({
						id: productId.id,
						name: productId.name,
						price: productId.price,
						size: productId.size,
						color: productId.color,
						qty: productId.qty,
						img: productId.img,
						text: productId.text,
					});
					state.totalQty += productId.qty;
					state.totalPrice += productId.price * productId.qty;
					sessionStorage.setItem("cart", JSON.stringify(state));
				}
			} catch (error) {
				return error;
			}
		},
		removeFromCart(state, action) {
			const productId = action.payload;
			try {
				const exist = state.cart.find((product) => {
					return (
						product.id === productId.id &&
						product.size === productId.size &&
						product.color === productId.color
					);
				});
				if (exist.qty === 1) {
					state.cart = state.cart.filter((product) => {
						return (
							product.id !== productId.id ||
							product.size !== product.size ||
							product.color !== productId.color
						);
					});
					state.totalQty--;
					state.totalPrice -= exist.price;
					sessionStorage.setItem("cart", JSON.stringify(state));
				} else {
					exist.qty--;
					state.totalQty--;
					state.totalPrice -= exist.price;
					sessionStorage.setItem("cart", JSON.stringify(state));
				}
				if (state.totalQty === 0) {
					sessionStorage.removeItem("cart");
					sessionStorage.removeItem("singleProduct");
					sessionStorage.removeItem("filteredData");
				}
			} catch (error) {
				return error;
			}
		},
		emptyCart(state, action) {
			try {
				state.cart = [];
				state.totalQty = 0;
				state.totalPrice = 0;
				sessionStorage.removeItem("singleProduct");
				sessionStorage.removeItem("filteredData");
				sessionStorage.removeItem("cart");
			} catch (error) {
				return error;
			}
		},
	},
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
