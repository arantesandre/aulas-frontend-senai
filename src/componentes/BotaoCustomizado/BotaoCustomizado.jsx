import './BotaoCustomizado.css';

const BotaoCustomizado = (props) => {

    const classes = ['botao-customizado'];

    switch (props.tipo) {

        case 'primario':
            classes.push('botao-customizado-primario');
            break;

        case 'secundario':
            classes.push('botao-customizado-secundario');
            break;

        // case 'terciario':
        //     classes.push('botao-customizado-terciario');
        // break;

    }

    return <button className={classes.join(' ')} onClick={props.onClick}>{props.children}</button>


};

export default BotaoCustomizado;