import { useContext } from "react"
import { UserContext } from "../../provider/ProductContext"
import { AiOutlineShoppingCart } from "react-icons/ai"

export const Header = () => {

    const { setIsOpen, isCount } = useContext(UserContext)

    const ModalOpen = () => {
        setIsOpen(true)
    }

    return(
        <>
            <div>
                <h1>Store fashion</h1>
            </div>
            
            <div>
                <div>
                   <button onClick={ModalOpen} type="submit"><AiOutlineShoppingCart /></button>
                </div>

                <div>
                    {isCount === 0 ? "0" : <span>{isCount}</span>}
                </div>
            </div>
        </>
    )
}