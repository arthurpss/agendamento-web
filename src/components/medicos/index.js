import React, {useState} from "react"
import medico_icone from "../../assets/icons/medico.svg";
import Rating from '@material-ui/lab/Rating';

const Medicos = () => {
    const [medicos, setNota] = useState([
        {
            nome: "Dr. César",
            especialidade: "Pediatria",
            nota: 3,
            icone: medico_icone
        },
        {
            nome: "Dr. Rodrigo",
            especialidade: "Urologia",
            nota: 2,
            icone: medico_icone
        },
        {
            nome: "Dr. Arthur",
            especialidade: "Neurologia",
            nota: 3,
            icone: medico_icone
        },
        {
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
                        <a href={/agendar/}>
                            Agendar
                        </a>
                    </div>
                </div>
            )
        })
    )
};

export default Medicos;