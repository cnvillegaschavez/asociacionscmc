import React, { useState, Fragment } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import ListCard from "./ListCard";
import { Route, Switch, useRouteMatch } from 'react-router';
import a from '../../images/A.jpg';
import a1 from '../../images/A1.jpg';
import a2 from '../../images/A2.jpg';
import a3 from '../../images/A3.jpg';
import a4 from '../../images/A4.jpg';
import a5 from '../../images/A5.jpg';
import b from '../../images/B.jpg';
import b1 from '../../images/B1.jpg';
import b2 from '../../images/B2.jpg';
import b3 from '../../images/B3.jpg';
import c from '../../images/C.png';
import c1 from '../../images/C1.jpg';
import c2 from '../../images/C2.jpg';
import c3 from '../../images/C3.jpg';
import c4 from '../../images/C4.jpg';
import c5 from '../../images/C5.jpg';
import c6 from '../../images/C6.jpg';
import c7 from '../../images/C7.jpg';
import d from '../../images/D.jpg';
import d1 from '../../images/D1.jpg';
import d2 from '../../images/D2.jpg';
import d3 from '../../images/D3.jpg';
import d4 from '../../images/D4.jpg';
import d5 from '../../images/D5.jpg';
import d6 from '../../images/D6.jpg';
import e from '../../images/E.jpg';
import e1 from '../../images/E1.jpg';
import e2 from '../../images/E2.jpg';
import e3 from '../../images/E3.jpg';
import e4 from '../../images/E4.jpg';
import e5 from '../../images/E5.jpg';
import f from '../../images/F.jpg';
import f1 from '../../images/F1.jpg';
import f2 from '../../images/F2.jpg';
import f3 from '../../images/F3.jpg';
import f4 from '../../images/F4.png';
import f5 from '../../images/F5.jpg';
import f6 from '../../images/F6.jpg';
import f7 from '../../images/F7.jpg';
import f8 from '../../images/F8.jpg';
import f9 from '../../images/F9.jpg';
import f10 from '../../images/F10.jpg';
import g from '../../images/G.jpg';
import g1 from '../../images/G1.jpg';
import g2 from '../../images/G2.jpg';
import g3 from '../../images/G3.jpg';
import g4 from '../../images/G4.jpg';
import g5 from '../../images/G5.jpg';
import g6 from '../../images/G6.jpg';
import g7 from '../../images/G7.jpg';
import g8 from '../../images/G8.jpg';
import h from '../../images/H.jpg';
import h1 from '../../images/H1.jpg';
import h2 from '../../images/H2.jpg';
import i from '../../images/I.jpg';
import i1 from '../../images/I1.jpg';
import i2 from '../../images/I2.jpg';
import i3 from '../../images/I3.jpg';
import i4 from '../../images/I4.jpg';
import i5 from '../../images/I5.jpg';
import i6 from '../../images/I6.jpg';
import i7 from '../../images/I7.jpg';
import i8 from '../../images/I8.jpg';
import i9 from '../../images/I9.jpg';
import i10 from '../../images/I10.jpg';
import j from '../../images/J.jpg';
import j1 from '../../images/J1.jpg';
import j2 from '../../images/J2.jpg';
import j3 from '../../images/J3.jpg';
import j4 from '../../images/J4.jpg';
import j5 from '../../images/J5.jpg';
import j6 from '../../images/J6.jpg';
import j7 from '../../images/J7.jpg';
import j8 from '../../images/J8.jpg';
import j9 from '../../images/J9.jpg';
import j10 from '../../images/J10.jpg';
import j11 from '../../images/J11.jpg';
import j12 from '../../images/J12.jpg';
import j13 from '../../images/J13.jpg';

const useStyle = makeStyles({
    title: {    
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: '50px',
        marginBottom: '20px'
    },
})

