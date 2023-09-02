import { useContext } from "react"
import { UserContext } from "../../../provider/ProductContext"

export const ProductCard = () => {

    const { listProduct, handleAddProducts } = useContext(UserContext)

    return(
        <>
            {listProduct?.map((item) => {

                return(
                    <li className="mt-5 flex-col mb-3" key={item.id}>
        
                        <img className="w-64 h-72 mx-auto mt-4" src={item.image} alt={item.name}/>
                        <h3 className="font-sans w-15 h-10 font-semibold ml-2 mt-2 mx-auto flex justify-center">{item.name}</h3>
                        <p className="font-sans ml-2 mr-2 mt-2">{item.description}</p>

                        <div className="flex row justify-end mr-2 mt-2">
                            <span className="font-sans font-bold ml-2 mt-2 mr-3">R$: {item.price}</span>
                            <button className="bg-lime-500 rounded h-9 w-32 ml-2 font-sans font-bold text-white cursor-pointer hover:bg-white hover:text-lime-500 hover:border-2 hover:border-lime-500 " onClick={() => handleAddProducts(item)} type="submit">Add Product</button>
                        </div>   

                    </li>
                )

            })}
        </>
    )
}