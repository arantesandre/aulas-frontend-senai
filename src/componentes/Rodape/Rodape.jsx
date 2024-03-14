import './Rodape.css';

const Rodape = () => {

    const anoAtual = new Date().getFullYear();

    return (

        <footer>

            <span className='texto-copyright'>

                Copyright © {anoAtual} - Todos os direitos reservados - AA Software.

            </span>

        </footer>
    )

};

export default Rodape;