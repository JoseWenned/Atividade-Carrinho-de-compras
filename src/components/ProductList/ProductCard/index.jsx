import { useContext } from "react"
import { UserContext } from "../../../provider/ProductContext"

export const ProductCard = () => {

    const { listProduct, handleAddProducts } = useContext(UserContext)

    return(
        <>
            {listProduct?.map((item) => {

                return(
                    <li key={item.id}>
                        <img src={item.image} alt={item.name}/>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <span>{item.price}</span>
                        <button onClick={() => handleAddProducts(item)} type="submit">Add Product</button>
                    </li>
                )

            })}
        </>
    )
}