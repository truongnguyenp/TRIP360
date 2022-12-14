import Header from "../../components/Header/Header";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import './booking.scss';
import Button from "../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import Card from "../../components/Card/Card";
import { createRef } from "react";
function Booking({ content }) {
    const { t } = useTranslation();
    let BOOKING = t('booking', { returnObjects: true });
    const BOOKING_LIST = createRef();
    function HandleList() {

        if (BOOKING_LIST) {
            BOOKING_LIST.current.classList.add('show');
        }
    }
    function HandleSelect(){
        if (BOOKING_LIST) {
            BOOKING_LIST.current.classList.remove('show');
        }
    }
    const PLACE = [
        "Thanh Hoá", "Nghệ An",
         "Hà Tĩnh", "Quảng Bình", "Quảng Trị", "Đà Nẵng", "Quảng Nam", "Quảng Ngãi", "Bình Định", "Phú Yên", "Khánh Hoà", 
         "Ninh Thuận", "Bình Thuận"
    ]
    const ITEMS = [
        {
            "name": "Continental",
            "image": "https://mrvivu.com/wp-content/uploads/2022/06/Vinpearl-hai-phong.jpeg",
        },
        {
            "name": "Muongthanh",
            "image": "https://mrvivu.com/wp-content/uploads/2022/06/Vinpearl-hai-phong.jpeg",
        },
        {
            "name": "Monaco",
            "image": "https://mrvivu.com/wp-content/uploads/2022/06/Vinpearl-hai-phong.jpeg",
        },
        {
            "name": "Riverside",
            "image": "https://mrvivu.com/wp-content/uploads/2022/06/Vinpearl-hai-phong.jpeg",
        },
        {
            "name": "Cocobay",
            "image": "https://mrvivu.com/wp-content/uploads/2022/06/Vinpearl-hai-phong.jpeg",
        },
        {
            "name": "Goldenbay",
            "image": "https://mrvivu.com/wp-content/uploads/2022/06/Vinpearl-hai-phong.jpeg",
        },


    ]
    return (
        <section className="booking ">
            <Header active="3"></Header>
            <Breadcrumb bcImg="http://www.dulichduyendangvietnam.com/wp-content/uploads/du-lih-mien-trung1a.jpg" bcTitle="BOOKING" />
            <div className="booking__section">
                <div className="booking__content">
                    <div className="selection__place">
                        <div className="booking__group">
                            <label for="selectPlace"><FontAwesomeIcon icon="fa-solid fa-location-dot" />{"  "}
                            </label>
                            <select id="selectPlace" onChange={HandleSelect}>
                                {
                                    PLACE.map((item, index) => {
                                        return (
                                            <option>
                                                {item}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="booking__group booking__date">
                            <label for="selectDate"><FontAwesomeIcon icon="fa-solid fa-calendar-days" />{"  "}
                            </label>
                            <input id="selectPlace" type="date">

                            </input>
                        </div>
                    </div>
                    <Button onClickFunc={HandleList} btnClassName='btn-active'>{BOOKING.find}</Button>
                </div>


            </div>
            <div className="booking__list" ref={BOOKING_LIST}>
                <div className="row">
                    {ITEMS.map((item,index) => {
                            return (
                                <div className="list-item">
                                        <h5 className="title">{item.name}</h5>
                                        <Button btnClassName={"btn-active btn-book"}>{BOOKING.book}</Button>
                                </div>
                            )

                    })}
                </div>
            </div>
        </section >);
}


export default Booking;