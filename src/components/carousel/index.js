import React from 'react';
import outubro_rosa from "../../assets/images/outubro_rosa.jpg";
import pesquisa from "../../assets/images/pesquisa.jpg";
import remedios from "../../assets/images/remedios.jpg";
import bacteria from "../../assets/images/bacteria.jpg";

const informativos = [
    {
        imagem: outubro_rosa,
        descricao: "Símbolo do outubro rosa"
    },
    {
        imagem: bacteria,
        descricao: "Bactéria sendo cultivada artificialmente"
    },
    {
        imagem: pesquisa,
        descricao: "Microscópio sendo utilizado para pesquisas"
    },
    {
        imagem: remedios,
        descricao: "Remédios"
    }
];

const Informativos = () => (
    informativos.map(informativo =>
        (<div className="carousel-item active">
            <img
                src={informativo.imagem}
                className="d-block w-100" alt={informativo.descricao}/>
        </div>)
    )
);

const Carousel = () => (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
            <Informativos/>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
);

export default Carousel;