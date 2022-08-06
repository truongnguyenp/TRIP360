import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import heroarea from '../../../assets/heroarea.png';
function Hero() {
    
    return (<section className="hero">
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <div className="content">
                        <h5 className="subtitle">
                            Welcome to our travel agency
                        </h5>
                        <h1 className="title">
                            TRIP360
                        </h1>
                        <p className="text">
                            Let's travel together
                        </p>
                        <Button className='btn-content' btnClassName='btn-active'>SEE PLACE TO TRAVEL</Button>


                    </div>
                </div>
                <div className="col-7">
                    <div className="hero-img2">
                        <img className='hero-img' src='http://micdongsaigon.com.vn/wp-content/uploads/2020/03/Du-lich-toan-cau.jpg' alt=""/>
                    </div>
                </div>

            </div>
        </div>
    </section>);
}

export default Hero;