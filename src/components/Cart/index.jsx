import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
import "./styles.css";

function Cart({ cartArray, setCartArray }) {
  return (
    <section className="cart">
      <div className="cartHeader">
        <h2>Carrinho de Compras</h2>
      </div>
      <div className="cartContent">
        {cartArray.length === 0 ? (
          <div className="empty">
            <h3>Sua sacola está vazia</h3>
            <span>Adicione Itens</span>
          </div>
        ) : (
          <>
            <div className="full">
              {cartArray.map((elem, index) => (
                <CartProduct
                  elem={elem}
                  key={index}
                  cartArray={cartArray}
                  setCartArray={setCartArray}
                  removedItem={elem}
                />
              ))}
            </div>
            <CartTotal cartArray={cartArray} setCartArray={setCartArray} />
          </>
        )}
      </div>
    </section>
  );
}

export default Cart;
