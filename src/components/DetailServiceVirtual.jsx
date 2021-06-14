import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import smoothScrollTop from "../shared/smoothScrollTop";

const DetailServiceVirtual = (props) => {
    const { title } = useParams();
    const phone = "+51962212903";
    const message = `Hola, quisiera consultar acerca del servicio de "${title}"`;
    
    useEffect(() => {
        smoothScrollTop();
    }, []);

    return (
        <div id='detail-services-virtual'>
            <div className='container'>
                <div className='row'>
                    {props.data
                        ? props.data.filter(element => element.title === title).map((elementFilter, i) => (
                            elementFilter.more.map((value, i) => (
                            <div>
                                <div className='col-xs-12 col-md-6'>
                                    <img src={`/${value.img}`} className='img-responsive' alt='no hay x' />
                                </div>
                                <div className='col-xs-12 col-md-6'>
                                    <div className='about-text'>
                                        <h2>{ title }</h2>    
                                        <div>
                                            <p className="text-justify">{value.comment ? value.comment : 'loading...'}</p>
                                            <p className="text-justify">{value.description1 ? value.description1 : 'loading...'}</p>
                                            <p className="text-justify">{value.description2 ? value.description2 : ''}</p>
                                            <div className='list-style'>
                                                <div className='col-xs-7'>
                                                    <ul>
                                                        {value.list
                                                        ? value.list.map((d, i) => (
                                                            <li key={`${d}-${i}`}> 
                                                                {d}
                                                            </li>
                                                            ))
                                                        : 'loading'}
                                                    </ul>
                                                </div>
                                                <div className="col-xs-5">
                                                    <a href={`https://api.whatsapp.com/send?phone=${phone}&text=${message}`}>
                                                        <button className="btn-custom">CONTRATAR</button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))
                        ))
                        : 'loading'
                    }
                </div>
            </div>
        </div>
    )
}

export default DetailServiceVirtual;
