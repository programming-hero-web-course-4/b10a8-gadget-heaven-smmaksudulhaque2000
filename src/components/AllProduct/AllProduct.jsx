import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const AllProduct = () => {
    const fakeData = useLoaderData(); 
    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {
                fakeData.map(product => <Card key={product.id} product={product}></Card>)
            }
            
        </div>
    );
};

export default AllProduct;