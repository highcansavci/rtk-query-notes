import {useGetProductByIdQuery} from "../app/service/data.js";

const SpecificProduct = () => {
    const {data, isError, isLoading} = useGetProductByIdQuery(2);
    console.log(data);
    if (isError) {
        return <h1>Fetch Error!</h1>
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return <div>
        <h1>{data?.brand}</h1>
        <h1>{data?.category}</h1>
        <p>{data?.description}</p>
    </div>
};

export default SpecificProduct