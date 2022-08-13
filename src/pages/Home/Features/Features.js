import FeaturesGames from "./FeaturedGames/FeaturesGames";
import FeaturesBox from "./FeaturesBox/FeaturesBox";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import './features.scss';
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
function Features() {
    const {t} = useTranslation();
    let FEATURES = t('features',{ returnObjects: true });
    const SECTION_HEADING =(FEATURES.features_games.section_heading);
    return (<section className="features">
            <div className="container">
                <div className="row">
                    <div className="col-12-align">
                        <FeaturesBox content={FEATURES.features_box}>

                        </FeaturesBox>
                    </div>
                </div>
            </div>
        <div className="featured-games">
            <div className="row content">
            <div className="col">
               <SectionHeading title={SECTION_HEADING.title} subtitle={SECTION_HEADING.sub_title}>

               </SectionHeading>
            </div>
            </div>
            <div className="row">
                <FeaturesGames content={FEATURES.features_games}></FeaturesGames>
            </div>
        </div>
    </section>);
}

export default Features;