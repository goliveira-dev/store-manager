import { Link } from "react-router-dom" 

function NotFound() {
  return (
    <>
      <h1>Pagina não encontrada</h1>
      <Link to='/'><button>Voltar a tela inicial</button></Link>
    </>
  )
}

export default NotFound;