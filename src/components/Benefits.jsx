export const Benefits = (props) => {
  return (
    <div id='benefits' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Somos lideres en servicios de centro de conciliación en el Perú</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((element, i) => (
                <div key={`${element.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '}
                  <i className={element.icon}></i>
                  <h3>{element.title}</h3>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
