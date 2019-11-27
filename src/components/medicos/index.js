import React, {useState, useEffect} from "react"
import { withRouter } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import './style.css';
import api from '../../service/api'
import IconeMedico from '../../assets/icons/medico.svg'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Medicos = ({ history }) => {
    toast.configure({
        autoClose: 3000,
        draggable: false,
        //etc you get the idea
      });
   
    const [medicos, setMedicos] = useState([]);


    useEffect(()=>{
     async function loadMedicos(){
        const response = await api.get('med');
        console.log(response.data);
        setMedicos(response.data)
     }
     loadMedicos();
    }, [medicos.nota]);

    // useEffect(()=>{
    //     async function uploadRating(){
    //         const med = await api.get('med');
    //         const response = await api.put(`med/${med.id}`, {nota: valorRating})
    //         .then(response=>{
    //            console.log(response)
    //         }).catch(err=>{
    //             console.log(err)
    //         })
    //     }
    // },valorRating);


    const handleChange = (event, index, medicoId) => {
       
        var valorRating = event.target.value;
        let novoArray = [...medicos];
        novoArray[index].nota = valorRating;
        console.log(valorRating);
        console.log(event.target);
        setMedicos(novoArray); 
        uploadRating(valorRating, medicoId)
     
        
    };

    async function uploadRating(rating, medId){
        console.log(rating,medId);
        
        try {
            const response = await api.put(`med/${medId}`, {rating: rating});    
            console.log(response.status);
            toast.info("Nota atualizada com sucesso", {
                position: toast.POSITION.TOP_CENTER
              });
           } catch (error) {
            toast.error("Erro ao atualizar nota", {
                position: toast.POSITION.TOP_CENTER
              });
           }
        
       } 


    return (
        medicos.map((medico, index) => {
            return (
                <div className="row medicos" key={medico.nome}>
                    <div className="col-6">
                        <img src={IconeMedico} alt="Ícone do médico"/>
                        <br/>
                        <p>{medico.nome}</p>
                    </div>
                    <div className="col-5">
                        <Rating
                            value={medico.nota}
                            name={medico.nome}
                            onChange={event => (handleChange(event, index, medico._id))}
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