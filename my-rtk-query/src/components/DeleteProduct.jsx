import {useDeleteProductMutation} from "../app/service/data.js";

const DeleteProduct = ({productId}) => {
    const [deleteProduct, {data, error, isLoading}] = useDeleteProductMutation();

    if (error) {
        return <h1>Fetch Error!</h1>
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    const handleDeleteProduct = async () => {
        try {
            await deleteProduct(productId);
        } catch (err) {
            console.log(err);
        }
    }

    return <div>
        <h1>{data?.title ? `${data.title} successfully deleted!`: ""}</h1>
        <button onClick={handleDeleteProduct} disabled={isLoading}>Delete Product</button>
    </div>
}

export default DeleteProduct;