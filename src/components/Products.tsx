import { useLocation, useParams } from "react-router"


const Products = () => {
    const params = useParams()
    const location = useLocation()
// console.log(params);
//     console.log(location);
    
    return (
        <div>
            <h1>Products Page</h1>
        </div>
    )
}

export default Products
