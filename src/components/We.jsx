export const We = (props) => {
    return (
        <div id='we'>
            <div className='container'>
                <div className='row'>
                    
                    <div className='col-xs-12 col-md-6'>
                        <div className='about-text'>
                            <h2>¿Ques es el Centro de Conciliación EX LEGE?</h2>
                            <p className="text-justify">{props.data ? props.data.paragraph : 'loading...'}</p>
                            <h3>¿Por qué elegirnos?</h3>
                            <div className='list-style'>
                                <div className='col-lg-12 col-sm-6 col-xs-12'>
                                    <ul>
                                        {props.data
                                        ? props.data.Why.map((d, i) => (
                                            <li key={`${d}-${i}`}>{d}</li>
                                            ))
                                        : 'loading'}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-xs-12 col-md-6'>
                        {' '}
                        <img src='img/about.jpg' className='img-responsive' alt='' />{' '}
                    </div>

                </div>
            </div>
        </div>
    )
}
