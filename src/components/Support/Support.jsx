import { Helmet } from 'react-helmet';
import { useState } from 'react';

const Modal = ({ showModal, closeModal, formData }) => {
    if (!showModal) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-5 rounded-lg shadow-lg w-1/3">
                <h3 className="text-2xl font-bold mb-4">Accepted your request</h3>
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Product:</strong> {formData.productName}</p>
                <p><strong>Purchase Date:</strong> {formData.purchaseDate}</p>
                <p><strong>Mobile:</strong> {formData.mobileNumber}</p>
                <p><strong>Issue Details:</strong> {formData.issueDetails}</p>
                <p><strong>Address:</strong> {formData.address}</p>
                <button 
                    onClick={closeModal}
                    className="mt-4 px-4 py-2 bg-purple-600 text-white rounded"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

const Support = () => {
    const [formData, setFormData] = useState({
        name: '',
        productName: '',
        purchaseDate: '',
        mobileNumber: '',
        issueDetails: '',
        address: ''
    });
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setFormData({
            name: '',
            productName: '',
            purchaseDate: '',
            mobileNumber: '',
            issueDetails: '',
            address: ''
        });
    };

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Support | Gadget Heaven</title>
                <link rel="canonical" href="http://localhost:5173/dashboard/support" />
            </Helmet>

            <h3 className="text-center font-bold text-3xl">This is support</h3>

            <form onSubmit={handleSubmit} className="bg-purple-400 border border-gray-100 rounded-xl my-5 p-5 shadow-xl grid grid-cols-3 gap-5">
                <div className="flex flex-col items-center h-32">
                    <label className="text-xl font-bold" htmlFor="name">Your Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter Your Name"
                        className="shadow-xl border border-gray-200 rounded text-center p-2 h-12 w-3/4"
                    />
                </div>

                <div className="flex flex-col items-center h-32">
                    <label className="text-xl font-bold" htmlFor="productName">Product Name:</label>
                    <input
                        type="text"
                        id="productName"
                        name="productName"
                        value={formData.productName}
                        onChange={handleChange}
                        required
                        placeholder="Enter Product Name"
                        className="shadow-xl border border-gray-200 rounded text-center p-2 h-12 w-3/4"
                    />
                </div>

                <div className="flex flex-col items-center h-32">
                    <label className="text-xl font-bold" htmlFor="purchaseDate">Purchase Date:</label>
                    <input
                        type="date"
                        id="purchaseDate"
                        name="purchaseDate"
                        value={formData.purchaseDate}
                        onChange={handleChange}
                        required
                        className="shadow-xl border border-gray-200 rounded text-center p-2 h-12 text-gray-400 w-3/4"
                    />
                </div>

                <div className="flex flex-col items-center h-32">
                    <label className="text-xl font-bold" htmlFor="mobileNumber">Mobile Number:</label>
                    <input
                        type="tel"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                        placeholder="Enter phone Number"
                        className="shadow-xl border border-gray-200 rounded text-center p-2 h-12 w-full"
                    />
                </div>

                <div className="flex flex-col items-center h-32">
                    <label className="text-xl font-bold" htmlFor="issueDetails">Issue Details:</label>
                    <textarea
                        id="issueDetails"
                        name="issueDetails"
                        value={formData.issueDetails}
                        onChange={handleChange}
                        required
                        placeholder="Enter details"
                        className="shadow-xl border border-gray-200 rounded text-center p-2 h-12 w-full"
                    />
                </div>

                <div className="flex flex-col items-center h-32">
                    <label className="text-xl font-bold" htmlFor="address">Address:</label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        placeholder="Enter your Address"
                        className="shadow-xl border border-gray-200 rounded text-center p-2 h-12 w-full"
                    />
                </div>

                <div className="col-span-3 flex justify-center">
                    <button className="border border-purple-700 px-4 py-2 h-12 rounded font-bold text-white bg-purple-600" type="submit">
                        Submit
                    </button>
                </div>
            </form>

            <Modal showModal={showModal} closeModal={closeModal} formData={formData} />
        </div>
    );
};

export default Support;
