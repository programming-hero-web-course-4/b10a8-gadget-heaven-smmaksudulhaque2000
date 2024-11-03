import banner from '../../assets/banner.jpg'

const Home = () => {
    return (
        <div className='mt-[-80px] '>
            <div className='border-2 p-2 rounded-xl'>
            <div className="hero h-[600px] lg:min-h-screen bg-purple-500 rounded-xl">
            <div className="hero-content text-center mt-[-100px] lg:mt-[-400px]">
            <div>
                <h1 className="text-3xl lg:text-6xl font-bold text-white leading-snug">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="py-5 max-w-3xl mx-auto text-gray-300">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <button className="btn bg-white rounded-full text-purple-700 font-bold">Shop Now</button>
            </div>
            </div>
            </div>
            </div>
            <div className='w-3/4 mx-auto rounded-2xl border-2 border-white p-4 mt-[-100px] lg:mt-[-450px]'>
            <img src= {banner} alt="Banner" className='rounded-2xl' />
            </div>
        </div>
    );
};

export default Home;