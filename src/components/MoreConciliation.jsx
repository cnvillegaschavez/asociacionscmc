import React, {useEffect} from "react";
import { useParams } from 'react-router-dom';
import smoothScrollTop from "../shared/smoothScrollTop";

const MoreConciliation = (props) => {
  const { titlex } = useParams();
  const phone = "+51962212903";
  const message = `Hola, quisiera consultar acerca del servicio de "${titlex}"`;
  
  useEffect(() => {
    smoothScrollTop();
  }, []);


  return (
    <div id="services-conciliation" className="text-center">
      <div className="container">

        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>{titlex}</h2>
        </div>
        
        <div id="row" style={{margin: 0 + " auto"}}> 
                {props.data
                  ? props.data.filter(element => element.title === titlex).map((elementFilter, i) => (
                        elementFilter.more.map((value, i) => (
                            <div key={`${value.title}-${i}`} className='col-md-3 col-sm-6 col-xs-6 team' style={{height: 430+'px'}}>
                                <div className='thumbnail' style={{height: 290+'px'}}>
                                    <img src={value.img} alt='...' className='team-img'/> 
                                    <div className='caption'>
                                        <h4>{value.title}</h4>
                                    </div>
                                </div>
                                <a href={`https://api.whatsapp.com/send?phone=${phone}&text=${message}`}>
                                    <button className="btn btn-primary text-primary" style={{width: 100+'px'}}>Contactar <i class="fa fa-whatsapp"/></button>
                                </a>
                            </div>
                        ))
                  ))
                  : 'loading'
                }
          </div>
      </div>
    </div>
  );
};

export default MoreConciliation;
