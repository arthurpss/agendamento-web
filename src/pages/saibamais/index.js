import React, {Component} from 'react';

export default class Saibamais extends Component {

    constructor(props) {
        super(props);

        const medico = {
            nome: "Médico X",
            especialidade: "Oftalmo",
            nota: 4,
            horarios_disponiveis: []
        };

        this.agendamentos = [
            {
                srvc: "Pilates",
                nome: "Dr. Jacó",
                medico: medico,
                desc: "É um método de controle muscular desenvolvido por Joseph Pilates na década de 1920. A maioria dos exercícios é executada com a pessoa deitada. É atualmente uma técnica reconhecida para tratamento e prevenção de problemas na coluna vertebral."
            },
            {
                srvc: "Ortopedia",
                nome: "Dr. Rans Chucrute",
                medico: medico,
                desc: "Especialidade médica que cuida da saúde relacionadas aos elementos do aparelho locomotor, como ossos, músculos, ligamentos e articulações. A traumatologia é a especialidade médica que lida com o trauma do aparelho músculo-esquelético."
            },
            {
                srvc: "Traumatologia",
                nome: "Dr. Silva",
                medico: medico,
                desc: "Especialidade médica que investiga, diagnostica, trata e acompanha enfermidades relacionadas com fraturas e lesões ósseas e tendinosas provocadas por eventos traumáticos no aparelho músculo-esquelético ou locomotor, composto por: braços, mãos, pés, pernas, coluna , bacia, músculos, tendões e ligamentos."
            },
            {
                srvc: "Fisioterapia",
                nome: "Dr. Kronabuer",
                medico: medico,
                desc: "É uma ciência da saúde aplicada ao estudo, diagnóstico, prevenção e tratamento de disfunções cinéticas funcionais de órgãos e sistemas. Ela estuda, diagnostica, previne e trata os distúrbios, entre outros, cinético-funcionais (da biomecânica e funcionalidade humana) decorrentes de alterações de órgãos e sistemas humanos."
            },
            {
                srvc: "Fisiatria",
                nome: "Dr. Santana",
                medico: medico,
                desc: "Tem como foco a funcionalidade do organismo. Esta especialidade médica dedica-se à prevenção, diagnóstico e tratamento não cirúrgico de distúrbios associados à deficiência física em geral. Portanto, esta especialidade atende os pacientes que necessitam de tratamento e reabilitação física."
            },
            {
                srvc: "Psicodiagnóstico",
                nome: "Dr. Passos",
                medico: medico,
                desc: "É o processo de avaliação onde o principal objetivo é identificar e compreender a queixa e os possíveis distúrbios que o cliente apresenta para que o terapeuta consiga formular hipóteses diagnósticas mais precisas relacionadas às questões levantadas."
            }
        ];
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Serviços:</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Médicos</th>
                        <th scope="col">Especialidade</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.agendamentos.map(agendamento => {
                            return (
                                <tr>
                                    <th scope="row">{agendamento.srvc}</th>
                                    <td>{agendamento.desc}</td>
                                    <td>{agendamento.nome}</td>
                                    <td>{agendamento.medico.especialidade}</td>
                                    <td>
                                    <a href="/agendarservico" className="Info-Precos">saiba mais</a> 
                                        <button type="button"
                                                className="btn btn-success"
                                                data-toggle="modal"
                                                data-target="#modalConfirmacao"
                                        >Quero Agendar
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

