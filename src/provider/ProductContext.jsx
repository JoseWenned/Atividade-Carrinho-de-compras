import { createContext, useEffect, useState } from "react" 
import { useQuery } from "@tanstack/react-query"
import { api } from "../service/index"

export const UserContext = createContext()

export const ThemeContext = ({ children }) => {

    const [ isOpen, setIsOpen ] = useState(false)
    const [ isCount, setIsCount ] = useState(JSON.parse(localStorage.getItem("count")) || 0)
    const [ itemProduct, setItemProduct ] = useState(JSON.parse(localStorage.getItem("addProduct")) || [])
    const [ totalValue, setTotalValue ] = useState(JSON.parse(localStorage.getItem("totalValue")) || 0)

    const countSume = () => {
        setIsCount(isCount + 1)
    }

    const countSub = () => {
        setIsCount(isCount - 1)
    }

    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(isCount))
    }, [isCount])

    useEffect(() => {
        localStorage.setItem("totalValue", JSON.stringify(totalValue))
    }, [totalValue])

    const { data: listProduct } = useQuery({queryKey: ["posts"], queryFn: async () => {
        const { data } = await api.get("/products")
        return data
    }})

    const handleAddProducts = (product) => {

        const addProduct = itemProduct.some((item) => item.id === product.id)
        
        if(addProduct) {
            
        }

        setItemProduct([...itemProduct, product])
        countSume()
        setTotalValue(totalValue + product.price)
        
        localStorage.setItem("addProduct", JSON.stringify([...itemProduct, product]))
        
    }

    const handleRemoveProduct = (product) => {

        const upDataCart = itemProduct.filter((p) => p.id !== product.id)

        if(upDataCart.length !== 0){
            
            const TotalValue = upDataCart.reduce((acc, current) => acc + current.price, 0)
            setTotalValue(TotalValue)
          
        } 

        setTotalValue(totalValue - product.price)
        setItemProduct(upDataCart)
        countSub()

        localStorage.setItem("addProduct", JSON.stringify(upDataCart))

    }
        
    return(
        <UserContext.Provider value={{ 
            
            listProduct, 
            isOpen, 
            setIsOpen, 
            isCount,
            setIsCount,
            setItemProduct,
            countSume,
            totalValue,
            setTotalValue,
            handleAddProducts,
            handleRemoveProduct,
            itemProduct,

            }}>
                
            { children }
        </UserContext.Provider>
    )
   
}

