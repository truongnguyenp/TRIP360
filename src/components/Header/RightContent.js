import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function RightContent({content}) {
    return (<div className="right-content">
        <ul className="right-list">
            <li>
                <div className="notification dropdown">
                    <FontAwesomeIcon icon="fas fa-bell" />
                    <span className="count">11</span>
                    <div className="dropdown__menu">
                        <ul className="list">
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon="fas fa-bell" />
                                    FESTIVAL VIETNAM
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </div>);
}

export default RightContent;