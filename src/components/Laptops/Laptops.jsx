import { useParams } from "react-router-dom";

const Laptops = () => {
    const obj = useParams();
    
    return (
        <div>
            <h3>This is Laptops</h3>
        </div>
    );
};

export default Laptops;