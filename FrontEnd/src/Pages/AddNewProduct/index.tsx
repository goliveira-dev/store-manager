import { Link } from "react-router-dom";

function AddNewProduct() {
  return (
    <>
      <h1>Adicionar produto</h1>
      <form action="">
        <label className="input-name">
          <p>Nome do produto</p>
          <input type="text" />
        </label>
        <label className="input-price">
          <p>preço</p>
          <input type="number"/>
        </label>
      </form>
      <button>Cadastrar produto</button>
      <Link to='/' ><button>Cancelar</button></Link>
    </>
  )
}

export default AddNewProduct;