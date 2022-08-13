import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import { useTranslation } from 'react-i18next';
function Hero() {
    const {t} = useTranslation();
    let hero = t('home_hero',{ returnObjects: true });
    return (<section className="hero">
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <div className="content">
                        <h5 className="subtitle">
                            {hero[0]}
                        </h5>
                        <h1 className="title">
                            {hero[1]}
                        </h1>
                        <p className="text">
                            {hero[2]}
                        </p>

                        <a href='#activities'>
                        <Button className='btn-content' btnClassName='btn-active'>{hero[3]}</Button>
                        </a>


                    </div>
                </div>
                <div className="col-7">
                    <div className="hero-img2">
                        <img className='hero-img' src='http://micdongsaigon.com.vn/wp-content/uploads/2020/03/Du-lich-toan-cau.jpg' alt="" />
                    </div>
                </div>

            </div>
        </div>
    </section>);
}

export default Hero;