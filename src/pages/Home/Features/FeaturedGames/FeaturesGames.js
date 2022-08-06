import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../../../components/Card/Card";
import game1 from '../../../../assets/game/icon1.png';
import game2 from '../../../../assets/game/icon2.png';
import game3 from '../../../../assets/game/icon3.png';
import Button from "../../../../components/Button/Button";
function FeaturesGames() {
    const FEATURED_GAMES = [
        {
            "name": "PLACE",
            "image": 'https://previews.123rf.com/images/kannaa123rf/kannaa123rf1609/kannaa123rf160900034/67556269-world-landmarks-concept-vector-illustration-for-travel-design-famous-country-symbol-icon-tourism-cit.jpg'
        },
        {
            "name": "TOUR",
            "image": 'https://img.freepik.com/premium-vector/travel-icon-elements_1639-5063.jpg?w=2000'
        },
        {
            "name": "RESTAURANT",
            "image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18T3AuaaUv1I2G4iHRTu2lcpfwSOoSHI1Xw&usqp=CAU'
        }
    ]
    return (
            <div class="col-12-align">
            {
                        FEATURED_GAMES.map((item) => {
                            return (
                                <Card image={item.image} title={item.name}>
                                    <Button className='center' btnClassName='btn-active'>
                                        TRY NOW
                                    </Button>
                                </Card>
                            )
                        })
                    }
                <div class="game-slider owl-carousel owl-theme owl-loaded">
                    



                    {/* <div class="owl-stage-outer">
                        <div class="owl-stage" >
                            <div class="owl-item cloned" >
                                <div class="item">
                                    <div class="single-game">
                                        <a href="#" class="mybtn2">PLAY NOW !</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div class="owl-controls">
                        <div class="owl-nav">
                            <div class="owl-prev" >
                                <FontAwesomeIcon icon="fa fa-angle-left" />
                            </div>
                            <div class="owl-next" ><i class="fa fa-angle-right"></i>
                            </div>
                        </div>
                        <div class="owl-dots">
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default FeaturesGames;