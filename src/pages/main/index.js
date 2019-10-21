import React, {Component} from 'react';
import Carousel from "../../components/carousel";
import Filtros from "../../components/filtros"
import Especialidades from "../../components/especialidades";
import Medicos from "../../components/medicos"

export default class Main extends Component {

    //componentDidMount()

    render() {
        return <div>
            <Carousel/>
            <Filtros/>
            <div className="container" id="agendar">
                <Medicos/>
            </div>
            <ul id="informacoes"
                style={{textAlign: "center", marginTop: "10px"}}
                className="list-group">
                <Especialidades/>
            </ul>
        </div>
    }
}