import React, { useState, Fragment } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import ListCard from "./ListCard";
import { Route, Switch, useRouteMatch } from 'react-router';
import prueba from './prueba';

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
    const {path, url} = useRouteMatch();
    const [data, setData] = useState([
        {
            img: '../../images/A.jpg',
            title: "Conciliación para MYPE",
            description: "Servicio enfocado en las micro y pequeñas empresas que permite solucionar conflictos comerciales de manera extrajudicial. Sobre todo, conserva relaciones comerciales con clientes, a menor precio y en el menor tiempo posible",
            more: [
                {
                    img: "../../images/A1.jpg",
                    title: "Conciliación de Resolución de Contrato",
                    price: "$300",
                },
                {
                    img: "../../images/A2.jpg",
                    title: "Conciliación para Cobrar Deudas por Prestación de Servicios",
                    price: "$300",
                },
                {
                    img: "../../images/A3.jpg",
                    title: "Conciliación para Cobrar Deudas por Venta de Bienes",
                    price: "$300",
                },
                {
                    img: "../../images/A4.jpg",
                    title: "Conciliación para Cobrar Préstamos de Dinero",
                    price: "$350",
                },
                {
                    img: "../../images/A5.jpg",
                    title: "Conciliacion de Desalojo por Falta de Pago",
                    price: "$300",
                },
            ]
        },
        {
            img: "../../images/B.jpg",
            title: "Conciliación Empresarial",
            description: "Servicio orientado en el sector empresarial con el objeto  de resolver conflictos por vías no litigiosas. Por tanto, preserva la confidencialidad y las relaciones comerciales.",
            more: [
                {
                    img: "../../images/B1.jpg",
                    title: "Conciliación para Cobrar Deudas por Prestación de Servicios",
                    price: "$300",
                },
                {
                    img: "../../images/B2.jpg",
                    title: "Conciliación para Cobrar Deudas por Venta de Bienes",
                    price: "$300",
                },
                {
                    img: "../../images/B3.jpg",
                    title: "Conciliación para Cobrar Préstamos de Dinero",
                    price: "$350",
                },
            ]
        },
        {
            img: "../../images/C.png",
            title: "Conciliación Familiar",
            description: "Servicio de conciliación extrajudicial de  conflictos familiares mediante diálogo. Por tanto, mantiene relaciones familiares, con absoluta confidencialidad y evitando procesos judiciales.",
            more: [
                {
                    img: "../../images/C1.jpg",
                    title: "Conciliación por Pensión de Alimentos",
                    price: "$300",
                },
                {
                    img: "../../images/C2.jpg",
                    title: "Conciliación por Régimen de Visitas con externamiento",
                    price: "$300",
                },
                {
                    img: "../../images/C3.jpg",
                    title: "Conciliación de Exoneracion de persión de alimentos",
                    price: "$350",
                },
                {
                    img: "../../images/C4.jpg",
                    title: "Conciliación por Gastos de Embarazo",
                    price: "$250",
                },
                {
                    img: "../../images/C5.jpg",
                    title: "Conciliación de Régimen de Visias sin externamiento",
                    price: "$300",
                },
                {
                    img: "../../images/C6.jpg",
                    title: "Conciliación por Tenencia de hijos",
                    price: "$300",
                },
                {
                    img: "../../images/C7.jpg",
                    title: "Conciliación para divorcio",
                    price: "300",
                },
            ]
        },
        {
            img: "../../images/D.jpg",
            title: "Conciliación para Divorcio",
            description: "Servicio dirigido a cónyuges que desean divorciarse por mutuo acuerdo en Notarias  o Municipalidades. Sobre todo, con la finalidad de obtener acuerdos sobre pensión de alimentos, tenencia y régimen de visitas de hijos.",
            more: [
                {
                    img: "../../images/D1.jpg",
                    title: "Conciliación por Régimen de Visitas con externamiento",
                    price: "$300",
                },
                {
                    img: "../../images/D2.jpg",
                    title: "Redaccion de cartas notariales",
                    price: "$300",
                },
                {
                    img: "../../images/D3.jpg",
                    title: "Conciliación por Régimen de Visitas sin externamiento",
                    price: "$350",
                },
                {
                    img: "../../images/D4.jpg",
                    title: "Abogado virtual",
                    price: "$250",
                },
                {
                    img: "../../images/D5.jpg",
                    title: "Conciliación por Pensión de Alimentos",
                    price: "$300",
                },
                {
                    img: "../../images/D6.jpg",
                    title: "Conciliación por Tenencia de hijos",
                    price: "$300",
                },
            ]
        },
        {
            img: "../../images/E.jpg",
            title: "Conciliación Social",
            description: "Servicio destinado a personas de escasos recursos económicos. Sobre todo, brinda la oportunidad de acceder a servicios de conciliación extrajudicial a precios accesibles y de calidad.",   
            more: [
                {
                    img: "../../images/E1.jpg",
                    title: "Conciliación por Pensión de Alimentos",
                    price: "$300",
                },
                {
                    img: "../../images/E2.jpg",
                    title: "Conciliación por Régimen de Visitas con externamiento",
                    price: "$300",
                },
                {
                    img: "../../images/E3.jpg",
                    title: "Conciliación por Gastos de Embarazo",
                    price: "$250",
                },
                {
                    img: "../../images/E4.jpg",
                    title: "Conciliación de Régimen de Visias sin externamiento",
                    price: "$300",
                },
                {
                    img: "../../images/E5.jpg",
                    title: "Conciliación por Tenencia de hijos",
                    price: "$300",
                },
            ]
        },
        {
            img: "../../images/F.jpg",
            title: "Conciliación para Personas Naturales",
            description: "Servicio de conciliación extrajudicial destinado a personas naturales que ayuda solucionar sus conflictos en materia civil. Por ejemplo, pago deuda, desalojo.",  
            more: [
                {
                    img: "../../images/F1.jpg",
                    title: "Conciliación de División y Partición de Bienes",
                    price: "$300",
                },
                {
                    img: "../../images/F2.jpg",
                    title: "Conciliación por Indenmización de daños a vehículos",
                    price: "$300",
                },
                {
                    img: "../../images/F3.jpg",
                    title: "Conciliación por Indenmización de Negligencia Médica",
                    price: "$350",
                },
                {
                    img: "../../images/F4.png",
                    title: "Conciliación por Indenmización de accidente de transito",
                    price: "$300",
                },
                {
                    img: "../../images/F5.jpg",
                    title: "Conciliación para Cobrar Deudas por Prestación de Servicios",
                    price: "$300",
                },
                {
                    img: "../../images/F6.jpg",
                    title: "Conciliación para Cobrar Deugaspor Venta de Bienes",
                    price: "$300",
                },
                {
                    img: "../../images/F7.jpg",
                    title: "Conciliación para Cobrar Préstamos de Dinero",
                    price: "$350",
                },
                {
                    img: "../../images/F8.jpg",
                    title: "Conciliación de Desalojo por Falta de Pago",
                    price: "$300",
                },
                {
                    img: "../../images/F9.jpg",
                    title: "Conciliación de Desalojo por Ocupante Precario",
                    price: "$300",
                },
                {
                    img: "../../images/F10.jpg",
                    title: "Conciliación de Desalojo por Vencimiento de contrato",
                    price: "$300",
                },
            ]
        },
        {
            img: "../../images/G.jpg",
            title: "Conciliación en Contrataciones del Estado",
            description: "Servicio de conciliación que ayuda a contratistas a solucionar controversias de manera amistosa en menor tiempo y costo. Por tanto,  evitas inciertos, largos y costosos procesos arbitrales.",  
            more: [
                {
                    img: "../../images/G1.jpg",
                    title: "Conciliación de Liquidaciones en Contrataciones del Estado",
                    price: "$499",
                },
                {
                    img: "../../images/G2.jpg",
                    title: "Conciliación de Vicios Ocultos en Contrataciones del Estado",
                    price: "$499",
                },
                {
                    img: "../../images/G3.jpg",
                    title: "Conciliación de Indenmización en Contrataciones del Estado",
                    price: "$499",
                },
                {
                    img: "../../images/G4.jpg",
                    title: "Conciliación de Pago de Deudas en Contrataciones del Estado",
                    price: "$499",
                },
                {
                    img: "../../images/G5.jpg",
                    title: "Conciliación de Valoraziones y Metrados",
                    price: "$499",
                },
                {
                    img: "../../images/G6.jpg",
                    title: "Conciliación de Recepción y Conformidad",
                    price: "$499",
                },
                {
                    img: "../../images/G7.jpg",
                    title: "Conciliación de Resolución de Contratos de Suministros Servicios y Obras",
                    price: "$499",
                },
                {
                    img: "../../images/G8.jpg",
                    title: "Conciliación de Ampliación del Plazo",
                    price: "$499",
                }
            ]
        },
        {
            img: "../../images/H.jpg",
            title: "Conciliación fuera del Centro de Conciliación",
            description: "Servicio de conciliación extrajudicial orientado a satisfacer situaciones excepcionales de las partes como perdida de la libertad. Además, internamiento en centro de salud, etc.",  
            more: [
                {
                    img: "../../images/H1.jpg",
                    title: "Conciliación por Pensión de Alimentos",
                    price: "$300",
                },
                {
                    img: "../../images/H2.jpg",
                    title: "Conciliación para Divorcio",
                    price: "$300",
                },
            ]
        },
        {
            img: "../../images/I.jpg",
            title: "Conciliación con Apoderado",
            description: "Servicio de conciliación extrajudicial que permite participar de un procedimiento conciliatorio a través de un apoderado. Del mismo modo, como lo haría el poderdante.",
            more: [
                {
                    img: "../../images/I1.jpg",
                    title: "Conciliación de División y Partición de Bienes",
                    price: "$300",
                },
                {
                    img: "../../images/I2.jpg",
                    title: "Conciliación por Indenmización de daños a vehiculos",
                    price: "$300",
                },
                {
                    img: "../../images/I3.jpg",
                    title: "Conciliación de Indenmización de Negligencia Médica",
                    price: "$300",
                },
                {
                    img: "../../images/I4.jpg",
                    title: "Conciliación para Cobrar Deudas por Prestación de Servicios",
                    price: "$300",
                },
                {
                    img: "../../images/I5.jpg",
                    title: "Conciliación para Cobrar Deudas por Venta de Bienes",
                    price: "$300",
                },
                {
                    img: "../../images/I6.jpg",
                    title: "Conciliación para Cobrar Préstamos de Dinero",
                    price: "$350",
                },
                {
                    img: "../../images/I7.jpg",
                    title: "Conciliación de Desalojo por Falta de Pago",
                    price: "$300",
                },
                {
                    img: "../../images/I8.jpg",
                    title: "Conciliación de Desalojo por Ocupante Precario",
                    price: "$300",
                },
                {
                    img: "../../images/I9.jpg",
                    title: "Conciliación para Divorcio",
                    price: "$300",
                },
                {
                    img: "../../images/I10.jpg",
                    title: "Conciliación de Desalojo por Vencimiento de Contrato",
                    price: "$300",
                }
            ]
        },
        {
            img: "../../images/J.jpg",
            title: "Concilia hoy mismo",
            description: "Servicio de conciliación extrajudicial que posibilita conciliar el mismo día que presentas la solicitud de conciliación. En conclusión, te liberas del conflicto el mismo día.",
            more: [
                {
                    img: "../../images/J1.jpg",
                    title: "Conciliación por Pensión de Alimentos",
                    price: "$300",
                },
                {
                    img: "../../images/J2.jpg",
                    title: "Conciliación por Régimen de Visitas con externamiento",
                    price: "$300",
                },
                {
                    img: "../../images/J3.jpg",
                    title: "Conciliación por Indenmización de daños a vehiculos",
                    price: "$300",
                },
                {
                    img: "../../images/J4.jpg",
                    title: "Conciliación para Cobrar Deudas por Prestación de Servicios",
                    price: "$300",
                },
                {
                    img: "../../images/J5.jpg",
                    title: "Conciliación para Cobrar Deudas por Venta de Bienes",
                    price: "$300",
                },
                {
                    img: "../../images/J6.jpg",
                    title: "Conciliación para Cobrar Préstamos de Dinero",
                    price: "$350",
                },
                {
                    img: "../../images/J7.jpg",
                    title: "Conciliación de Desalojo por Falta de Pago",
                    price: "$300",
                },
                {
                    img: "../../images/J8.jpg",
                    title: "Conciliación de Desalojo por Ocupante Precario",
                    price: "$300",
                },
                {
                    img: "../../images/J9.jpg",
                    title: "Conciliación de Exoneración de pensión de alimentos",
                    price: "$300",
                },
                {
                    img: "../../images/J10.jpg",
                    title: "Conciliación de Régimen de Visias sin externamiento",
                    price: "$300",
                },
                {
                    img: "../../images/J11.jpg",
                    title: "Conciliación por Tenencia de hijos",
                    price: "$300",
                },
                {
                    img: "../../images/J12.jpg",
                    title: "Conciliación para Divorcio",
                    price: "$300",
                },
                {
                    img: "../../images/J13.jpg",
                    title: "Conciliación de Desalojo por Vencimiento de Contrato",
                    price: "$300",
                },
            ]
        }
    ]);

    return (
        <Fragment >
            <Typography className={classes.title} align="center">
                Servicios de Centro de Conciliación para ti
            </Typography>
            <ListCard data={data} url={url}/>
            
            
            
            {/* <Switch>
                <Route exact path={path}>
                    
                </Route>
                <Route exact path={`${path}/:${data.title}`} component={prueba}>
                   
                </Route>
            </Switch> */}
        </Fragment>
    )
}

export default ServiceCenterConciliation;
