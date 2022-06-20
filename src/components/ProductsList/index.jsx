import Product from "../Product";
import "./styles.css";

function ProductsList({ products, cartArray, setCartArray }) {
  return (
    <section className="productsList">
      {products.map((elem) => (
        <Product
          key={elem.id}
          id={elem.id}
          name={elem.name}
          category={elem.category}
          price={elem.price}
          img={elem.img}
          cartArray={cartArray}
          setCartArray={setCartArray}
        />
      ))}
    </section>
  );
}

export default ProductsList;
