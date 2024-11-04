import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Laptops = () => {
    const fakeData = useLoaderData();
    const [product, setProduct] = useState([])
    useEffect(() => {
        const filteredProduct = [...fakeData].filter(product => product.product === "iphone")
        setProduct(filteredProduct)
    }, [])
    
    if (product.length == 0) {
        return (
            <div className="flex flex-col justify-center items-center mx-auto gap-5">
                <h3 className="text-4xl text-red-500 font-bold">Sorry...!</h3>
                <h3 className="text-4xl text-red-500 font-bold">Data Not Found !</h3>
            </div>
        )
    }
    return (
        <div className="grid grid-cols-3 gap-10">
            {
                product.map(product => <Card key={product.id} product={product}></Card>)
            }
            
        </div>
    );
};

export default Laptops;