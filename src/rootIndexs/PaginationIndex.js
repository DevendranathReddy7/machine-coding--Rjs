import { useEffect, useState } from "react";
import "../App.css";
import Pagination from "../usecases/Pagination/Pagination";

function App() {
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products/?limit=100");
        const data = await res.json();
        setProducts(data.products);
      } catch (e) {
        console.log(e);
      }
    };

    getProducts();
  }, []);

  const pageHandler = (i) => {
    setPages(i);
  };

  return (
    <div className="App">
      <Pagination data={products} curPage={pages} setPage={pageHandler} />
    </div>
  );
}

export default App;
