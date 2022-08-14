import Header from "../../components/Header/Header";
import BreadcrumbVid from "../../components/BreadcrumbVid/Breadcrumb";
import Button from "../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import './place.scss';
import caurong from '../../assets/9convert.com - Da Nang in 360 Dragon Bridge_1080p.mp4.webm'
import hoian from '../../assets/9convert.com - Hoi An in 360 Thu Bon River_1080p.mp4'
import { createRef } from "react";
function Place({ content }) {
    const { t } = useTranslation();
    // let Place = t('intro', { returnObjects: true });
    const BOOKING_LIST = createRef();
    return (
        <section className="booking ">
            <Header active="2"></Header>
            <BreadcrumbVid bcImg={caurong} bcTitle="Cau Rong" />
            <BreadcrumbVid bcImg={hoian} bcTitle="Hoi An" />

        </section >);
}


export default Place;