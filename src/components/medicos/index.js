import React, {useState} from "react"
import { withRouter } from 'react-router-dom';
import medico_icone from "../../assets/icons/medico.svg";
import Rating from '@material-ui/lab/Rating';
import './style.css';

const Medicos = ({ history }) => {
    const [medicos, setNota] = useState([
        {
            id: 0,
            nome: "Dr. César",
            especialidade: "Pediatria",
            nota: 3,
            icone: medico_icone
        },
        {
            id: 1,
            nome: "Dr. Rodrigo",
            especialidade: "Urologia",
            nota: 2,
            icone: medico_icone
        },
        {
            id: 2,
            nome: "Dr. Arthur",
            especialidade: "Neurologia",
            nota: 3,
            icone: medico_icone
        },
        {
            id: 3,
            nome: "Dr. Murilo",
            especialidade: "Geral",
            nota: 1,
            icone: medico_icone
        }
    ]);

    const handleChange = (event, index) => {
        let novoArray = [...medicos];
        novoArray[index].nota = event.target.value;
        setNota(novoArray);
    };

    return (
        medicos.map((medico, index) => {
            return (
                <div className="row medicos" key={medico.nome}>
                    <div className="col-6">
                        <img src={medico.icone} alt="Ícone do médico"/>
                        <br/>
                        <p>{medico.nome}</p>
                    </div>
                    <div className="col-5">
                        <Rating
                            value={medico.nota}
                            name={medico.nome}
                            onChange={event => (handleChange(event, index))}
                        />
                    </div>
                    <div className="col-1">
                        <button className="btn btn-primary" onClick={event => history.push({
                            pathname: '/agendar',
                            state: {
                                medico: medico
                            }
                        })}>
                            Agendar
                        </button>
                    </div>
                </div>
            )
        })
    )
};

export default withRouter(Medicos);