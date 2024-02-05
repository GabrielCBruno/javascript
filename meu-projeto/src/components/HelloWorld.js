import Frase from "./Frase"
import SayMayName from "./SayMyName"

function HelloWorld () {
    return (
        <div>
            <Frase/>
            <h1>Meu primeiro componente</h1>
            <SayMayName nome = "Carlos"/>
        </div>
    )
}

export default HelloWorld