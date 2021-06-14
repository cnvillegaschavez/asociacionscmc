import { Link } from 'react-router-dom';

export const ServicesVirtual = (props) => {
    return (
        <div id="services-virtual" className="text-center">
            <div className="container">  
                <div className="col-md-8 col-md-offset-2 section-title title" style={{marginBottom: 0+'px'}}>
                    <h2  className="title">Servicios virtuales para ti</h2>
                </div>
                <div id="row">
                    {props.data
                        ? props.data.map((element, i) => (
                            <div key={`${element.title}-${i}`} className='col-md-3 col-sm-6 col-xs-5 team card' style={{height: 400+'px'}}>
                                <div className='thumbnail' style={{height: 270+'px'}}>
                                    <img src={element.img} alt='...' className='team-img' />
                                    <div className='caption'>
                                        <h4 className="sub-title">{element.title}</h4>
                                        <h6 className="paragraph">{element.content}</h6>
                                    </div>
                                </div>
                                <Link  to={`/servicevirtual/${element.title}`}>
                                    <button className="btn btn-custom btn-lg"> Contratar</button>
                                </Link>
                            </div>
                            ))
                        : 'loading'}
                </div>
            </div>
        </div>
    );
};
