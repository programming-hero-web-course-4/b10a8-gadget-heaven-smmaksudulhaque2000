import toast from "react-hot-toast";

//Get All Data From Local Storage
const getCartList = () => {
    const cartListLocalData = localStorage.getItem('cart')
    
    if (cartListLocalData) {
        const cartList = JSON.parse(cartListLocalData)
        return cartList;
    } else{
        return [];
    }
}


//Add Local Storage
const addCartList = product => {
    const cartList = getCartList()
    const isExist = cartList.find(item => item.id === parseInt(product.id))
    if (isExist) {
        return toast.error('Already Added To Cart');
    }
    cartList.push(product)
    localStorage.setItem('cart', JSON.stringify(cartList))
    toast.success('Successfully Added To Cart!');

}




//Remove Local Storage
const deleteCartList = (id) => {
    const cartList = getCartList()
    const remaining = cartList.filter(item => item.id != id)
    localStorage.setItem('cart', JSON.stringify(remaining))
    toast.success('Successfully Removed To Cart!');
}






export {addCartList, getCartList, deleteCartList}