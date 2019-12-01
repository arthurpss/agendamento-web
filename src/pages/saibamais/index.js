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
                data: "Pilates",
                nome: "Dr. Jacó",
                medico: medico,
                primeira_consulta: true,
                motivo: "motivo",
                plano: "Amil",
                hora_marcada: "É um método de controle muscular desenvolvido por Joseph Pilates na década de 1920. A maioria dos exercícios é executada com a pessoa deitada. É atualmente uma técnica reconhecida para tratamento e prevenção de problemas na coluna vertebral."
            },
            {
                data: "Ortopedia",
                nome: "Dr. Rans Chucrute",
                medico: medico,
                primeira_consulta: true,
                motivo: "motivo",
                plano: "Amil",
                hora_marcada: "Especialidade médica que cuida da saúde relacionadas aos elementos do aparelho locomotor, como ossos, músculos, ligamentos e articulações. A traumatologia é a especialidade médica que lida com o trauma do aparelho músculo-esquelético."
            },
            {
                data: "Traumatologia",
                nome: "Dr. Silva",
                medico: medico,
                primeira_consulta: true,
                motivo: "motivo",
                plano: "Amil",
                hora_marcada: "Especialidade médica que investiga, diagnostica, trata e acompanha enfermidades relacionadas com fraturas e lesões ósseas e tendinosas provocadas por eventos traumáticos no aparelho músculo-esquelético ou locomotor, composto por: braços, mãos, pés, pernas, coluna , bacia, músculos, tendões e ligamentos."
            },
            {
              data: "Fisioterapia",
              nome: "Dr. Kronabuer",
              medico: medico,
              primeira_consulta: true,
              motivo: "motivo",
              plano: "Amil",
              hora_marcada: "É uma ciência da saúde aplicada ao estudo, diagnóstico, prevenção e tratamento de disfunções cinéticas funcionais de órgãos e sistemas. Ela estuda, diagnostica, previne e trata os distúrbios, entre outros, cinético-funcionais (da biomecânica e funcionalidade humana) decorrentes de alterações de órgãos e sistemas humanos."
          },
          {
            data: "Fisiatria",
            nome: "Dr. Santana",
            medico: medico,
            primeira_consulta: true,
            motivo: "motivo",
            plano: "Amil",
            hora_marcada: "Tem como foco a funcionalidade do organismo. Esta especialidade médica dedica-se à prevenção, diagnóstico e tratamento não cirúrgico de distúrbios associados à deficiência física em geral. Portanto, esta especialidade atende os pacientes que necessitam de tratamento e reabilitação física."
        },
        {
          data: "Psicodiagnóstico",
          nome: "Dr. Passos",
          medico: medico,
          primeira_consulta: true,
          motivo: "motivo",
          plano: "Amil",
          hora_marcada: "É o processo de avaliação onde o principal objetivo é identificar e compreender a queixa e os possíveis distúrbios que o cliente apresenta para que o terapeuta consiga formular hipóteses diagnósticas mais precisas relacionadas às questões levantadas."
      }
        ];

        this.confirmar = this.confirmar.bind(this);
        this.state = {
            confirmacao: false,
            agendamentoACancelar: undefined
        }
    }

    confirmar(agendamento) {

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
                        <th scope="col">Valor</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.agendamentos.map(agendamento => {
                            return (
                                <tr>
                                    <th scope="row">{agendamento.data}</th>
                                    <td>{agendamento.hora_marcada}</td>
                                    <td>{agendamento.nome}</td>
                                    <td>{agendamento.medico.especialidade}</td>
                                    <td>
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
