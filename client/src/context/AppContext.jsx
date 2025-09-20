import { Children, createContext, useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext= createContext();

export const AppContextProvider= ({children})=>{
        const currency = import.meta.env.VITE_CURRENCY;
        const navigate= useNavigate();
        const [user, setUser]= useState(null);
        const [isSeller, setIsSeller]= useState(false);
        const [showLogin, setShowLogin]= useState(false)
        const [products, setProducts]= useState([])
        const [cartItems, setCartItems]= useState({})
        const [searchItem, setSearchItem]= useState('');
        const [userAddress, setUserAddress] = useState({
                firstName: '',
                lastName: '',
                email: '',
                street: '',
                city: '',
                state: '',
                pincode: '',
                country: '',
                phone: ''
        })
        const [paymentType, setPaymentType]= useState("COD")

        // fetch all products
        const fetchProducts= async()=>{
                setProducts(dummyProducts)
        }

        // add Products to Cart
        const addToCart= (itemId)=>{
                let cartData= structuredClone(cartItems);

                if(cartData[itemId]){
                        cartData[itemId]+= 1;
                } else{
                        cartData[itemId]= 1;
                }
                setCartItems(cartData);
                toast.success('Added to cart')
        }

        // update card item quantity
        const updateCartItem= (itemId, quantity)=>{
                let cartData= structuredClone(cartItems);
                cartData[itemId]= quantity;
                setCartItems(cartData)
                toast.success("Cart Updated")
        }

        // remove product from cart
        const removeFromCart=(itemId)=>{
                let cartData= structuredClone(cartItems);
                if(cartData[itemId]){
                        cartData[itemId] -= 1;
                        if(cartData[itemId]===0){
                                delete cartData[itemId];
                        }
                }
                toast.success('Removed from cart')
                setCartItems(cartData)
        }

        useEffect(()=>{
                fetchProducts()
        },[])

        // total cart items
        const countCart = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);

        // total amount in cart items
        const cartTotalAmount= () =>{
                let totalAmount=0;
                for(const items in cartItems){
                        let itemInfo= products.find((product)=> product._id === items);
                        if(cartItems[items]>0){
                                totalAmount+=itemInfo.offerPrice* cartItems[items];
                        }
                }
                return Math.floor(totalAmount * 100)/100;
        }


        const value= {navigate, user, setUser, isSeller, setIsSeller,products,currency,cartItems, addToCart,setCartItems,updateCartItem,removeFromCart,showLogin, setShowLogin,searchItem, setSearchItem,countCart,cartTotalAmount, userAddress, setUserAddress, paymentType, setPaymentType}

        return <AppContext.Provider value={value}>
                {children}
        </AppContext.Provider>
}

export const useAppContext= ()=> {
        return useContext(AppContext)
}