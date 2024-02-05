import { Link } from "react-router-dom";
import { StyleFooter } from "./style";

export function Footer(){

    return(
        <StyleFooter>
            <p>Desevolvido por Matheus</p>
            <Link to= '/ '>Pagina Inicial</Link> - <Link to= '/contato'>Contato</Link>



        </StyleFooter>
    )
}