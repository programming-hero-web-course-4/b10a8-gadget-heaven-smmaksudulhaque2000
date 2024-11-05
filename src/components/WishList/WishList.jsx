import { useEffect, useState } from "react";
import { deleteWishtList, getWishList } from "../Utils";
import DashWish from "../DashWish/DashWish";

const WishList = () => {
    const [wish, setWish] = useState([])
    useEffect(() => {
        const wishList = getWishList()
        setWish(wishList)
    } ,[])
    const handleRemoved = (id) =>{
        deleteWishtList(id)
        const wishList = getWishList()
        setWish(wishList)
    }


    return (
        <div className="w-3/4 mx-auto">
            <div >
            <h3 className="text-xl font-bold">WishList</h3>
            </div>
            <div>
                {
                    wish.map(wish => <DashWish handleRemoved={handleRemoved} product={wish} key= {wish.id}></DashWish>)
                }
            </div>
        </div>
    );
};

export default WishList;