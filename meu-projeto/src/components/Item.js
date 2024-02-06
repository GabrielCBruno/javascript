import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}) {
    /*
            Os react fragments permite a criação de um componente sem elemento pai;
            A sintaxe é <> e </>, não há um nome para a tag.
    */
    return (    
        <>
            <li>
                {marca} - {ano_lancamento}
            </li>
        </>
    )
}

/*Informa o tipo de dado que cada prop vai aceitar*/
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: "Faltou a marca",
    ano_lancamento: 0,
}

export default Item