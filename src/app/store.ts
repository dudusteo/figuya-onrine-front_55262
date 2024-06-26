import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import bearerTokenReducer from "../features/token/bearerTokenSlice";
import orderTokenReducer from "../features/token/orderTokenSlice";
import basketReducer from "../features/basket/basketSlice";


export const store = configureStore({
	reducer: {
		bearerToken: bearerTokenReducer,
		orderToken: orderTokenReducer,
		basket: basketReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
