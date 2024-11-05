import { useEffect, useState } from "react";
import { deleteCartList, getCartList } from "../Utils";
import Card from "../Card/Card";
import DashCard from "../DashCard/DashCard";


const WishList = () => {
    const [cart, srtCart] = useState([])
    useEffect(() => {
        const cartList = getCartList()
        srtCart(cartList)
    } ,[])
    const handleRemoved = (id) =>{
        deleteCartList(id)
        const cartList = getCartList()
        srtCart(cartList)
    }

    return (
        <div className="w-3/4 mx-auto">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold">Cart</h3>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-5">
                    <h3 className="text-xl font-bold">Total Cost: 999.99</h3>
                    <div className="flex gap-2">
                    <button className="btn">Sort by price</button>
                    <button className="btn">Purchase</button>
                    </div>
                </div>
            </div>
            <div>
                {
                    cart.map(cart => <DashCard handleRemoved={handleRemoved} product={cart} key= {cart.id}></DashCard>)
                }
            </div>
        </div>
    );
};

export default WishList;