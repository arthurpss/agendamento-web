import React, {Component} from 'react';
import Carousel from "../../components/carousel";
import Filtros from "../../components/filtros"
import Especialidades from "../../components/especialidades";
import Medicos from "../../components/medicos"
import ServicosPrecos from "../../components/ServicosPrecos"
import Convenios from "../../components/Convenios"

export default class Main extends Component {

    render() {
        return <div>
            <Carousel/>
            <div className="card-group"
                 style={{textAlign: "center", marginTop: "10px"}}>
                <ServicosPrecos/>
            </div>
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