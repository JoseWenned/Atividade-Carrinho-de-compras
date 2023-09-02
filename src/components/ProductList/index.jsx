import { ProductCard } from "./ProductCard"


export const ProductList = () => {
    return(

        <section className="max-w-7xl mx-auto">
            <div className="">   
                <h2 className="font-sans text-2xl font-semibold px-2 mt-2 sm:grid-cols-2 sm:grid-rows-2">List Products</h2>
            </div>
            
            <ul className="grip grid-cols-1 grid-rows-1">
               <ProductCard />
            </ul>
        </section>

    )
}