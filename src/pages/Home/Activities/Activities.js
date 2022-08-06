import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import Table from "../../../components/Table/Table";
import Button from "../../../components/Button/Button";
import { useState } from "react";
function Activities() {
    const DATA_FETCH = [
        [{
            "NAME": "DA NANG",
            "ID": "500$",
            "PROFIT": "FULL"
        },
        {
            "NAME": "NEW YORK",
            "ID": "500$",
            "PROFIT": "FULL"
        },
        {
            "NAME": "PARIS",
            "ID": "500$",
            "PROFIT": "FULL"

        },
        {
            "NAME": "MELBOURNE",
            "ID": "500$",
            "PROFIT": "FULL"
        },
        {
            "NAME": "PRAHA",
            "ID": "500$",
            "PROFIT": "FULL"

        },
        {
            "NAME": "HA NOI",
            "ID": "500$",
            "PROFIT": "FULL"
        },
        {
            "NAME": "NHA TRANG",
            "ID": "500$",
            "PROFIT": "FULL"
        },
        {
            "NAME": "DA LAT",
            "ID": "400$",
            "PROFIT": "FULL"

        }],
        [
            {
                "NAME": "DA NANG",
                "ID": "500$",
                "PROFIT": "FULL"
            }, {
                "NAME": "HA NOI",
                "ID": "500$",
                "PROFIT": "FULL"
            },
            {
                "NAME": "NHA TRANG",
                "ID": "500$",
                "PROFIT": "FULL"
            },
            {
                "NAME": "DA LAT",
                "ID": "B799B87240",
                "PROFIT": "FULL"

            }], [{
                "NAME": "PARIS",
                "ID": "500$",
                "PROFIT": "FULL"
            },
            {
                "NAME": "MELBOURNE",
                "ID": "500$",
                "PROFIT": "FULL"
            },
            {
                "NAME": "PRAHA",
                "ID": "500$",
                "PROFIT": "FULL"

            }]


    ]
    let [data, setData] = useState(DATA_FETCH[0]);
    const TABLE_HEADING = [
        "PLACE", "PRICE", "SERVICE"
    ]
    const SECTION_HEADING = {
        "SUBTITLE": "THE SMARTER WAY TO",
        "TITLE": "TRAVEL",
        "TEXT": "THE FIRST 3D PLACE TRAVELLING AGENCY"
    }
    const TAB_MENU =
        ["ALL", "ASIA", "EUROPE"];
    let [menuActive, setMenuActive] = useState(0);
    return (<div className="activities">
        <div className="container">
            <div className="row">

                <SectionHeading subtitle={SECTION_HEADING.SUBTITLE} title={SECTION_HEADING.TITLE} text={SECTION_HEADING.TEXT}></SectionHeading>
            </div>

            <div className="row">
                <div className="col">
                    <div className="tab__menu">
                        <ul className="menu-list">
                            {TAB_MENU.map((item, index) => {
                                let BTNCLASSNAME = ' ';
                                if (index == menuActive) BTNCLASSNAME += 'btn-active';
                                return (
                                    <li index={index}>
                                        <Button onClickFunc={() => { setMenuActive(index); setData(DATA_FETCH[index]); }} btnClassName={BTNCLASSNAME}>
                                            {item}
                                        </Button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="tab__content">
                        <Table data={data} header={TABLE_HEADING}>
                        </Table>
                    </div>

                </div>
            </div>
        </div>

    </div>);
}

export default Activities;