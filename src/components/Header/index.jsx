import "./styles.css";
import logo from "../../assets/images/logo.png";
import { useState } from "react";
import { useEffect } from "react";

function Header({ products, setProducts, copyProducts}) {
  const [input, setInput] = useState("");  

  function filter() {
    const filtered = products.filter(
      (elem) =>
        elem.name.toLowerCase().includes(input.toLowerCase()) ||
        elem.category.toLowerCase().includes(input.toLowerCase()) ||
        elem.name.toUpperCase().includes(input.toUpperCase()) ||
        elem.category.toUpperCase().includes(input.toUpperCase())
    );
    if (input === '') {
      setProducts(copyProducts)
    }
    else {
      setProducts(filtered)
    }
  }

  useEffect(() => {filter()}, [input])

  return (
    <header>
      <div className="container">
        <div className="header-flex">
          <img src={logo} alt="Burguer Kenzie" />
          <div className="pesquisa">
            <input
              type="text"
              placeholder="Sanduíche"
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={filter}>Pesquisar</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
