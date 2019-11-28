import React, {Component} from 'react';

export default class Agendamentos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emCancelamento: undefined
        };
        this.confirmar = this.confirmar.bind(this);
        this.editar = this.editar.bind(this);
        this.cancelar = this.cancelar.bind(this);
    }

    confirmar(agendamento) {

    }

    editar(agendamento) {

    }

    cancelar() {
    }

    render() {
        // Mock de agendamentos
        const medico = {
            nome: "Médico X",
            especialidade: "Oftalmo",
            nota: 4,
            horarios_disponiveis: []
        };

        const agendamentos = [
            {
                data: "25/12/2019",
                nome: "Paciente X",
                medico: medico,
                primeira_consulta: true,
                motivo: "motivo",
                plano: "Amil",
                hora_marcada: "08:00"
            },
            {
                data: "25/12/2019",
                nome: "Paciente X",
                medico: medico,
                primeira_consulta: true,
                motivo: "motivo",
                plano: "Amil",
                hora_marcada: "10:00"
            },
            {
                data: "31/12/2019",
                nome: "Paciente X",
                medico: medico,
                primeira_consulta: true,
                motivo: "motivo",
                plano: "Amil",
                hora_marcada: "18:00"
            }
        ];

        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Data</th>
                        <th scope="col">Hora</th>
                        <th scope="col">Médico</th>
                        <th scope="col">Especialidade</th>
                        <th scope="col"/>
                        <th scope="col"/>
                        <th scope="col"/>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        agendamentos.map(agendamento => {
                            return (
                                <tr>
                                    <th scope="row">{agendamento.data}</th>
                                    <td>{agendamento.hora_marcada}</td>
                                    <td>{agendamento.medico.nome}</td>
                                    <td>{agendamento.medico.especialidade}</td>
                                    <td>
                                        <button type="button"
                                                className="btn btn-danger"
                                                data-toggle="modal"
                                                data-target="#modalCancelamento"
                                                onClick={this.cancelar}>Cancelar
                                        </button>
                                    </td>
                                    <td>
                                        <button type="button"
                                                className="btn btn-warning"
                                                onClick={this.editar}
                                        >Editar
                                        </button>
                                    </td>
                                    <td>
                                        <button type="button"
                                                className="btn btn-success"
                                                data-toggle="modal"
                                                data-target="#modalConfirmacao"
                                                onClick={this.setState({emCancelamento: {agendamento}})}>Confirmar
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                <div className="modal fade" id="modalCancelamento" tabIndex="-1" role="dialog"
                     aria-labelledby="modalCancelamento" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalCancelamentoTitle">Cancelar</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Tem certeza que deseja cancelar sua consulta?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primeary" data-dismiss="modal">Voltar</button>
                                <button type="button" className="btn btn-danger"
                                        onClick={this.cancelar}>Confirmar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="modalConfirmacao" tabIndex="-1" role="dialog"
                     aria-labelledby="modalConfirmacao" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalConfirmacaoTitle">Consulta confirmada!</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Lembre-se de trazer os documentos e exames necessários. :)
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal">Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