export const dataInitial = [
    {
        img: a,
        title: "Conciliación para MYPE",
        content: "Servicio enfocado en las micro y pequeñas empresas que permite solucionar conflictos comerciales de manera extrajudicial. Sobre todo, conserva relaciones comerciales con clientes, a menor precio y en el menor tiempo posible",
        more: [
            {
                img: a1,
                title: "Conciliación de Resolución de Contrato",
                content: "$300",
            },
            {
                img: a2,
                title: "Conciliación para Cobrar Deudas por Prestación de Servicios",
                content: "$300",
            },
            {
                img: a3,
                title: "Conciliación para Cobrar Deudas por Venta de Bienes",
                content: "$300",
            },
            {
                img: a4,
                title: "Conciliación para Cobrar Préstamos de Dinero",
                content: "$350",
            },
            {
                img: a5,
                title: "Conciliacion de Desalojo por Falta de Pago",
                content: "$300",
            },
        ]
    },
    {
        img: b,
        title: "Conciliación Empresarial",
        content: "Servicio orientado en el sector empresarial con el objeto  de resolver conflictos por vías no litigiosas. Por tanto, preserva la confidencialidad y las relaciones comerciales.",
        more: [
            {
                img: b1,
                title: "Conciliación para Cobrar Deudas por Prestación de Servicios",
                content: "$300",
            },
            {
                img: b2,
                title: "Conciliación para Cobrar Deudas por Venta de Bienes",
                content: "$300",
            },
            {
                img: b3,
                title: "Conciliación para Cobrar Préstamos de Dinero",
                content: "$350",
            },
        ]
    },
    {
        img: c,
        title: "Conciliación Familiar",
        content: "Servicio de conciliación extrajudicial de  conflictos familiares mediante diálogo. Por tanto, mantiene relaciones familiares, con absoluta confidencialidad y evitando procesos judiciales.",
        more: [
            {
                img: c1,
                title: "Conciliación por Pensión de Alimentos",
                content: "$300",
            },
            {
                img: c2,
                title: "Conciliación por Régimen de Visitas con externamiento",
                content: "$300",
            },
            {
                img: c3,
                title: "Conciliación de Exoneracion de persión de alimentos",
                content: "$350",
            },
            {
                img: c4,
                title: "Conciliación por Gastos de Embarazo",
                content: "$250",
            },
            {
                img: c5,
                title: "Conciliación de Régimen de Visias sin externamiento",
                content: "$300",
            },
            {
                img: c6,
                title: "Conciliación por Tenencia de hijos",
                content: "$300",
            },
            {
                img: c7,
                title: "Conciliación para divorcio",
                content: "300",
            },
        ]
    },
    {
        img: d,
        title: "Conciliación para Divorcio",
        content: "Servicio dirigido a cónyuges que desean divorciarse por mutuo acuerdo en Notarias  o Municipalidades. Sobre todo, con la finalidad de obtener acuerdos sobre pensión de alimentos, tenencia y régimen de visitas de hijos.",
        more: [
            {
                img: d1,
                title: "Conciliación por Régimen de Visitas con externamiento",
                content: "$300",
            },
            {
                img: d2,
                title: "Redaccion de cartas notariales",
                content: "$300",
            },
            {
                img: d3,
                title: "Conciliación por Régimen de Visitas sin externamiento",
                content: "$350",
            },
            {
                img: d4,
                title: "Abogado virtual",
                content: "$250",
            },
            {
                img: d5,
                title: "Conciliación por Pensión de Alimentos",
                content: "$300",
            },
            {
                img: d6,
                title: "Conciliación por Tenencia de hijos",
                content: "$300",
            },
        ]
    },
    {
        img: e,
        title: "Conciliación Social",
        content: "Servicio destinado a personas de escasos recursos económicos. Sobre todo, brinda la oportunidad de acceder a servicios de conciliación extrajudicial a precios accesibles y de calidad.",   
        more: [
            {
                img: e1,
                title: "Conciliación por Pensión de Alimentos",
                content: "$300",
            },
            {
                img: e2,
                title: "Conciliación por Régimen de Visitas con externamiento",
                content: "$300",
            },
            {
                img: e3,
                title: "Conciliación por Gastos de Embarazo",
                content: "$250",
            },
            {
                img: e4,
                title: "Conciliación de Régimen de Visias sin externamiento",
                content: "$300",
            },
            {
                img: e5,
                title: "Conciliación por Tenencia de hijos",
                content: "$300",
            },
        ]
    },
    {
        img: f,
        title: "Conciliación para Personas Naturales",
        content: "Servicio de conciliación extrajudicial destinado a personas naturales que ayuda solucionar sus conflictos en materia civil. Por ejemplo, pago deuda, desalojo.",  
        more: [
            {
                img: f1,
                title: "Conciliación de División y Partición de Bienes",
                content: "$300",
            },
            {
                img: f2,
                title: "Conciliación por Indenmización de daños a vehículos",
                content: "$300",
            },
            {
                img: f3,
                title: "Conciliación por Indenmización de Negligencia Médica",
                content: "$350",
            },
            {
                img: f4,
                title: "Conciliación por Indenmización de accidente de transito",
                content: "$300",
            },
            {
                img: f5,
                title: "Conciliación para Cobrar Deudas por Prestación de Servicios",
                content: "$300",
            },
            {
                img: f6,
                title: "Conciliación para Cobrar Deugaspor Venta de Bienes",
                content: "$300",
            },
            {
                img: f7,
                title: "Conciliación para Cobrar Préstamos de Dinero",
                content: "$350",
            },
            {
                img: f8,
                title: "Conciliación de Desalojo por Falta de Pago",
                content: "$300",
            },
            {
                img: f9,
                title: "Conciliación de Desalojo por Ocupante Precario",
                content: "$300",
            },
            {
                img: f10,
                title: "Conciliación de Desalojo por Vencimiento de contrato",
                content: "$300",
            },
        ]
    },
    {
        img: g,
        title: "Conciliación en Contrataciones del Estado",
        content: "Servicio de conciliación que ayuda a contratistas a solucionar controversias de manera amistosa en menor tiempo y costo. Por tanto,  evitas inciertos, largos y costosos procesos arbitrales.",  
        more: [
            {
                img: g1,
                title: "Conciliación de Liquidaciones en Contrataciones del Estado",
                content: "$499",
            },
            {
                img: g2,
                title: "Conciliación de Vicios Ocultos en Contrataciones del Estado",
                content: "$499",
            },
            {
                img: g3,
                title: "Conciliación de Indenmización en Contrataciones del Estado",
                content: "$499",
            },
            {
                img: g4,
                title: "Conciliación de Pago de Deudas en Contrataciones del Estado",
                content: "$499",
            },
            {
                img: g5,
                title: "Conciliación de Valoraziones y Metrados",
                content: "$499",
            },
            {
                img: g6,
                title: "Conciliación de Recepción y Conformidad",
                content: "$499",
            },
            {
                img: g7,
                title: "Conciliación de Resolución de Contratos de Suministros Servicios y Obras",
                content: "$499",
            },
            {
                img: g8,
                title: "Conciliación de Ampliación del Plazo",
                content: "$499",
            }
        ]
    },
    {
        img: h,
        title: "Conciliación fuera del Centro de Conciliación",
        content: "Servicio de conciliación extrajudicial orientado a satisfacer situaciones excepcionales de las partes como perdida de la libertad. Además, internamiento en centro de salud, etc.",  
        more: [
            {
                img: h1,
                title: "Conciliación por Pensión de Alimentos",
                content: "$300",
            },
            {
                img: h2,
                title: "Conciliación para Divorcio",
                content: "$300",
            },
        ]
    },
    {
        img: i,
        title: "Conciliación con Apoderado",
        content: "Servicio de conciliación extrajudicial que permite participar de un procedimiento conciliatorio a través de un apoderado. Del mismo modo, como lo haría el poderdante.",
        more: [
            {
                img: i1,
                title: "Conciliación de División y Partición de Bienes",
                content: "$300",
            },
            {
                img: i2,
                title: "Conciliación por Indenmización de daños a vehiculos",
                content: "$300",
            },
            {
                img: i3,
                title: "Conciliación de Indenmización de Negligencia Médica",
                content: "$300",
            },
            {
                img: i4,
                title: "Conciliación para Cobrar Deudas por Prestación de Servicios",
                content: "$300",
            },
            {
                img: i5,
                title: "Conciliación para Cobrar Deudas por Venta de Bienes",
                content: "$300",
            },
            {
                img: i6,
                title: "Conciliación para Cobrar Préstamos de Dinero",
                content: "$350",
            },
            {
                img: i7,
                title: "Conciliación de Desalojo por Falta de Pago",
                content: "$300",
            },
            {
                img: i8,
                title: "Conciliación de Desalojo por Ocupante Precario",
                content: "$300",
            },
            {
                img: i9,
                title: "Conciliación para Divorcio",
                content: "$300",
            },
            {
                img: i10,
                title: "Conciliación de Desalojo por Vencimiento de Contrato",
                content: "$300",
            }
        ]
    },
    {
        img: j,
        title: "Concilia hoy mismo",
        content: "Servicio de conciliación extrajudicial que posibilita conciliar el mismo día que presentas la solicitud de conciliación. En conclusión, te liberas del conflicto el mismo día.",
        more: [
            {
                img: j1,
                title: "Conciliación por Pensión de Alimentos",
                content: "$300",
            },
            {
                img: j2,
                title: "Conciliación por Régimen de Visitas con externamiento",
                content: "$300",
            },
            {
                img: j3,
                title: "Conciliación por Indenmización de daños a vehiculos",
                content: "$300",
            },
            {
                img: j4,
                title: "Conciliación para Cobrar Deudas por Prestación de Servicios",
                content: "$300",
            },
            {
                img: j5,
                title: "Conciliación para Cobrar Deudas por Venta de Bienes",
                content: "$300",
            },
            {
                img: j6,
                title: "Conciliación para Cobrar Préstamos de Dinero",
                content: "$350",
            },
            {
                img: j7,
                title: "Conciliación de Desalojo por Falta de Pago",
                content: "$300",
            },
            {
                img: j8,
                title: "Conciliación de Desalojo por Ocupante Precario",
                content: "$300",
            },
            {
                img: j9,
                title: "Conciliación de Exoneración de pensión de alimentos",
                content: "$300",
            },
            {
                img: j10,
                title: "Conciliación de Régimen de Visias sin externamiento",
                content: "$300",
            },
            {
                img: j11,
                title: "Conciliación por Tenencia de hijos",
                content: "$300",
            },
            {
                img: j12,
                title: "Conciliación para Divorcio",
                content: "$300",
            },
            {
                img: j13,
                title: "Conciliación de Desalojo por Vencimiento de Contrato",
                content: "$300",
            },
        ]
    }
];

const ServiceCenterConciliation = () => {
    const classes = useStyle() ;
    const {path, url} = useRouteMatch();
    const [ data, setData] = useState(dataInitial);

    return (
        <Fragment >
            <Typography className={classes.title} align="center">
                Servicios de Centro de Conciliación para ti
            </Typography>
            <ListCard data={data}/>
            
            
            
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
