import React from 'react';
import "./styles.css";
import outubro_rosa from "../../assets/images/outubro_rosa.jpg";
import pesquisa from "../../assets/images/pesquisa.jpg";
import remedios from "../../assets/images/remedios.jpg";
import bacteria from "../../assets/images/bacteria.jpg";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Caroussel extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            accessibility: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000
        };
        return (
            <Slider {...settings}>
                <img className="informativo" src={outubro_rosa} alt="Outubro rosa"/>
                <img className="informativo" src={pesquisa} alt="Microscópio de pesquisa"/>
                <img className="informativo" src={bacteria} alt="Cultivo de bacteria"/>
                <img className="informativo" src={remedios} alt="Remédios"/>
            </Slider>
        );
    }
}

export default Caroussel;