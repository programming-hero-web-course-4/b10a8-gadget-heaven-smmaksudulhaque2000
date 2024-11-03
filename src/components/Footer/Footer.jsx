

const Footer = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center p-12">
            <h3 className="text-4xl font-bold p-5">Gadget Heaven</h3>
            <p className="text-gray-500">Leading the way in cutting-edge technology and innovation.</p>
        </div>
        <hr className="p-5" />
        <div className="flex justify-between">
            <div>
                <ul className="text-center">
                    <li className="font-bold text-xl py-1">Services</li>
                    <li className="text-gray-500 py-1">Product Support</li>
                    <li className="text-gray-500 py-1">Order Tracking</li>
                    <li className="text-gray-500 py-1">Shipping & Delivery</li>
                    <li className="text-gray-500 py-1">Returns</li>
                </ul>
            </div>
            <div>
            <ul className="text-center">
                    <li className="font-bold text-xl py-1">Company</li>
                    <li className="text-gray-500 py-1">About Us</li>
                    <li className="text-gray-500 py-1">Careers</li>
                    <li className="text-gray-500 py-1">Contact</li>
                </ul>
            </div>
            <div>
            <ul className="text-center">
                    <li className="font-bold text-xl py-1">Legal</li>
                    <li className="text-gray-500 py-1">Terms of Service</li>
                    <li className="text-gray-500 py-1">Privacy Policy</li>
                    <li className="text-gray-500 py-1">Cookie Policy</li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default Footer;