import { FaDollarSign } from "react-icons/fa";
const Card = ({product}) => {

    const {image, name, price} = product;
    
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl border border-gray-100">
                <figure className="p-4">
                    <img src={image} alt="Shoes" className="w-80 h-72 rounded-2xl"/>
                </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="flex gap-1 items-center text-xl font-bold">
                <FaDollarSign /> {price}
                </div>
                <div className="card-actions">
                <button className="btn btn-outline btn-primary rounded-full">View Details</button>
                </div>
            </div>
            </div>
        </div>
    );
};
export default Card;