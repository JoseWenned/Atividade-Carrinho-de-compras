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
        handleRemove} = useContext(UserContext)

    const modalClose = () => {
        setIsOpen(false)
    }

    const removeAll = () => {
        setItemProduct([])
        setIsCount(0)
        setTotalValue(0)
    }

    return(
        <section>
            <header>
                <h3>Shopping Cart</h3>

                <button onClick={modalClose} type="submit">X</button>
            </header>

            {setItemProduct.length !== 0 ? 
            <section>
                <ul>
                    {itemProduct?.map((item) => {
                        return(
                            <li key={item.id}>
                                <img src={item.image} alt={item.name}/>
                                <h3>{item.name}</h3>
                                <button onClick={()=>  handleRemove(item.id)} type="sumit">Remove</button>
                            </li>
                        )
                    })}
                </ul>
            </section> : (<p>Cart empty</p>)}

            <footer>
                <h4>Total</h4>
                {<p>{totalValue.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</p>}

                <button onClick={removeAll} type="submit">Remove all</button>
            </footer>
        </section>
    )
}