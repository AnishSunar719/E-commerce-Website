import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
	name: "wishList",
	initialState: JSON.parse(sessionStorage.getItem("wishList")) || {
		wishList: [],
		totalQty: 0,
	},
	reducers: {
		addToWishList(state, action) {
			try {
				const p = action.payload;
				state.wishList.push({
					id: p.id,
					name: p.name,
					img: p.img,
					price: p.price,
					wished: true,
				});
				state.totalQty++;
				const saveState = JSON.stringify(state);
				sessionStorage.setItem("wishList", saveState);
			} catch (error) {
				return error;
			}
		},
		removeFromWishList(state, action) {
			const p = action.payload;
			try {
				if (state.wishList.length > 1) {
					const wish = state.wishList.filter((item) => {
						return item.id !== p.id;
					});
					state.wishList = wish;
					state.totalQty--;
					const saveState = JSON.stringify(state);
					sessionStorage.setItem("wishList", saveState);
				} else {
					state.wishList = [];
					state.totalQty = 0;
					sessionStorage.removeItem("wishList");
					sessionStorage.removeItem("singleProduct");
					sessionStorage.removeItem("filteredData");
				}
			} catch (error) {
				return error;
			}
		},
		emptyWishList(state, action) {
			state.wishList = [];
			state.totalQty = 0;
			sessionStorage.removeItem("wishList");
			sessionStorage.removeItem("singleProduct");
			sessionStorage.removeItem("filteredData");
		},
	},
});

export default wishListSlice.reducer;
export const { addToWishList, removeFromWishList, emptyWishList } =
	wishListSlice.actions;
