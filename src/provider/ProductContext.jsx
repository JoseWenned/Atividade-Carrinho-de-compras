import { createContext, useEffect, useState } from "react" 
import { useQuery } from "@tanstack/react-query"
import { api } from "../service/index"

export const UserContext = createContext()

export const ThemeContext = ({ children }) => {

    const [ isOpen, setIsOpen ] = useState(false)
    const [ isCount, setIsCount ] = useState(0)
    const [ itemProduct, setItemProduct ] = useState([])
    const [ totalValue, setTotalValue ] = useState(0)

    const countSume = () => {
        setIsCount(isCount + 1)
    }

    const countSub = () => {
        setIsCount(isCount - 1)
    }

    const { data: listProduct } = useQuery({queryKey: ["posts"], queryFn: async () => {
        const { data } = await api.get("/products")
        return data
    }})

    const handleAddProducts = (product) => {

        const addProduct = itemProduct.some((item) => item.id === product.id)
        
        if(addProduct) {
            
        }else {

            setItemProduct([...itemProduct, product])
            countSume()
            setTotalValue(totalValue + product.price)
        }
    }

    const handleRemove = (productId) => {
        const removeProduct = itemProduct.filter((item) => item.id !== productId)

        if(removeProduct.length !== 0){
            const totalUpDate = totalUpDate.reduce((acc, current) => acc + current.price, 0)
            setTotalValue(totalUpDate)
        }

        countSub()
        setTotalValue(totalValue - productId.price)
        setItemProduct([...removeProduct])
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
            handleRemove,
            itemProduct,

            }}>
                
            { children }
        </UserContext.Provider>
    )
   
}

