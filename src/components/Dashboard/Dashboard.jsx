import { NavLink, Outlet } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Dashboard = () => {
    return (
        <div className="px-2">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard | Gadget Heaven</title>
                <link rel="canonical" href="http://localhost:5173/dashboard" />
            </Helmet>
            <div className="bg-purple-700 rounded-xl p-10 flex flex-col justify-center items-center gap-10">
            <div>
            <h3 className="text-center font-bold text-5xl text-white">Dashboard</h3>
            <p className="text-center  text-xl w-3/4 mx-auto py-10 text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="flex gap-5">

            <NavLink className={({isActive}) => `border border-gray-200 text-white w-36 text-center p-4 btn-outline font-bold rounded-full bg-transparent ${isActive ? 'bg-white text-purple-600' : 'hover:text-warning'}`} to={"/dashboard/cartlist"}>Cart</NavLink>
            <NavLink className={({isActive}) => `border border-gray-200 text-white w-36 text-center p-4 btn-outline font-bold rounded-full bg-transparent ${isActive ? 'bg-white text-purple-600' : 'hover:text-warning'}`} to={"/dashboard/wishlist"}>Wishlist</NavLink>
            </div>
        </div>
        <div className="mt-10">
        <Outlet></Outlet>
        </div>
        </div>
    );
};

export default Dashboard;