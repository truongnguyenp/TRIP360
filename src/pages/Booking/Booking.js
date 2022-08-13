import Header from "../../components/Header/Header";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import './booking.scss';
import Button from "../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
function Booking({ content }) {
    const { t } = useTranslation();
    let BOOKING = t('booking', { returnObjects: true });
    return (
        <section className="booking ">
            <Header active="2"></Header>
            <Breadcrumb bcImg="https://img.freepik.com/free-vector/hotel-booking-concept-illustration_114360-2257.jpg?w=2000" bcTitle="booking" />
            <div className="booking__section">
                <div className="booking__content">
                    <div className="selection__place">
                        <div className="booking__group">
                            <label for="selectPlace"><FontAwesomeIcon icon="fa-solid fa-location-dot" />{" "}
                            </label>
                            <input id="selectPlace" />
                        </div>
                        <div className="booking__group booking__date">
                            <label for="selectDate"><FontAwesomeIcon icon="fa-solid fa-calendar-days" />{" "}
                            </label>
                            <input id="selectDate" />
                        </div>
                    </div>
                    <Button btnClassName='btn-active'>{BOOKING.find}</Button>
                </div>

            </div>
        </section >);
}


export default Booking;