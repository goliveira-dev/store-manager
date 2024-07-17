import { Link } from "react-router-dom";
import ProductsList from "../../components/ProductsList";


function Home() {
  return (
    <>
      <h1>Produtos</h1>
      <ProductsList />
      <Link to='add-product'><button>Adicionar novo Produto</button></Link>
    </>
  )
}

export default Home;
