import * as React from "react";
import _ from "underscore";
import { useLocalStorage } from "../hooks/useLocalStorage"
import { PRODUCTS } from "../products";

const KEY = "cart";

export const ShopContext = React.createContext(null);

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useLocalStorage(KEY, [])

    const addToCart = (itemId) => {
        setCartItems((prev) => [...prev, { id: itemId }]);
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => prev.filter((item) => item.id !== itemId));
    };

    const getDataFromId = (itemId) => {
        return _.findWhere(PRODUCTS, { id: itemId })
    }

    const contextValue = { cartItems, addToCart, removeFromCart, getDataFromId };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
