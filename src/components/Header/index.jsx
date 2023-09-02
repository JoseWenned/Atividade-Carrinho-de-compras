import { useContext } from "react"
import { UserContext } from "../../provider/ProductContext"
import { AiOutlineShoppingCart } from "react-icons/ai"

export const Header = () => {

    const { setIsOpen, isCount } = useContext(UserContext)

    const ModalOpen = () => {
        setIsOpen(true)
    }

    return(
        <header className="flex row justify-between px-2 max-w-7xl mx-auto h-20 bg-slate-100">
            <div className="mt-5">
                <h1 className="font-sans font-bold text-3xl">Store fashion</h1>
            </div>
            
            <div className="flex justify-center mt-4 relative">
                <div className="z-10 mt-3.5">
                   <button onClick={ModalOpen} type="submit"><AiOutlineShoppingCart /></button>
                </div>

                <div className="z-20 absolute ml-3 mt-1 font-sans font-bold text-1xl">
                    {isCount === 0 ? "0" : <span>{isCount}</span>}
                </div>
            </div>
        </header>
    )
}