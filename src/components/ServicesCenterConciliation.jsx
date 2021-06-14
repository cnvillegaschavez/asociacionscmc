import { Link } from 'react-router-dom';

export const ServicesCenterConciliation = (props) => {
    return (
        <div id="services-conciliation" className="text-center my-center">
            <div className="container">
                <div className="col-md-8 col-md-offset-2 section-title" style={{marginBottom: 0+'px'}}>
                    <h2>Servicios de Conciliación para ti</h2>
                </div>
                <div id="row" style={{margin: 0 + " auto"}} >
                    {props.data
                        ? props.data.map((element, i) => (
                            <div key={`${element.title}-${i}`} className='col-md-3 col-sm-6 col-xs-6 team card' style={{height: 430+'px'}}>

                                <div className='thumbnail' style={{height: 290+'px'}}>
                                    <img src={element.img} alt='...' className='team-img'/> 
                                    <div className='caption'>
                                        <div style={{height: 50+'px'}}>
                                            <h4>{element.title}</h4>
                                        </div>
                                        <div style={{height: 50+'px'}}>
                                            <h6 >{element.content}</h6>
                                        </div>
                                    </div>
                                </div>
                                <Link  to={`/${element.title}`}>
                                    <button>CONTRATAR</button>
                                </Link>
                                
                            </div>
                        ))
                        : 'loading'}
                </div>
            </div>
        </div>
    );
};
