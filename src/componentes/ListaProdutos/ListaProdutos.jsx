import './ListaProdutos.css'

const ListaProdutos = () => {

    const produtos = [
        {
            id: 1,
            nome: 'Smartphone Samsung',
            preco: 2999,
            cores: ['#29d8d5', '#252a34', '#fc3766'],
        },

        {
            id: 2,
            nome: 'Notebook Acer',
            preco: 4999,
            cores: ['#ffd045', '#d4394b', '#f37c59'],
        },

        {
            id: 3,
            nome: 'Tablet Asus',
            preco: 1499,
            cores: ['#365069', '#47c1c8', '#f95786'],
        },
    ];

    return (

        <div>

            <h1>Lista de Produtos</h1>
            {produtos.map((item, index) => {

                return (

                    <div key={index}>

                        <strong>Nome: </strong>
                        <span>{item.nome}</span>
                        <br />

                        <strong>Preço: </strong>
                        <span>R$ {item.preco}</span>
                        <br />

                        <strong>Cores disponíveis</strong>

                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                            {item.cores.map((cor, index) => {

                                return (

                                    <div key={index} style={{ width: 24, height: 24, backgroundColor: cor }} />

                                );

                            })}

                        </div>
                        <br />
                        <br />

                    </div>

                );

            })}

        </div>

    );

};

export default ListaProdutos;