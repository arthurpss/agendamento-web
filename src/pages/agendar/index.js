import React, {Component} from 'react';
import Calendario from "../../components/calendario";

export default class Agendar extends Component {

    render() {
        let medico = this.props.location.state.medico;
        return (
            <div >
                <Calendario/>
                <span> {medico.nome} </span>
            </div>
        )
    }
}