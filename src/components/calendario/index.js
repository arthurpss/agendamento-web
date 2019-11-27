import React, { useState } from "react";
import Calendar from "react-calendar";
import "./styles.css";


const Calendario = () => {
    const [data, setData] = useState("");
    
function getData(e){
    setData(e);

    //  console.log("data", data);
    }
    return (
        <div>
            <Calendar className="calendario"
                      locale="pt-BR" onChange={getData}
                      value = {data}
                      />

        </div>
    );
};

export default Calendario;