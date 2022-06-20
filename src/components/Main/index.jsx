import { useState } from 'react'
import Cart from '../Cart'
import ProductsList from '../ProductsList'
import './styles.css'

function Main ({products}) {
    const [cartArray, setCartArray] = useState([])
    return (
        <main className='container'>
            <div className='flex-main'>
                <ProductsList products={products} cartArray={cartArray} setCartArray={setCartArray}/>
                <Cart cartArray={cartArray} setCartArray={setCartArray}/>
            </div>
        </main>
    )
}

export default Main