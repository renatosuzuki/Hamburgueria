import './styles.css'

function CartProduct ({elem, cartArray, setCartArray, removedItem}) {
    function removeItem() {
        setCartArray(cartArray.filter((item) => (
            item !== removedItem
        )))
    }
    return (
    <div className='product'>
        <figure>
            <img src={elem.imgProduct} alt={elem.nameProduct} />
        </figure>
        <div className='productInfos'>
            <h2>{elem.nameProduct}</h2>
            <span>{elem.categoryProduct}</span>
        </div>
        <div className='buttonRemover'>
        <span className='remover' onClick={removeItem}>Remover</span>
        </div>
    </div>
    )
}

export default CartProduct