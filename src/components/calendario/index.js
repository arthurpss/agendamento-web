import React from "react";
import Calendar from "react-calendar";
import "./styles.css";
var data = "";
function getData(e){
data = e;
// console.log(e);
}
const Calendario = () => {

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