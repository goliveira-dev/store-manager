import axios from "axios"
import { useEffect, useState } from "react"
import './style.css'
import { useLocation, useNavigate } from "react-router-dom"

type DataType = {
  name: string
  price: number
  id: number
}

function ProductsList() {
  const [data, setData] = useState<DataType[]>();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {

  }, [location.key])

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then((response) => setData(response.data));
  }, [location.key])

  const removeProduct = (id: number) => {
    axios.delete(`http://localhost:3001/products/${id}`)
    navigate('/')
  }

  return (
    <div className="products-container">
      {
        data?.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>{`R$ ${product.price}`}</p>
            <button onClick={() => removeProduct(product.id)}>Remover</button>
          </div>
        ))
      }
    </div>
  )
}

export default ProductsList;