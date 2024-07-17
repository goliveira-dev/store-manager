import axios from "axios"
import { useEffect, useState } from "react"

type DataType = {
  name: string
  price: number
  id: number
}

function ProductsList() {
  const [data, setData] = useState<DataType[]>();

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then((response) => setData(response.data));
  }, [])

  return (
    <div>
      {
        data?.map((product) => (
          <div>
            <h2>{product.name}</h2>
            <p>{`R$ ${product.price}`}</p>
          </div>
        ))
      }
    </div>
  )
}

export default ProductsList;