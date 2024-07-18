import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function AddNewProduct() {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  // const navigate = useNavigate();

  const addProductToDB = () => {
    axios.post('http://localhost:3001/products', {
      "name": name,
      "price": price,
    })
  }

  return (
    <>
      <h1>Adicionar produto</h1>
      <form action="">
        <label className="input-name">
          <p>Nome do produto</p>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
        </label>
        <label className="input-price">
          <p>preço</p>
          <input value={price} onChange={(e) => setPrice(e.target.value)} type="number"/>
        </label>
      </form>
      <Link to='/'>
        <button type="submit" onClick={() => addProductToDB()}>Cadastrar produto</button>
      </Link>
      <Link to='/' ><button>Cancelar</button></Link>
    </>
  )
}

export default AddNewProduct;