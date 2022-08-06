import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import Winner from "../../../components/Winner/Winner";
import video from '../../../assets/video.mp4'
import video2 from '../../../assets/video2.mp4'
function RecentWinners() {
    const SECTION_HEADING = {
        "SUBTITLE": "CHECK OUT OUR",
        "TITLE": "3D VIDEO",
        "TEXT": "You can see the world 3D"
    }
    return (<section className="recent-winners">
        <div className="container">
            <div className="row">
                <SectionHeading title={SECTION_HEADING.TITLE} subtitle={SECTION_HEADING.SUBTITLE} TEXT={SECTION_HEADING.TEXT} />

            </div>
            <div className="row winners center">
                <video controls>
                    <source src={video} />
                </video>
            </div>
            <div className="row winners center">
                <video controls>
                    <source src={video2} />
                </video>
            </div>
        </div>
    </section>);
}

export default RecentWinners;