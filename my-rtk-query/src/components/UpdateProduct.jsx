import {useUpdateProductMutation} from "../app/service/data.js";

const UpdateProduct = ({productId}) => {
    const [updateProduct, {data, error, isLoading}] = useUpdateProductMutation();
    if (error) {
        return <h1>Fetch Error!</h1>
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    const handleUpdateProduct = async () => {
        try {
            const updatedProductData = {
                title: "Updated Title",
            };

            await updateProduct({
                id: productId,
                updatedProduct: updatedProductData,
            });
        } catch (err) {
            console.error("Error updating product:", err);
        }
    };

    return <div>
        <h1>{data?.title}</h1>
        <button onClick={handleUpdateProduct} disabled={isLoading}>Update Product</button>
    </div>
}

export default UpdateProduct