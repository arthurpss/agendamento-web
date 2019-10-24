import React, { Component } from 'react';
import Calendario from "../../components/calendario";

export default class Agendar extends Component {
    render() {
        return (
        <div>
            <h1>Calendário</h1>
            <Calendario/>
        </div> 
        )
    }
}