import React, { useState, Fragment } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
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
import TabCardGrid from 'components/cards/TabCardGrid';
import ThreeColSlider from 'components/cards/ThreeColSlider';
import PortfolioTwoCardsWithImage from 'components/cards/PortfolioTwoCardsWithImage';
import ProfileThreeColGrid from 'components/cards/ProfileThreeColGrid';
import ThreeColContactDetails from 'components/cards/ThreeColContactDetails';

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
        title: "Conciliaci??n para MYPE",
        content: "Servicio enfocado en las micro y peque??as empresas que permite solucionar conflictos comerciales de manera extrajudicial. Sobre todo, conserva relaciones comerciales con clientes, a menor precio y en el menor tiempo posible",
        more: [
            {
                img: a1,
                title: "Conciliaci??n de Resoluci??n de Contrato",
                content: "$300",
            },
            {
                img: a2,
                title: "Conciliaci??n para Cobrar Deudas por Prestaci??n de Servicios",
                content: "$300",
            },
            {
                img: a3,
                title: "Conciliaci??n para Cobrar Deudas por Venta de Bienes",
                content: "$300",
            },
            {
                img: a4,
                title: "Conciliaci??n para Cobrar Pr??stamos de Dinero",
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
        title: "Conciliaci??n Empresarial",
        content: "Servicio orientado en el sector empresarial con el objeto  de resolver conflictos por v??as no litigiosas. Por tanto, preserva la confidencialidad y las relaciones comerciales.",
        more: [
            {
                img: b1,
                title: "Conciliaci??n para Cobrar Deudas por Prestaci??n de Servicios",
                content: "$300",
            },
            {
                img: b2,
                title: "Conciliaci??n para Cobrar Deudas por Venta de Bienes",
                content: "$300",
            },
            {
                img: b3,
                title: "Conciliaci??n para Cobrar Pr??stamos de Dinero",
                content: "$350",
            },
        ]
    },
    {
        img: c,
        title: "Conciliaci??n Familiar",
        content: "Servicio de conciliaci??n extrajudicial de  conflictos familiares mediante di??logo. Por tanto, mantiene relaciones familiares, con absoluta confidencialidad y evitando procesos judiciales.",
        more: [
            {
                img: c1,
                title: "Conciliaci??n por Pensi??n de Alimentos",
                content: "$300",
            },
            {
                img: c2,
                title: "Conciliaci??n por R??gimen de Visitas con externamiento",
                content: "$300",
            },
            {
                img: c3,
                title: "Conciliaci??n de Exoneracion de persi??n de alimentos",
                content: "$350",
            },
            {
                img: c4,
                title: "Conciliaci??n por Gastos de Embarazo",
                content: "$250",
            },
            {
                img: c5,
                title: "Conciliaci??n de R??gimen de Visias sin externamiento",
                content: "$300",
            },
            {
                img: c6,
                title: "Conciliaci??n por Tenencia de hijos",
                content: "$300",
            },
            {
                img: c7,
                title: "Conciliaci??n para divorcio",
                content: "300",
            },
        ]
    },
    {
        img: d,
        title: "Conciliaci??n para Divorcio",
        content: "Servicio dirigido a c??nyuges que desean divorciarse por mutuo acuerdo en Notarias  o Municipalidades. Sobre todo, con la finalidad de obtener acuerdos sobre pensi??n de alimentos, tenencia y r??gimen de visitas de hijos.",
        more: [
            {
                img: d1,
                title: "Conciliaci??n por R??gimen de Visitas con externamiento",
                content: "$300",
            },
            {
                img: d2,
                title: "Redaccion de cartas notariales",
                content: "$300",
            },
            {
                img: d3,
                title: "Conciliaci??n por R??gimen de Visitas sin externamiento",
                content: "$350",
            },
            {
                img: d4,
                title: "Abogado virtual",
                content: "$250",
            },
            {
                img: d5,
                title: "Conciliaci??n por Pensi??n de Alimentos",
                content: "$300",
            },
            {
                img: d6,
                title: "Conciliaci??n por Tenencia de hijos",
                content: "$300",
            },
        ]
    },
    {
        img: e,
        title: "Conciliaci??n Social",
        content: "Servicio destinado a personas de escasos recursos econ??micos. Sobre todo, brinda la oportunidad de acceder a servicios de conciliaci??n extrajudicial a precios accesibles y de calidad.",   
        more: [
            {
                img: e1,
                title: "Conciliaci??n por Pensi??n de Alimentos",
                content: "$300",
            },
            {
                img: e2,
                title: "Conciliaci??n por R??gimen de Visitas con externamiento",
                content: "$300",
            },
            {
                img: e3,
                title: "Conciliaci??n por Gastos de Embarazo",
                content: "$250",
            },
            {
                img: e4,
                title: "Conciliaci??n de R??gimen de Visias sin externamiento",
                content: "$300",
            },
            {
                img: e5,
                title: "Conciliaci??n por Tenencia de hijos",
                content: "$300",
            },
        ]
    },
    {
        img: f,
        title: "Conciliaci??n para Personas Naturales",
        content: "Servicio de conciliaci??n extrajudicial destinado a personas naturales que ayuda solucionar sus conflictos en materia civil. Por ejemplo, pago deuda, desalojo.",  
        more: [
            {
                img: f1,
                title: "Conciliaci??n de Divisi??n y Partici??n de Bienes",
                content: "$300",
            },
            {
                img: f2,
                title: "Conciliaci??n por Indenmizaci??n de da??os a veh??culos",
                content: "$300",
            },
            {
                img: f3,
                title: "Conciliaci??n por Indenmizaci??n de Negligencia M??dica",
                content: "$350",
            },
            {
                img: f4,
                title: "Conciliaci??n por Indenmizaci??n de accidente de transito",
                content: "$300",
            },
            {
                img: f5,
                title: "Conciliaci??n para Cobrar Deudas por Prestaci??n de Servicios",
                content: "$300",
            },
            {
                img: f6,
                title: "Conciliaci??n para Cobrar Deugaspor Venta de Bienes",
                content: "$300",
            },
            {
                img: f7,
                title: "Conciliaci??n para Cobrar Pr??stamos de Dinero",
                content: "$350",
            },
            {
                img: f8,
                title: "Conciliaci??n de Desalojo por Falta de Pago",
                content: "$300",
            },
            {
                img: f9,
                title: "Conciliaci??n de Desalojo por Ocupante Precario",
                content: "$300",
            },
            {
                img: f10,
                title: "Conciliaci??n de Desalojo por Vencimiento de contrato",
                content: "$300",
            },
        ]
    },
    {
        img: g,
        title: "Conciliaci??n en Contrataciones del Estado",
        content: "Servicio de conciliaci??n que ayuda a contratistas a solucionar controversias de manera amistosa en menor tiempo y costo. Por tanto,  evitas inciertos, largos y costosos procesos arbitrales.",  
        more: [
            {
                img: g1,
                title: "Conciliaci??n de Liquidaciones en Contrataciones del Estado",
                content: "$499",
            },
            {
                img: g2,
                title: "Conciliaci??n de Vicios Ocultos en Contrataciones del Estado",
                content: "$499",
            },
            {
                img: g3,
                title: "Conciliaci??n de Indenmizaci??n en Contrataciones del Estado",
                content: "$499",
            },
            {
                img: g4,
                title: "Conciliaci??n de Pago de Deudas en Contrataciones del Estado",
                content: "$499",
            },
            {
                img: g5,
                title: "Conciliaci??n de Valoraziones y Metrados",
                content: "$499",
            },
            {
                img: g6,
                title: "Conciliaci??n de Recepci??n y Conformidad",
                content: "$499",
            },
            {
                img: g7,
                title: "Conciliaci??n de Resoluci??n de Contratos de Suministros Servicios y Obras",
                content: "$499",
            },
            {
                img: g8,
                title: "Conciliaci??n de Ampliaci??n del Plazo",
                content: "$499",
            }
        ]
    },
    {
        img: h,
        title: "Conciliaci??n fuera del Centro de Conciliaci??n",
        content: "Servicio de conciliaci??n extrajudicial orientado a satisfacer situaciones excepcionales de las partes como perdida de la libertad. Adem??s, internamiento en centro de salud, etc.",  
        more: [
            {
                img: h1,
                title: "Conciliaci??n por Pensi??n de Alimentos",
                content: "$300",
            },
            {
                img: h2,
                title: "Conciliaci??n para Divorcio",
                content: "$300",
            },
        ]
    },
    {
        img: i,
        title: "Conciliaci??n con Apoderado",
        content: "Servicio de conciliaci??n extrajudicial que permite participar de un procedimiento conciliatorio a trav??s de un apoderado. Del mismo modo, como lo har??a el poderdante.",
        more: [
            {
                img: i1,
                title: "Conciliaci??n de Divisi??n y Partici??n de Bienes",
                content: "$300",
            },
            {
                img: i2,
                title: "Conciliaci??n por Indenmizaci??n de da??os a vehiculos",
                content: "$300",
            },
            {
                img: i3,
                title: "Conciliaci??n de Indenmizaci??n de Negligencia M??dica",
                content: "$300",
            },
            {
                img: i4,
                title: "Conciliaci??n para Cobrar Deudas por Prestaci??n de Servicios",
                content: "$300",
            },
            {
                img: i5,
                title: "Conciliaci??n para Cobrar Deudas por Venta de Bienes",
                content: "$300",
            },
            {
                img: i6,
                title: "Conciliaci??n para Cobrar Pr??stamos de Dinero",
                content: "$350",
            },
            {
                img: i7,
                title: "Conciliaci??n de Desalojo por Falta de Pago",
                content: "$300",
            },
            {
                img: i8,
                title: "Conciliaci??n de Desalojo por Ocupante Precario",
                content: "$300",
            },
            {
                img: i9,
                title: "Conciliaci??n para Divorcio",
                content: "$300",
            },
            {
                img: i10,
                title: "Conciliaci??n de Desalojo por Vencimiento de Contrato",
                content: "$300",
            }
        ]
    },
    {
        img: j,
        title: "Concilia hoy mismo",
        content: "Servicio de conciliaci??n extrajudicial que posibilita conciliar el mismo d??a que presentas la solicitud de conciliaci??n. En conclusi??n, te liberas del conflicto el mismo d??a.",
        more: [
            {
                img: j1,
                title: "Conciliaci??n por Pensi??n de Alimentos",
                content: "$300",
            },
            {
                img: j2,
                title: "Conciliaci??n por R??gimen de Visitas con externamiento",
                content: "$300",
            },
            {
                img: j3,
                title: "Conciliaci??n por Indenmizaci??n de da??os a vehiculos",
                content: "$300",
            },
            {
                img: j4,
                title: "Conciliaci??n para Cobrar Deudas por Prestaci??n de Servicios",
                content: "$300",
            },
            {
                img: j5,
                title: "Conciliaci??n para Cobrar Deudas por Venta de Bienes",
                content: "$300",
            },
            {
                img: j6,
                title: "Conciliaci??n para Cobrar Pr??stamos de Dinero",
                content: "$350",
            },
            {
                img: j7,
                title: "Conciliaci??n de Desalojo por Falta de Pago",
                content: "$300",
            },
            {
                img: j8,
                title: "Conciliaci??n de Desalojo por Ocupante Precario",
                content: "$300",
            },
            {
                img: j9,
                title: "Conciliaci??n de Exoneraci??n de pensi??n de alimentos",
                content: "$300",
            },
            {
                img: j10,
                title: "Conciliaci??n de R??gimen de Visias sin externamiento",
                content: "$300",
            },
            {
                img: j11,
                title: "Conciliaci??n por Tenencia de hijos",
                content: "$300",
            },
            {
                img: j12,
                title: "Conciliaci??n para Divorcio",
                content: "$300",
            },
            {
                img: j13,
                title: "Conciliaci??n de Desalojo por Vencimiento de Contrato",
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
            
            
            <ThreeColSlider/>
           
        </Fragment>
    )
}

export default ServiceCenterConciliation;
