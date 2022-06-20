import './styles.css'

function CartTotal ({cartArray, setCartArray}) {
    function removeAllProducts () {
        setCartArray([])
    }
    const totalPrice = cartArray.reduce((acc, value) => (
        acc + Number(value.priceProduct)
    ), 0)
    return (
        <section className='cartTotal'>
            <div className='totalInfos'>
                <span className='totalText'>Total</span>
                <span className='totalPrice'>R$ {totalPrice.toFixed(2)}</span>
            </div>
            <div className='totalButton'>
                <button className='removeAll' onClick={removeAllProducts}>Remover Todos</button>
            </div>
        </section>
    )
}

export default CartTotal