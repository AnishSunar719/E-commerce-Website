import { createSlice } from "@reduxjs/toolkit";
import { sliderData } from "../../assets/data/dummyData";

export const sliderSlice = createSlice({
	name: "slider",
	initialState: {
		value: 0,
		length: sliderData.length,
	},
	reducers: {
		nextSlide(state, action) {
			try {
				state.value = action.payload > state.length - 1 ? 0 : action.payload;
			} catch (error) {
				console.log("Error from nextSlide reducer", error);
			}
		},
		prevSlide(state, action) {
			try {
				state.value = action.payload < 0 ? state.length - 1 : action.payload;
			} catch (error) {
				console.log("Error from nextSlide reducer", error);
			}
		},
		dotSlide(state, action) {
			try {
				state.value = action.payload;
			} catch (error) {
				console.log("Error from nextSlide reducer", error);
			}
		},
	},
});

export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
