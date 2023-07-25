import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

export const ProductList = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state: any) => state.products);
    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`http://localhost:3000/products`);
            dispatch({ type: "fetchProducts", payload: data });
        };
        fetchProduct();
    }, []);
    const addProduct = async (product: any) => {
        const { data } = await axios.post(`http://localhost:3000/products`, product);
        dispatch({ type: "addProduct", payload: data });
    };
    const updateProduct = async (product: any) => {
        const { data } = await axios.put(`http://localhost:3000/products/${product.id}`, product);
        dispatch({ type: "updateProduct", payload: data });
    };
    const deleteProduct = async (id: any) => {
        await axios.delete(`http://localhost:3000/products/${id}`);
        dispatch({ type: "deleteProduct", payload: id });
    };
    return (
        <div>
            <div>
                {products?.map((item: any) => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </div>
            <button onClick={() => addProduct({ name: "produtc C" })}>Add</button>
            <button onClick={() => updateProduct({ name: "updated C", id: 3 })}>Update</button>
            <button onClick={() => deleteProduct(3)}>Delete</button>
        </div>
    );
};