





import { createContext, useState, useEffect } from "react";
export const ShopContext = createContext("");

function Shopcontextprovider({ children }) {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [count, setCount] = useState(0);
    let t=0;

    function addtocart(items) {
        const isItemInCart = cart.find(item => item.id === items.id);
        if (isItemInCart) {
            alert("Warning! This product already exists in your cart. If you want to change its quantity, please go to the cart.");
        } else {
            setCount(prevCount => prevCount + 1);
            setCart(prevCart => [...prevCart, items]);
        }

        
    }

    function removetocart(itemId) {
        setCount((prevCount) => prevCount - 1);
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
        
          
    }

    function  updateQuantity(itemId, newQuantity) {
        setCart(prevCart => (
            prevCart.map(item => (
                item.id === itemId ? { ...item, quantity: newQuantity, total: item.price * newQuantity } : item
            ))
        ));

        

        
        
        
        
    }
    function calculatetotal() {
        let newTotal = 0;
        cart.map(e => {
            newTotal += e.total;
        });
        setTotal(newTotal);
        return newTotal;
    }

    let mydata = { addtocart, removetocart, cart, updateQuantity, calculatetotal,count };

    return (
        <ShopContext.Provider value={mydata}>
            {children}
        </ShopContext.Provider>
    );
}

export default Shopcontextprovider;
