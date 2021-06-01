import React, { useState, Fragment } from 'react';
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.png";
import img4 from "../../images/4.jpg";
import img5 from "../../images/5.jpg";
import img6 from "../../images/6.jpg";
import img7 from "../../images/7.jpg";
import img8 from "../../images/8.jpg";
import img9 from "../../images/9.jpg";
import img10 from "../../images/10.jpg";
import { makeStyles, Typography } from '@material-ui/core';
import ListCard from "./ListCard";

const useStyle = makeStyles({
    title: {    
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: '50px',
        marginBottom: '20px'
    },
})

const ServiceCenterConciliation = () => {
    const classes = useStyle() ;
    const [data, setData] = useState([
        {
            img: img1,
            title: "Conciliación para MYPE",
            description: "Servicio enfocado en las micro y pequeñas empresas que permite solucionar conflictos comerciales de manera extrajudicial. Sobre todo, conserva relaciones comerciales con clientes, a menor precio y en el menor tiempo posible"
        },
        {
            img: img2,
            title: "Conciliación Empresarial",
            description: "Servicio orientado en el sector empresarial con el objeto  de resolver conflictos por vías no litigiosas. Por tanto, preserva la confidencialidad y las relaciones comerciales.",
        },
        {
            img: img3,
            title: "Conciliación Familiar",
            description: "Servicio de conciliación extrajudicial de  conflictos familiares mediante diálogo. Por tanto, mantiene relaciones familiares, con absoluta confidencialidad y evitando procesos judiciales." 
        },
        {
            img: img4,
            title: "Conciliación para Divorcio",
            description: "Servicio dirigido a cónyuges que desean divorciarse por mutuo acuerdo en Notarias  o Municipalidades. Sobre todo, con la finalidad de obtener acuerdos sobre pensión de alimentos, tenencia y régimen de visitas de hijos."  
        },
        {
            img: img5,
            title: "Conciliación Social",
            description: "Servicio destinado a personas de escasos recursos económicos. Sobre todo, brinda la oportunidad de acceder a servicios de conciliación extrajudicial a precios accesibles y de calidad."    
        },
        {
            img: img6,
            title: "Conciliación para Personas Naturales",
            description: "Servicio de conciliación extrajudicial destinado a personas naturales que ayuda solucionar sus conflictos en materia civil. Por ejemplo, pago deuda, desalojo."  
        },
        {
            img: img7,
            title: "Conciliación en Contrataciones del Estado",
            description: "Servicio de conciliación que ayuda a contratistas a solucionar controversias de manera amistosa en menor tiempo y costo. Por tanto,  evitas inciertos, largos y costosos procesos arbitrales."  
        },
        {
            img: img8,
            title: "Conciliación fuera del Centro de Conciliación",
            description: "Servicio de conciliación extrajudicial orientado a satisfacer situaciones excepcionales de las partes como perdida de la libertad. Además, internamiento en centro de salud, etc."  
        },
        {
            img: img9,
            title: "Conciliación con Apoderado",
            description: "Servicio de conciliación extrajudicial que permite participar de un procedimiento conciliatorio a través de un apoderado. Del mismo modo, como lo haría el poderdante."
        },
        {
            img: img10,
            title: "Concilia hoy mismo",
            description: "Servicio de conciliación extrajudicial que posibilita conciliar el mismo día que presentas la solicitud de conciliación. En conclusión, te liberas del conflicto el mismo día."
        }

    ]);
   
    return (
        <Fragment >
            <Typography className={classes.title} align="center">
                Servicios de Centro de Conciliación para ti
            </Typography>
            
            <ListCard data={data}/>
        </Fragment>
    )
}

export default ServiceCenterConciliation;
