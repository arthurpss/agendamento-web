import React from "react"
import "./styles.css"

const especialidades = [
    {

        titulo: "Pediatria",
        descricao: "Especialidade da Medicina dedicada ao cuidado da saúde de crianças, adolescentes e pré-adolescentes. Sua atuação abrange aspectos curativos, preventivos e de pesquisa."
    },
    {
        titulo: "Urologia",
        descricao: "Especialidade cirúrgica da medicina que trata do trato urinário de homens e de mulheres e do sistema reprodutor das pessoas do sexo masculino."
    },
    {
        titulo: "Neurologia",
        descricao: "Especialidade médica que se dedica ao estudo e tratamento das doenças que atingem o sistema nervoso central e periférico."
    },
    {
        titulo: "Ortopedia",
        descricao: "Especialidade médica que cuida da saúde relacionadas aos elementos do aparelho locomotor, como ossos, músculos, ligamentos e articulações."
    }
];

const Especialidades = () => especialidades.map(especialidade => (
    <li className="list-group-item" style={{marginTop: "20px"}}>
        <span><b>{especialidade.titulo}</b></span>
        <br/>
        <span style={{marginTop: "15px"}}>{especialidade.descricao}</span>
    </li>
));

export {Especialidades, especialidades};