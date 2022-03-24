import "./App.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Card from "./Card/Card";


function App() {
  
  const url = "https://hostave.net/demo/"
  const [product, setProduct] = useState([])
  const [promotion, setPromotion] = useState([])

  useEffect(() => {
    axios.get(url)
    .then (
      (res) => {
        setProduct(res.data.products)
        setPromotion(res.data.promotion)
      }
    )
  }, [product])

  
    
  return (
    
    <div className="App">
      <div className="container">
        {product.map(
            products =>(<Card
            products={products} 
            promotion={promotion}
        />))
        }
            </div>
      </div>
  );
}
export default App;
