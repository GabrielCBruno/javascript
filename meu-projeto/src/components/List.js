import Item from "./Item"

function List () {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <li><Item marca="Ferrari" ano_lancamento={1989}/></li>
                <li><Item marca="Fiat" ano_lancamento={2000}/></li>
                <li><Item marca="Renault" ano_lancamento={2017}/></li>
                <li><Item marca="Sandero" ano_lancamento={2012}/></li>
                <li><Item/></li>
            </ul>
        </>
    )
}

export default List