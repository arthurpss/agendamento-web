import React, {Component} from 'react';
import Moment from 'moment';
import api from '../../service/api'
import iconeMedico from "../../assets/icons/medico.svg";
import "./styles.css";
import Calendar from "react-calendar";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';

export default class Agendar extends Component {


    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        toast.configure({
            autoClose: 3000,
            draggable: false,
        })
    }

    handleSubmit(e, idMedico) {
        e.preventDefault();

        const formData = {};
        for (const field in this.refs) {
            formData[field] = this.refs[field].value;
        }
        Moment.locale('pt');
        const dataConvertida = Moment(this.refs.calendar.state.value).format("YYYY/MM/DD");
        const dataHoje = new Date();
        const dataAtual = Moment(dataHoje).format('YYYY/MM/DD');


        var data = {
            medico: idMedico,
            motivo: formData.motivo,
            first: this.refs.check.checked,
            planos: formData.plano,
            date: dataConvertida,
            namePacient: formData.paciente,
            hora: formData.horario
        };
        console.log("data", data);

        if (data.date >= dataAtual) {
            this.handleAgendamento(data);
        } else {
            toast.error("Data inválida", {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }

    async handleAgendamento(data) {
        try {
            const response = await api.post('agendar', data);

            toast.success("Agendamento realizado com sucesso", {
                position: toast.POSITION.TOP_CENTER
            });
            console.log(response);
        } catch (error) {
            toast.error("Erro ao realizar cadastro", {
                position: toast.POSITION.TOP_CENTER
            });
            console.log(error);
        }
    }

    render() {


        var agendamento = {
            medico: this.props.location.state.medico,
        };

        const planos = [
            "Nenhum",
            "Amil",
            "Brasdesco",
            "GEAP",
            "X"
        ];


        return (
            <div className="container">
                <form onSubmit={e => this.handleSubmit(e, agendamento.medico._id)}>
                    <div className="row">
                        <div className="col">
                            <img src={iconeMedico} alt="Ícone do médico"/>
                            <span ref="nomeMedico"> {agendamento.medico.nome} </span>
                            <br/>
                            <br/>
                            <div id="Calendario01">
                                <Calendar className="calendario"
                                          locale="pt-BR"
                                          ref="calendar"
                                />

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="form-control">
                                    Horário
                                </label>
                                <select className="form-control" id="form-control" ref="horario"
                                        onChange={this.getHorario} required>
                                    {
                                        agendamento.medico.horario_disponiveis.map(horario =>
                                            <option>
                                                {horario}
                                            </option>
                                        )
                                    }
                                </select>
                            </div>
                            <div>
                                <label htmlFor="form-control">
                                    Nome Paciente
                                </label>
                                <input placeholder="Digite seu nome"
                                       type="text"
                                       className="form-control"
                                       id="form-control"
                                       ref="paciente"
                                       required/>
                            </div>
                        </div>
                        <div className="col centralizado">
                            <div className="form-check">
                                <input className="form-check-input"
                                       type="checkbox"
                                       ref="check"
                                       id="primeira-consulta"/>
                                <label className="form-check-label"
                                       htmlFor="primeira-consulta">Primeira consulta?</label>
                            </div>
                        </div>
                        <div className="col centralizado">
                            <button className="btn btn-primary"
                                    id="botaoMarcar" type="submit">
                                Marcar
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            <label htmlFor="form-control">
                                Plano / Convênio
                            </label>
                            <select className="form-control"
                                    ref="plano"
                                    id="form-control"
                                    required>
                                {
                                    planos.map(plano =>
                                        <option>
                                            {plano}
                                        </option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="motivo">Motivo</label>
                                <input type="text"
                                       name="motivo"
                                       ref="motivo"
                                       id="motivo"
                                       className="form-control" aria-describedby="motivo-help"/>
                                <small id="motivo-help"
                                       className="form-text text-muted">
                                    Se achar necessário, descreva o motivo da consulta
                                </small>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}