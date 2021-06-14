import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import smoothScrollTop from "../shared/smoothScrollTop";

export const Navigation = (props) => {
  useEffect(() => {
    smoothScrollTop();
  }, []);
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container contentainer-nav'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <div className="contentainer-nav">
            <Link to="/" className='navbar-brand page-scroll'>
                SCMC
            </Link>
            <Link to="/">
                <img src='img/logo.png' alt='...' className='logo'/> 
            </Link>
          </div>
          
          
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#services-conciliation' className='page-scroll'>
                Servicio de Conciliación
              </a>
            </li>
            <li>
              <a href='#services-virtual' className='page-scroll'>
                Servicio Virtual
              </a>
            </li>
            <li>
              <a href='#we' className='page-scroll'>
                Nosotros
              </a>
            </li>
            <li>
              <a href='#benefits' className='page-scroll'>
                Beneficios
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contáctanos
              </a>
            </li>
            <a href='#contact'className="btn btn-custom">
                MESA DE PARTES
            </a>
          </ul>
        </div>
      </div>
    </nav>
  )
}
