import Card from "../../../../components/Card/Card";
import image1 from '../../../../assets/feature/icon1.png';
import image2 from '../../../../assets/feature/icon2.png';
import image3 from '../../../../assets/feature/icon3.png';
function FeaturesBox({content}) {
    const FEATURES_OFFER = [
        {
            "image": image1,
            "title": content[0],
            "Other": "READ MORE"
        },
        {
            "image": 'https://scholarlyoa.com/wp-content/uploads/2020/03/Customer-Service-girl-640x581.jpeg',
            "title": content[1],
            "Other": "READ MORE"
        },
        {
            "image": image3,
            "title": content[2],
            "Other": "READ MORE"
        }
        

    ]
    return (<div className="features-box">
            {FEATURES_OFFER.map((item,index)=>{
                console.log(item)
                return(
                    <Card id={index} image = {item.image} title={item.title}>
                            
                    </Card>
                )
            })}
    </div>);
}

export default FeaturesBox;