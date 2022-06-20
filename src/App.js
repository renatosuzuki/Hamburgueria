import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./global.css";

function App() {
  const [products, setProducts] = useState([]);
  const [copyProducts, setCopyProducts] = useState([]); 


  useEffect(() => {
    async function API() {
      const response = await fetch(
        "https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
      );
      const data = await response.json();
      setProducts(data);
      setCopyProducts(data);
    }
    API();
  }, []);
  return (
    <div className="App">
      <Header products={products} setProducts={setProducts} copyProducts={copyProducts}/>
      <Main products={products}/>
    </div>
  );
}

export default App;
