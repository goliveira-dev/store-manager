import './style.css'

function Header() {
  return (
    <header className="header">
      <h1>Gestor de estoque</h1>
      <div className='sells'>
        <h2>Vendas</h2>
        <p>R$0,00</p>
      </div>
    </header>
  )
}

export default Header;