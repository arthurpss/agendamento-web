import React, {Component} from 'react';
import Calendario from "../../components/calendario";

export default class Agendar extends Component {

    render() {
        const agendamento = {
            medico: this.props.location.state.medico,
            horario: new Date(2019, 12, 29, 2, 2, 2),
            paciente: {
                nome: "X",
                idade: 10,
                peso: 80
            },
            primeira_consulta: true,
            plano: true,
            motivo: "xs"
        };

        return (
            <div>
                <div>
                    <img src={agendamento.medico.icone} alt="Ícone do médico"/>
                    <span> {agendamento.medico.nome} </span>
                </div>
                <Calendario/>
                <form>
                    <div className="form-group">
                        <label htmlFor="form-control">
                            Horário
                        </label>
                        <select className="form-control" id="form-control">
                            {
                                agendamento.medico.horarios_disponiveis.map(horario =>
                                    <option>
                                        {horario}
                                    </option>
                                )
                            }
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}