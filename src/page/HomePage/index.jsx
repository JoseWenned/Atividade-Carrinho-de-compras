import { ProductList } from "../../components/ProductList/index"
import { Cart } from "../../components/Cart"
import { useContext } from "react"
import { UserContext } from "../../provider/ProductContext"
import { Header } from "../../components/Header"

export const HomePage = () => {

    const { isOpen } = useContext(UserContext)

    return(
        <main>  
            <Header />
            <ProductList />

            {isOpen && (
                <Cart />
            )}
        </main>
    )
}