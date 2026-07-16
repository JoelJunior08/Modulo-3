import './Header.css'
function Header( {tema, aoAlterarTema} ) {
    const hoje = new Date().toLocaleDateString('pt-BR', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    })

return (
    <header className="cabecalho">
        <div className="cabecalho_faixa">
            <span>Edição de Nova York</span>
            <span>{hoje}</span>
            <span>U$ 1,50</span>
            <button className='cabecalho_tema' onClick={aoAlterarTema}>
                {tema === 'light' ? 'Escuro' : 'Claro'}
            </button>
        </div>

        <h1 className="cabecalho_titulo">CLARIM DIÁRIO</h1>
        <p className="cabecalho_lema">A verdade doa a quem doer - Inclusive a certos aracnídeos</p>

        <nav className="cabecalho_menu">
            <a href="">Cidade</a>
            <a href="">Ameaças Urbanas</a>
            <a href="">Opinião do Editor</a>
            <a href="">Esportes</a>
            <a href="">Classificados</a>
        </nav>
    </header>
)
}

export default Header