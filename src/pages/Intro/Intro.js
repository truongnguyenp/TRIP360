import Header from "../../components/Header/Header";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Button from "../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import Card from "../../components/Card/Card";
import './intro.scss'
import { createRef } from "react";
import Features from "../Home/Features/Features";
function Intro({ content }) {
    const { t } = useTranslation();
    let  intro = t('intro', { returnObjects: true });
    const BOOKING_LIST = createRef();
    return (
        <section className="booking ">
            <Header active="1"></Header>
            <Breadcrumb bcImg="https://vivu.net/uploads/2022/01/du-lich-mien-trung-0.jpeg" bcTitle={intro.content} />
            <Features/>
        </section >);
}


export default Intro;