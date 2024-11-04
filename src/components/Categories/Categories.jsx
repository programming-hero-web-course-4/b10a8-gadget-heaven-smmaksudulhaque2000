import { NavLink } from "react-router-dom";

const Categories = () => {
    return (
        <div className="w-2/12 rounded-xl flex flex-col gap-5 p-4 bg-gray-400 h-[600px]">

            <NavLink to={"/"}> <button className="btn-outline w-52 text-start text-gray-600 font-bold bg-gray-300 p-4 rounded-full mb-2">All Product</button> </NavLink>
            <NavLink to={"/laptops"}> <button className="btn-outline w-52 text-start text-gray-600 font-bold bg-gray-300 p-4 rounded-full mb-2">Laptops</button> </NavLink>
            <NavLink to={"/phones"}> <button className="btn-outline w-52 text-start text-gray-600 font-bold bg-gray-300 p-4 rounded-full mb-2">Phones</button> </NavLink>
            <NavLink to={"/accessories"}> <button className="btn-outline w-52 text-start text-gray-600 font-bold bg-gray-300 p-4 rounded-full mb-2">Accessories</button> </NavLink>
            <NavLink to={"/smartwatches"}> <button className="btn-outline w-52 text-start text-gray-600 font-bold bg-gray-300 p-4 rounded-full mb-2">Smart Watches</button> </NavLink>
            <NavLink to={"/macbook"}> <button className="btn-outline w-52 text-start text-gray-600 font-bold bg-gray-300 p-4 rounded-full mb-2">MacBook</button> </NavLink>
            <NavLink to={"/iphone"}> <button className="btn-outline w-52 text-start text-gray-600 font-bold bg-gray-300 p-4 rounded-full mb-2">IPhone</button> </NavLink>
        </div>
    );
};

export default Categories;

        