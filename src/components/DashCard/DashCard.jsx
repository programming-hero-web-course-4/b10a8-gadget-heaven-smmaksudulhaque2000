import { MdDeleteForever } from "react-icons/md";

const DashCard = ({product, handleRemoved}) => {
    const {image, name, description, price, id} = product;


    
    return (
        <div className="my-10 shadow-xl rounded-xl border border-gray-100">
            <div className="flex gap-5">
                <figure className="p-10">
                    <img src={image} alt="Shoes" className="rounded-xl"/>
                </figure>
            <div className="flex flex-col justify-center gap-5 pr-5">
                <h2 className="card-title">{name}</h2>
                <p className="text-gray-500 text-xs">{description}</p>
                <h3 className="font-bold">Price: $ {price}</h3>
            </div>
            <div className="text-4xl text-red-500 mr-3 mt-2 cursor-pointer">
            <MdDeleteForever onClick={() => handleRemoved(id)} />
            </div>
            </div>
        </div>
    );
};

export default DashCard;