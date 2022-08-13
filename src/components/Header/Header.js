
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.scss'
import RightContent from './RightContent';
import LeftContent from './LeftContent';
import {Link} from 'react-router-dom';
import { useRef } from 'react';
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'

function Header({toggleModal,active}) {
    const {t} = useTranslation();
    const changeLanguage = (lng) => {
        i18next.changeLanguage(lng);
    };
    const HEADER_TOP = useRef(null);
    const NAV_MENU = useRef(null);
    const HEADER = useRef(null);
    let sticky = HEADER;

    function headerFixed() {
        if(window.scrollY> sticky){
            HEADER_TOP.current.classList.add('hide');
        } else {
            HEADER_TOP.current.className.remove('hide');
        }
    }
    function showModal(){

    }
    const NAV = [
        {
            "NAME": " HOME",
            "ROUTE": "/",
        },
        {
            "NAME": " INTRO",
            "ROUTE": "/intro",
        },
        {
            "NAME": " PLACE",
            "ROUTE": "/place"
        },
        {
            "NAME": " BOOKING",
            "ROUTE": "/booking"
        },
        
    ]
    const languages = [
        {
            code: 'en',
            name: 'English',
            country_code: 'gb',
          },
        {
            code: 'vn',
            name: 'Vietnamese',
            country_code: 'vn',
        },
      
      ]
      let HEADER_TRANS = i18next.t(`header_pages`, { returnObjects: true });
      let TOP_HEADER = t('top_header', { returnObjects: true });
    return (
        <header ref={HEADER}>
            <div ref={HEADER_TOP} className='header__top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className='content'>
                                <LeftContent content={TOP_HEADER.left} languages={languages} changeLanguage={changeLanguage}/>
                                <RightContent content={TOP_HEADER.right}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div ref ={NAV_MENU} className='header__menu'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <nav className='navbar'>
                                <a className ='nav__brand'>
                                    <h1 className='title'>TRIP360</h1>
                                    </a>
                                    <div className='navbar-collapse'>
                                        <ul className='navbar__nav'>
                                            
                                            {NAV.map((item,index)=>{
                                                let LINKCLASSNAME = 'nav__link';
                                                let ITEMCLASSNAME = 'nav__item';
                                                if(index==active) ITEMCLASSNAME+=' active';
                                                return(<li key={index} className={ITEMCLASSNAME}>
                                                <Link to={item.ROUTE} className={LINKCLASSNAME}>
                                                    {HEADER_TRANS[index]}
                                                </Link>
                                            </li>)
                                            })}
                                            <li className='nav__item'>
                                            <Button onClickFunc={toggleModal} btnClassName='btn-active'>{HEADER_TRANS[HEADER_TRANS.length-1]}</Button>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                <button className='navbar__toggle'>
                                <FontAwesomeIcon icon="fa-solid fa-bars" />
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>);
}

export default Header;