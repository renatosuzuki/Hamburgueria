import './styles.css'

function Product ({name, category, price, img, setCartArray, cartArray, id}) {
    const verification = cartArray.find((elem) => elem.idProduct === id)
    function addCart () {
        // const imgProduct = img
        // const nameProduct = name
        // const categoryProduct = category
        // const priceProduct = price
        // const idProduct = id
        
        // idProduct,
        // imgProduct,
        // nameProduct,
        // categoryProduct,
        // priceProduct
        
        const object = {
            idProduct: id,
            imgProduct: img,
            nameProduct: name,
            categoryProduct: category,
            priceProduct: price
        }
        if (verification) {
            alert("Produto já adicionado")
        }
        else {
            setCartArray([object, ...cartArray])
        }
    }
    
    return (
        <div className="card">
            <div className="imgContainer">
                <img src={img} alt={name} />
            </div>
            <div className="infos">
                <h1>{name}</h1>
                <span className="category">{category}</span>
                <span className="price">R$ {price}</span>
                <button onClick={addCart}>Adicionar</button>
            </div>
        </div>
    )
}

export default Product