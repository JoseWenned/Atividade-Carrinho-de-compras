import { useContext } from "react"
import { UserContext } from "../../provider/ProductContext"

export const Cart = () => {

    const { 
        setIsOpen, 
        setItemProduct, 
        setIsCount, 
        totalValue, 
        itemProduct, 
        setTotalValue,
        handleRemoveProduct} = useContext(UserContext)

    const modalClose = () => {
        setIsOpen(false)
    }

    const removeAll = () => {
        setItemProduct([])
        setIsCount(0)
        setTotalValue(0)

        localStorage.removeItem("addProduct")
        localStorage.removeItem("count")
        localStorage.removeItem("totalValue")
    }

    return(
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <section className="w-80 h-80 bg-slate-50 rounded overflow-y-auto relative">
                <header className="flex justify-between bg-slate-200 h-10 rounded">
                    <h3 className="font-sans font-bold text-1xl mt-2 ml-2">Shopping Cart</h3>

                    <button className="font-sans font-bold text-1xl px-2 rounded h-9 w-9 mt-.5" onClick={modalClose} type="submit">X</button>
                </header>

                {setItemProduct.length !== 0 ? 
                <section>
                    <ul>
                        {itemProduct?.map((item) => {
                            return(
                                <li className="mt-5 ml-2 relative" key={item.id}>
                                    
                                    <div className="flex row justify-between">
                                        <img className="h-20 w-20" src={item.image} alt={item.name}/>
                                        <h3 className="mr-2 font-semibold font-sans">{item.name}</h3>
                                    </div>
                                    
                                    <div>
                                        <button className="border-2 rounded bg-slate-50 h-9 w-20 -mt-9 absolute ml-56 font-semibold font-sans" onClick={()=>  handleRemoveProduct(item)} type="sumit">Remove</button>
                                    </div>
                                    
                                </li>
                            )
                        })}
                    </ul>
                </section> : (<p>Cart empty</p>)}

                <footer className="absolute mt-20">
                    <div className="flex row justify-between mt-24 ml-2.5">
                        <h4 className="font-sans font-semibold ml-2">Total</h4>
                        {<p className="font-sans font-semibold mr-2">{totalValue.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</p>}
                    </div>

                    <button className="w-72 border-2 h-9 rounded bg-red-500 border-red-500 text-white font-sans font-semibold mt-4 ml-4 mb-2" onClick={removeAll} type="submit">Remove all</button>
                </footer>
            </section>
        </div>
       
    )
}