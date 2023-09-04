import { useContext } from "react"
import { UserContext } from "../../provider/ProductContext"
import { toast } from "react-toastify"

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

        toast.warn('All products has been removed!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

    }

    return(
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <section className="w-96 h-80 bg-slate-50 rounded overflow-y-hidden relative">
                <header className="flex justify-between bg-slate-200 h-10 rounded">
                    <h3 className="font-sans font-bold text-1xl mt-2 ml-2">Shopping Cart</h3>

                    <button className="font-sans font-bold text-1xl px-2 rounded h-9 w-9 mt-.5" onClick={modalClose} type="submit">X</button>
                </header>

                {setItemProduct.length !== 0 ? 
                <section className="h-32 overflow-y-auto overflow-x-hidden mt-5">
                    <ul>
                        {itemProduct?.map((item) => {
                            return(
                                <li className="mt-5 ml-2 relative" key={item.id}>
                                    
                                    <div className="flex row justify-between">
                                        <img className="h-20 w-20" src={item.image} alt={item.name}/>
                                        <h3 className="mr-2 font-semibold font-sans">{item.name}</h3>
                                    </div>
                                    
                                    <div>
                                        <button className="border-2 rounded bg-slate-50 h-9 w-20 -mt-9 absolute ml-64 font-semibold font-sans" onClick={()=>  handleRemoveProduct(item)} type="sumit">Remove</button>
                                    </div>
                                    
                                </li>
                            )
                        })}
                    </ul>
                </section> : (<p>Cart empty</p>)}

                <footer className="mt-10">
                    <div className="flex row justify-between ml-2.5">
                        <h4 className="font-sans font-semibold ">Total</h4>
                        {<p className="font-sans font-semibold mr-2">{totalValue.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</p>}
                    </div>

                    <button className="w-80 border-2 h-9 rounded bg-red-500 border-red-500 text-white font-sans font-semibold mt-4 ml-8 mb-2" onClick={removeAll} type="submit">Remove all</button>
                </footer>
            </section>
        </div>
       
    )
}